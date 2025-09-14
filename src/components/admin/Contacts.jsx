import React, { act, useEffect, useState } from "react";
import { getAllContacts } from "../../utils/admin/contact.js";
import { ConfirmationalCompoDynamic } from "./ConfirmationalCompoDynamic3.jsx";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [CId, setCId] = useState("");
  const [status, setStatus] = useState(""); //"pending", "resolved"  or ''
  const [action, setAction] = useState(""); // delete or changeStatus or ''
  const [showConfirm, setShowConfirm] = useState("false");

  useEffect(() => {
    (async () => {
      const data = await getAllContacts();
      //  console.log(data);
      setContacts(data.messages);
    })();
  }, [CId]);

  // const handleSubmission = ({ action, CId, status }) => {
  //   if (action === "delete") {
  //   } else if (action === "changeStatus") {
  //   }
  // };

  // const contacts = [
  //   {
  //     id: 1,
  //     name: "Alice",
  //     email: "alice@mail.com",
  //     message: "Need help!",
  //     status: "New",
  //   },
  //   {
  //     id: 2,
  //     name: "Bob",
  //     email: "bob@mail.com",
  //     message: "Bug report",
  //     status: "In Progress",
  //   },
  // ];

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
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
                    setShowConfirm("true");
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
                    setShowConfirm("true");
                  }}
                >
                  Delete
                </button>
              </td>
              {/* 👇 confirmation only for this user */}
              {showConfirm && CId === c._id && (
                <th colSpan="4">
                  <ConfirmationalCompoDynamic
                    CId={CId}
                    SetCId={setCId}
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

export default Contacts;
