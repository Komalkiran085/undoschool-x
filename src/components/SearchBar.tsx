const SearchBar = () => {
  return (
    <div
      className="
        flex items-center
        bg-white rounded-full shadow-lg overflow-hidden
        w-full max-w-[600px]
        mt-10
      "
    >
      <input
        type="text"
        placeholder="What do you want to learn today?"
        className="
          flex-1
          px-4 sm:px-6
          py-3 sm:py-4
          text-sm sm:text-base
          outline-none text-gray-600
        "
      />

      {/* <button
        className="
          px-4 sm:px-6 md:px-8
          py-3 sm:py-4
          text-sm sm:text-base
          bg-gradient-to-r from-purple-600 to-pink-500
          text-white font-medium
          whitespace-nowrap
        "
      >
        Search
      </button> */}
      <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 -translate-x-3 to-pink-500 text-white font-medium">
            Search
          </button>
    </div>
  );
};

export default SearchBar;