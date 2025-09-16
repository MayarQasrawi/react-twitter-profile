import { Search } from "lucide-react";
import Styles from "./searchBar.module.css";

const SearchBar = ({ 
  placeholder = "Search", 
  className = "",
  disabled = false,
  ...props 
}) => {



  return (
    <form 
      role="search" 
      className={`${Styles.searchBar} ${className}`.trim()}
      {...props}
    >
      <Search 
        className={Styles.searchIcon}
        aria-hidden="true"
      />

      <input
        type="search"
        id="search"
        name="search"
        placeholder={placeholder}
        autoComplete="off"
        aria-label={placeholder}
        className={Styles.searchInput}
        disabled={disabled}
      />
    </form>
  );
};

export default SearchBar;