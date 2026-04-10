import { useState, useEffect } from "react";
import {
  fetchBlog,
  updateBState,
  deleteBlog,
} from "../../utils/admin/blogs.js";
import { ConfirmationModal } from "../comman/ConfirmationModal.jsx";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [BId, setBId] = useState("");
  const [action, setAction] = useState(""); //for restful actions  delete or changeStatus
  const [status, setStatus] = useState(""); //for  "pending", "rejected", "fullfilled"
  const [showConfirm, setShowConfirm] = useState(false); //for confirmational component

  useEffect(() => {
    (async () => {
      try{
        const res = await fetchBlog();
        setBlogs(res.blogs||[]);
      }catch(err){
        console.error("failed to fetch blogs",err); 
        setBlogs([]);
      }
    })();
  }, [BId]);

  //this can be imported from somewhere ...
  const HandelOperations = async ({ BId, action, status }) => {
    if (action === "delete") {
      // console.log({ BId, status, action });
      try{
        const resMessage = await deleteBlog(BId);
        alert(`${resMessage}`);
      }catch(err){
             console.error("failed to delete blog",err); 
      }
    } else if (action === "changeStatus") {
      // console.log({ BId, status, action });
       try{
        const resMessage = await updateBState({ status, BId });
        alert(`${resMessage}`);
      }catch(err){
             console.error("failed to delete blog",err); 
      }
    }
  };

  //this can be imported from somewhere if required
  let message = "";
  if (action === "delete") {
    message = "Are you sure you want to delete this Blog?";
  } else if (action === "changeStatus") {
    message = `Are you sure to make this Blog ${status}? `;
  }

  let onConfirm = () => {
    //i use this via seprate storing
    if (action === "delete") {
      HandelOperations({ BId, action, status });
    } else if (action === "changeStatus") {
      HandelOperations({ BId, action, status });
    }
    setBId("");
    setShowConfirm(false);
  };




//utility css 
const btnPrimary = "px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm";
const btnDanger = "px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-sm";
const btnSuccess = "px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-sm";
// const btnSecondary = "px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm";






  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg overflow-x-auto">
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
          {blogs?.map((blog) => (
            <tr key={blog._id} className="border-b border-gray-700">
              <td className="py-2 w-48 whitespace-normal break-words">
                {blog.title}
              </td>
              <td className="py-2">{blog.author}</td>
              <td className="py-2">{blog.status}</td>
              <td className="py-2 space-x-2">
                <button
                  className={btnSuccess}
                  onClick={() => {
                    setBId(blog._id);
                    setAction("changeStatus");
                    setStatus("fullfilled");
                    setShowConfirm(true);
                  }}
                >
                  Approve
                </button>
                <button
                  className={btnDanger}
                  onClick={() => {
                    setBId(blog._id);
                    setAction("changeStatus");
                    setStatus("rejected");
                    setShowConfirm(true);
                  }}
                >
                  Reject
                </button>
                <button
                  className={btnPrimary}
                  onClick={() => {
                    setBId(blog._id);
                    setAction("delete");
                    setStatus("");
                    setShowConfirm(true);
                  }}
                >
                  Delete
                </button>
              </td>

              {showConfirm && BId === blog._id && (
                <td colSpan="4">
                  <ConfirmationModal
                    message={message}
                    onConfirm={onConfirm}
                    onCancel={() => {
                      setBId("");
                      setShowConfirm(false);
                    }}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Blogs;
