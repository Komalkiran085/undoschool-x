const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full flex justify-center bg-white shadow-sm">
      <div className="w-11/12 flex items-center justify-between py-4">
        
        {/* Left */}
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold">Logo</h1>
          <span className="text-purple-600 border-b-2 border-purple-600 pb-1 cursor-pointer">
            Course
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <button className="text-gray-700 font-medium">
            Login
          </button>

          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium">
            Register for free
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;

