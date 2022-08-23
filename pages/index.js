import Header from "../components/Header.jsx";
import Nav from "./Nav";
import Gallery from "./Gallery";
import { motion } from "framer-motion";
import { useEffect } from "react";

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}
export default function Home() {

  return (
    <>
      <Header />
      <Gallery />
    </>
  );
}
