import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    //   window.scrollTo(0, 0, "smooth");
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
