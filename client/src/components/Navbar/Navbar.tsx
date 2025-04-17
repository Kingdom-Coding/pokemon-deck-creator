import Searchbar from "../Searchbar/Searchbar";
import Filter from "../Deck/Deck";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <Filter />
      <Searchbar />
    </nav>
  );
}

export default Navbar;
