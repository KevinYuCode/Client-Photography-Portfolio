import { Provider } from "react-redux";
import "../styles/globals.css";
import "./styles/index.scss";
import store from "../redux/store.js";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let layout = document.getElementById("layout");
    layout.addEventListener("scroll", (e) => {
      if (e.target.scrollTop >= 0 && e.target.scrollTop < 2) {
        dispatch(setIsTopPage(true));
        dispatch(setScrollDirection("UP"));
      } else {
        dispatch(setIsTopPage(false));
      }
    });

  }, []);

  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <div id="layout" className="layout-container">
          <Nav homeOn={true} />
          <Component {...pageProps} />
        </div>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
