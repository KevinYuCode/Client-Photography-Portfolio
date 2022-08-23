import Header from "../components/Header.jsx";
import Nav from "./Nav";
import Gallery from "./Gallery";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScrollDirection } from "../redux/gallery/gallery.js";
import { throttle } from "lodash";

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    let gallery = document.getElementById("layout");
    var prevScrollpos = gallery.scrollTop;

    gallery.addEventListener(
      "scroll",
      throttle(() => {
        var currentScrollPos = gallery.scrollTop;
        if (currentScrollPos < 40) {
          dispatch(setScrollDirection("UP"));
        } else if (prevScrollpos < currentScrollPos) {
          dispatch(setScrollDirection("DOWN"));
        } else {
          dispatch(setScrollDirection("UP"));
        }
        prevScrollpos = currentScrollPos;
      }, 200),
    );
  }, []);
  return (
    <>
      <Header />
      <Gallery />
    </>
  );
}
