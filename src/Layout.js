import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) {
          window.scrollTo({
            behavior: "smooth",
            top: el.offsetTop - 100,
          });
        }
      }, 200);
    } else {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  }, [location.hash]);

  return (
    <React.Fragment>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YJ5JMDLVS6"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YJ5JMDLVS6');
        `}
        </script>
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
