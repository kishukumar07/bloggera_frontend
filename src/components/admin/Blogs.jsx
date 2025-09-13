import React from "react";
import { useState, useEffect } from "react";
import {
  fetchBlog,
  updateBState,
  deleteBlog,
} from "../../utils/admin/blogs.js";
import { AlertTriangle } from "lucide-react";
import { ConfirmationalCompoDynamic } from "./ConfirmationalCompoDynamic.1";
// import { deleteUser } from "../../utils/admin/users";

function Blogs() {
  const [blogs, setblogs] = useState([]);
  const [BId, setBId] = useState("");
  const [action, setAction] = useState(""); //for restful actions  delete or changeStatus
  const [status, setstatus] = useState(""); //for  "pending", "rejected", "fullfilled"
  const [showConfirm, setShowConfirm] = useState(false); //for confirmational component

  useEffect(() => {
    (async () => {
      const res = await fetchBlog();
      setblogs(res.blogs);
    })();
  }, [BId]);

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
            <tr key={blog._id} className="border-b border-gray-700">
              <td className="py-2">{blog.title}</td>
              <td className="py-2">{blog.author}</td>
              <td className="py-2">{blog.status}</td>
              <td className="py-2 space-x-2">
                <button
                  className="px-2 py-1 bg-green-600 rounded text-xs"
                  onClick={() => {
                    setBId(blog._id);
                    setAction("changeStatus");
                    setstatus("fullfilled");
                    setShowConfirm("true");
                  }}
                >
                  Approve
                </button>
                <button
                  className="px-2 py-1 bg-yellow-600 rounded text-xs"
                  onClick={() => {
                    setBId(blog._id);
                    setAction("changeStatus");
                    setstatus("rejected");
                    setShowConfirm("true");
                    // console.log(action, status);
                  }}
                >
                  Reject
                </button>
                <button
                  className="px-2 py-1 bg-red-600 rounded text-xs"
                  onClick={() => {
                    setBId(blog._id);
                    setAction("delete");
                    setstatus("");
                    setShowConfirm("true");
                    // console.log(action, status);
                  }}
                >
                  Delete
                </button>
              </td>

              {console.log(action, status)}
              {/* <ConfirmationalCompoDynamic /> */}
              {/* 👇 confirmation only for this user */}
              {showConfirm && BId === blog._id && (
                <th colSpan="4">
                  <ConfirmationalCompoDynamic
                    BId={BId}
                    SetBId={setBId}
                    action={action}
                    status={status}
                    setShowConfirm={setShowConfirm}
                  />
                </th>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Blogs;
