import React from "react";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "React Hooks Guide",
      status: "Pending",
      author: "John Doe",
    },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
    { id: 2, title: "Node.js Tips", status: "Approved", author: "Jane Smith" },
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Blogs Management</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="pb-2">Title</th>
            <th className="pb-2">Author</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id} className="border-b border-gray-700">
              <td className="py-2">{blog.title}</td>
              <td className="py-2">{blog.author}</td>
              <td className="py-2">{blog.status}</td>
              <td className="py-2 space-x-2">
                <button className="px-2 py-1 bg-green-600 rounded text-xs">
                  Approve
                </button>
                <button className="px-2 py-1 bg-yellow-600 rounded text-xs">
                  Reject
                </button>
                <button className="px-2 py-1 bg-red-600 rounded text-xs">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Blogs;
