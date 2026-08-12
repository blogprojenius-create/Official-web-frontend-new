import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page } from "react-pdf";
import { Download } from "lucide-react";

import magazineFile from "/magazine.pdf";
import flipSoundFile from "/page-flip-01a.mp3";

import "../assets/css/MagazineSection.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

/* A4 portrait ratio: 1 : 1.414  →  width × 1.414 = height */
const PAGE_WIDTH  = 180;
const PAGE_HEIGHT = Math.round(PAGE_WIDTH * 1.414);   // 255
const MOBILE_PAGE_WIDTH  = 155;
const MOBILE_PAGE_HEIGHT = Math.round(MOBILE_PAGE_WIDTH * 1.414); // 219

/* ─── Render only nearby pages to kill lag ─── */
const MagazinePageItem = forwardRef(
  ({ pageNumber, activePage, width, height }, ref) => {
    // render current spread + 1 page ahead on each side so it's ready before flip
    const shouldRender = Math.abs(pageNumber - (activePage + 1)) <= 3;
    return (
      <div className="magazine-sec-page-wrap" ref={ref} style={{ width, height }}>
        {shouldRender ? (
          <Page
            pageNumber={pageNumber}
            width={width}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            loading=""
          />
        ) : (
          <div className="magazine-page-placeholder" aria-hidden="true" />
        )}
      </div>
    );
  }
);
MagazinePageItem.displayName = "MagazinePageItem";

/* ─── Scroll-driven mascot motion (same as original About.jsx toy) ─── */
function useMascotScroll(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    let frameId = 0;
    const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi);

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const start = vh * 0.98;
      const end   = vh * 0.20;
      const progress = clamp((start - rect.top) / (start - end), 0, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      // dramatic: slide in from far left, big tilt, scale up
      const x      = (1 - eased) * -160;
      const y      = (1 - eased) * 80 - eased * 12;
      const rotate = -18 + eased * 16;
      const scale  = 0.72 + eased * 0.28;
      const op     = Math.max(0.25, eased);

      el.style.setProperty("--m-x",  `${x.toFixed(1)}px`);
      el.style.setProperty("--m-y",  `${y.toFixed(1)}px`);
      el.style.setProperty("--m-r",  `${rotate.toFixed(1)}deg`);
      el.style.setProperty("--m-s",  scale.toFixed(3));
      el.style.setProperty("--m-op", op.toFixed(3));
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [ref]);
}

/* ─── Main component ─── */
const MagazineSection = () => {
  const [totalPages, setTotalPages] = useState(null);
  const [activePage, setActivePage]  = useState(0);
  const flipBookRef  = useRef(null);
  const mascotRef    = useRef(null);
  const audioRef     = useRef(null);

  useMascotScroll(mascotRef);

  // Pre-load audio once — eliminates the flip-lag
  useEffect(() => {
    audioRef.current = new Audio(flipSoundFile);
    audioRef.current.load();
    return () => { audioRef.current = null; };
  }, []);

  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches
  );

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const updateSize = () => setIsMobile(query.matches);
    updateSize();
    query.addEventListener("change", updateSize);
    return () => query.removeEventListener("change", updateSize);
  }, []);

  const pageSize = useMemo(
    () => ({
      width:  isMobile ? MOBILE_PAGE_WIDTH  : PAGE_WIDTH,
      height: isMobile ? MOBILE_PAGE_HEIGHT : PAGE_HEIGHT,
    }),
    [isMobile]
  );

  const playFlip = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  const handleFlip        = (e) => setActivePage(e.data);
  const handleDocumentLoad = ({ numPages }) => setTotalPages(numPages);

  const goNext = () => { flipBookRef.current?.pageFlip()?.flipNext(); playFlip(); };
  const goPrev = () => { flipBookRef.current?.pageFlip()?.flipPrev(); playFlip(); };

  return (
    <section className="magazine-sec-main-wrapper">
      <div className="magazine-viewer-container">

        {/* ── Col 1: text copy ── */}
        <div className="magazine-copy-col">
          <span id="sub-heading" className="mag-sub-label">Magazine</span>
          <h2 className="section-title mag-heading" id="title">
            Explore the Projenius Magazine
          </h2>
          <p className="section-desc mag-desc">
            See our services, training work, project approach, and company story
            in one interactive digital magazine.
          </p>
          <div className="mag-panel-tags" aria-label="Magazine highlights">
            <span>Company story</span>
            <span>Services</span>
            <span>Workshops</span>
          </div>
          <a href={magazineFile} download className="magazine-download-btn">
            <Download size={18} strokeWidth={2} />
            Download Magazine
          </a>
        </div>

        {/* ── Col 2: mascot ── */}
        <div className="magazine-mascot-col" aria-hidden="true" ref={mascotRef}>
          <div className="mag-mascot-inner">
            <div className="mag-mascot-bubble">Open the magazine</div>
            <img
              src="/images/corporate-toy.png"
              alt=""
              className="mag-mascot-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* ── Col 3: flipbook + controls ── */}
        <div className="magazine-sec-book-area">
          <div className="magazine-sec-book-shadow">
            <Document file={magazineFile} onLoadSuccess={handleDocumentLoad}>
              {totalPages && (
                <HTMLFlipBook
                  width={pageSize.width}
                  height={pageSize.height}
                  minWidth={120}
                  maxWidth={pageSize.width}
                  minHeight={170}
                  maxHeight={pageSize.height}
                  size="fixed"
                  className="magazine-sec-flip-book"
                  ref={flipBookRef}
                  showCover={true}
                  usePortrait={isMobile}
                  useMouseEvents={true}
                  onFlip={handleFlip}
                  maxShadowOpacity={0.32}
                  drawShadow={true}
                  flippingTime={650}
                  mobileScrollSupport={false}
                >
                  {Array.from(new Array(totalPages), (_, i) => (
                    <MagazinePageItem
                      key={i}
                      pageNumber={i + 1}
                      activePage={activePage}
                      width={pageSize.width}
                      height={pageSize.height}
                    />
                  ))}
                </HTMLFlipBook>
              )}
            </Document>
          </div>

          <div className="magazine-controls-pill">
            <button type="button" className="magazine-nav-button" onClick={goPrev} aria-label="Previous page">‹</button>
            <span className="magazine-page-number">{activePage + 1} / {totalPages || 0}</span>
            <button type="button" className="magazine-nav-button" onClick={goNext} aria-label="Next page">›</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MagazineSection;
