import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const root = document.querySelector("#root");

  useEffect(() => {
    window.scrollTo(0, 0);
    root?.scrollTo(0, 0);
  }, [pathname, root]);

  return null;
}
