import React from "react";
import Header from "../../components/Header";
import Nav from "../Nav";
import About from "./About";

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

function index() {
  return (
    <>
      <Header />
      <About />
    </>
  );
}

export default index;
