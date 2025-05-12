const Search = ({ searchTerm, setSearchTerm, sortOption, setSortOption }) => {
  return (
    <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="recent">Sort by Recent</option>
        <option value="rating">Sort by Rating</option>
      </select>
    </div>
  );
};

export default Search;
