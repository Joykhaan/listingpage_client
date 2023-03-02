import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";

export default function Layouts({ children }) {
    return (
      <>
        <Nav></Nav>
        <main>{children}</main>
        <Footer></Footer>
      </>
    )
  }