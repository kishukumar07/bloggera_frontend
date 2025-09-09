import React, { useEffect, useState } from "react";

import {
  fetchAllUsers,
  // updateURole,
  // deleteUser,
} from "../../utils/admin/users.js";

import ConfirmationalCompoDynamic from "./ConfirmationalCompoDynamic.jsx";

function Users() {
  const [users, SetUsers] = useState([]);
  const [UId, SetUId] = useState("");

  const [action, setAction] = useState(""); //for restful actions  roleChange or "" or delete
  const [showConfirm, setShowConfirm] = useState(false); //for confirmational component
  const [uRole, setUrole] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetchAllUsers();
      // console.log(res.totalUsers)
      // console.log(res.users);
      SetUsers(res.users);
      // console.log(UId);
    })();
  }, [showConfirm]);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Users Management</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-700">
            <th className="pb-2">Name</th>
            <th className="pb-2">Email</th>
            <th className="pb-2">Role</th>
            <th className="pb-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border-b border-gray-700">
              <td className="py-2">{user.name}</td>
              <td className="py-2">{user.email}</td>
              <td className="py-2">{user.role}</td>
              <td className="py-2 space-x-2">
                <button
                  className="px-2 py-1 bg-green-600 rounded text-xs"
                  onClick={() => {
                    // console.log(`make admin ${user._id},${showConfirm}`);
                    SetUId(user._id);
                    setAction("roleChange");
                    setUrole("admin");
                    setShowConfirm(true);
                  }}
                >
                  Promote
                </button>
                <button
                  className="px-2 py-1 bg-yellow-600 rounded text-xs"
                  onClick={(e) => {
                    // console.log(`remove as admin ${user._id}`);
                    SetUId(user._id);
                    setAction("roleChange");
                    setUrole("user");
                    setShowConfirm(true);
                  }}
                >
                  Demote
                </button>
                <button
                  className="px-2 py-1 bg-red-600 rounded text-xs"
                  onClick={(e) => {
                    // console.log(`delete ${user._id}`);
                    SetUId(user._id);
                    setAction("delete");
                    setUrole("");
                    setShowConfirm(true);
                  }}
                >
                  Delete
                </button>
              </td>
              {/* {console.log(showConfirm)} */}
              {/* 👇 confirmation only for this user */}
              {showConfirm && UId === user._id && (
                <th colSpan="4">
                  <ConfirmationalCompoDynamic
                    UId={UId}
                    SetUId={SetUId}
                    action={action}
                    uRole={uRole}
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

export default Users;
