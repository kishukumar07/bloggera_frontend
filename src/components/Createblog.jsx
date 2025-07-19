const CreateBlog = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-yellow-400">✍️ Create a New Blog</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-orange-600 text-white placeholder-gray-400"
        />
        <textarea
          rows="6"
          placeholder="Write your blog content here..."
          className="w-full p-3 rounded-lg bg-[#1a1a1a] border border-orange-600 text-white placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-bold rounded-lg hover:scale-105 transition"
        >
          🚀 Publish Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
