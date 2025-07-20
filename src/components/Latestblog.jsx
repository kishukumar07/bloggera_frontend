import { useBlog } from "../Context/BlogContext";
import formatDate from "../utils/dateFormatter";
import { Link } from "react-router-dom";

const LatestBlog = () => {
  const { blogs } = useBlog();

  // console.log(blogs);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-yellow-400">📰 Latest Blogs</h2>
      <p className="text-gray-300">
        Discover the most recent posts from our amazing authors.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <article
            key={blog._id}
            className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_#ff6a3d40]"
          >
            {/* <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-t-3xl"
            /> */}
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-bold text-orange-400">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-300">{blog.category}</p>
              <div className="text-xs text-gray-500 flex justify-between items-center">
                <span>By {blog.author}</span>
                <span>{formatDate(blog.createdAt)}</span>
              </div>
              <Link
                to={`/OneBlog/${blog._id}`}
                className="inline-block text-orange-400 font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
