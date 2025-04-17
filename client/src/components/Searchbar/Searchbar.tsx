import "./Searchbar.css";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="searchbar-container">
      <FaSearch />
      <input type="search" />
    </div>
  );
}

export default Searchbar;
