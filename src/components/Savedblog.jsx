const SavedBlog = () => {
  // Simulated saved blogs (you'll replace this with real data or props)
  const savedBlogs = [
    { id: 1, title: "How to Master JavaScript" },
    { id: 2, title: "Top 10 CSS Tricks for Developers" },
  ];

  // Handle unsave action
  const handleUnsave = (id) => {
    // Add your logic here (like API call or state update)
    console.log(`Blog ${id} unsaved`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-400">💾 Saved Blogs</h2>
      <p className="text-gray-300">These are the blogs you’ve bookmarked for later reading.</p>

      <div className="grid md:grid-cols-2 gap-6">
        {savedBlogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 bg-[#1a1a1a] rounded-xl border border-orange-600 shadow hover:shadow-orange-500 transition"
          >
            <h3 className="text-white text-lg font-semibold mb-2">{blog.title}</h3>
            <p className="text-sm text-gray-400 mb-4">You saved this blog for later.</p>

            <button
              onClick={() => handleUnsave(blog.id)}
              className="px-4 py-2 bg-gradient-to-r from-orange-600 to-yellow-400 text-black rounded-lg font-semibold hover:scale-105 transition "
            >
               Unsave
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedBlog;
