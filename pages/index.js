import Header from "../components/Header.jsx";
import Nav from "./Nav";
import Gallery from "./Gallery";
export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <Nav />
        <Gallery />
      </div>
    </>
  );
}
