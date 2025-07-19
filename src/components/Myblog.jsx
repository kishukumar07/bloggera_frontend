const Myblog = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-yellow-400">📚 My Blogs</h2>
      <p className="text-gray-300">View and manage the blogs you've published.</p>
      <div className="space-y-4">
        {[1, 2].map((id) => (
          <div
            key={id}
            className="p-4 bg-[#1a1a1a] rounded-lg border border-orange-700 flex justify-between items-center"
          >
            <div>
              <h3 className="text-white font-semibold">My Blog #{id}</h3>
              <p className="text-sm text-gray-400">Posted on 2025-07-18</p>
            </div>
            <div className="flex space-x-3">
              <button className="text-yellow-400 hover:text-yellow-300">✏️ Edit</button>
              <button className="text-red-500 hover:text-red-400">🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myblog;
