import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <Particles />

      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
