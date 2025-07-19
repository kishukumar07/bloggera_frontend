const LatestBlog = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-yellow-400">📰 Latest Blogs</h2>
      <p className="text-gray-300">
        Discover the most recent posts from our amazing authors.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {[1, 2].map((id) => (
          <div
            key={id}
            className="p-4 bg-[#1a1a1a] rounded-xl border border-orange-600 hover:shadow-orange-400 shadow transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-2">
              Blog Title #{id}
            </h3>
            <p className="text-sm text-gray-400">
              This is a sample blog description. You can replace it with real
              data from your backend.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
