import React, { useEffect, useState } from "react";
import { getAllContacts , updatingContactStatus,
  deleteContact} from "../../utils/admin/contact.js";
import { ConfirmationModal } from "../comman/ConfirmationModal.jsx"; 



function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [CId, setCId] = useState("");
  const [status, setStatus] = useState(""); //"pending", "resolved"  or ''
  const [action, setAction] = useState(""); // delete or changeStatus or ''
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    (async () => {
       try{
         const data = await getAllContacts();
         setContacts(data.messages || []);
       }catch(err){
        console.error("failed to get Contacts",err) ;
        setContacts([]); 
       }


    })();
  }, [CId]);

  
//read comments for blogs.jsx
  const HandelOperations = async ({ CId, action, status }) => {
    if (action === "delete") {

      const resMessage = await deleteContact({ CId });
      alert(`${resMessage}`);
    } else if (action === "changeStatus") {
      console.log({ CId, status, action });
      const resMessage = await updatingContactStatus({ status, CId });
      alert(`${resMessage}`);
    }
  };


  let message = "";
  if (action === "delete") {
    message = "Are you sure you want to delete this Contact?";
  } else if (action === "changeStatus") {
    message = `Are you sure to make this Contact ${status}? `;
  }


  let onConfirm=()=>{
     if (action === "delete") {
              HandelOperations({ CId, action, status });
            } else if (action === "changeStatus") {
              HandelOperations({ CId, action, status });
            }
            setCId("");
            setShowConfirm(false);
  }


  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Contact Messages</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="pb-2">Name</th>
            <th className="pb-2">Email</th>
            <th className="pb-2">Message</th>
            <th className="pb-2">Status</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => (
            <tr key={c._id} className="border-b border-gray-700">
              <td className="py-2">{c.name}</td>
              <td className="py-2">{c.email}</td>
              <td className="py-2 w-48 whitespace-normal break-words">
                {c.message}
              </td>
              <td className="py-2">{c.status}</td>
              <td className="py-2 space-x-2">
                <button
                  className="px-2 py-1 bg-blue-600 rounded text-xs"
                  onClick={() => {
                    setCId(c._id);
                    setAction("changeStatus");
                    setStatus("resolved");
                    setShowConfirm(true);
                  }}
                >
                  Resolve
                </button>
                <button
                  className="px-2 py-1 bg-red-600 rounded text-xs"
                  onClick={() => {
                    setCId(c._id);
                    setAction("delete");
                    setStatus("");
                    setShowConfirm(true);
                  }}
                >
                  Delete
                </button>
              </td>

              {/*  confirmation only for this user */}
              {showConfirm && CId === c._id && (
                <th colSpan="4">
                  
                    <ConfirmationModal
                     message={message}
                     onConfirm={onConfirm}
                     onCancel={()=>{
                         setCId("");
                       setShowConfirm(false);
                     }}

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

export default Contacts;
