import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from "./rightSidebar.module.css";
import SuggestionsContainer from "./SuggestionsContainer/SuggestionsContainer";
import TrendsContainer from "./TrendsContainer/TrendsContainer";
import Footer from "./Footer/Footer";

// Mock data - replace with real data later
const mockTrends = [
  {
    id: "1",
    category: "Gaming • Trending",
    name: "#VALORANTChampions",
    postCount: "25.2K posts",
  },
  {
    id: "2",
    category: "Trending in Technology",
    name: "React",
    postCount: "127K posts",
  },
  {
    id: "3",
    category: "Sports • Trending",
    name: "#WorldCup",
    postCount: "89.1K posts",
  },
  {
    id: "4",
    category: "Entertainment",
    name: "#Oscars2024",
    postCount: "45.6K posts",
  },
  {
    id: "5",
    category: "Technology",
    name: "TypeScript",
    postCount: "33.8K posts",
  },
];

const mockSuggestions = [
  {
    id: "1",
    displayName: "Tailwind CSS",
    username: "tailwindcss",
    avatar: "/avatars/tailwind.jpg",
    verified: true,
    isFollowing: false,
  },
  {
    id: "2",
    displayName: "TypeScript",
    username: "typescript",
    avatar: "/avatars/typescript.jpg",
    verified: true,
    isFollowing: false,
  },
  {
    id: "3",
    displayName: "freeCodeCamp.org",
    username: "freeCodeCamp",
    avatar: "/avatars/freecodecamp.jpg",
    verified: true,
    followedBy: "Mohammad Nablus, Yazan Arafeh",
    isFollowing: false,
  },
];

const RightSidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState(mockSuggestions);

  const footerLinks = [
    { title: "Terms of Service", path: "/terms" },
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Cookie Policy", path: "/cookies" },
    { title: "Accessibility", path: "/accessibility" },
    { title: "Ads info", path: "/ads-info" },
    { title: "More…", path: "/more" },
  ];

  const handleSearch = (value: string) => {
    setSearchValue(value);
    // Implement search logic here
    console.log("Searching for:", value);
  };

  const handleSearchSubmit = (value: string) => {
    // Implement search submit logic
    console.log("Search submitted:", value);
  };



  const handleShowMoreTrends = () => {
    console.log("Show more trends clicked");
    // Implement show more trends logic
  };

  const handleShowMoreSuggestions = () => {
    console.log("Show more suggestions clicked");
    // Implement show more suggestions logic
  };

  return (
    <aside className={styles.rightSidebar}>
      <div className={styles.content}>
        <SearchBar
          value={searchValue}
          onChange={handleSearch}
          onSubmit={handleSearchSubmit}
          placeholder="Search"
        />

        <SuggestionsContainer
          suggestions={mockSuggestions}
          onShowMore={handleShowMoreSuggestions}
        />
        <TrendsContainer
          trends={mockTrends}
          onShowMore={handleShowMoreTrends}
        />

        <Footer footerLinks={footerLinks} />
      </div>
    </aside>
  );
};

export default RightSidebar;
