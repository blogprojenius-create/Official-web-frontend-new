import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {

    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // A route change must always begin at the top. Smooth scrolling can
        // retain the outgoing page's position during an animated transition.
        window.history.scrollRestoration = "manual";
        window.scrollTo(0, 0);
        const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
        return () => window.cancelAnimationFrame(frame);

    }, [pathname]);

    return null;

}
