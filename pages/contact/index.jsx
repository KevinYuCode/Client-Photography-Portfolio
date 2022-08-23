import React from "react";
import Header from "../../components/Header";
import Nav from "../Nav";
import Contact from "./Contact";

export async function getStaticProps({ params }) {
  return {
    props: {},
  };
}

function index() {
  return (
    <>
      <Header />
      <Contact />
    </>
  );
}

export default index;
