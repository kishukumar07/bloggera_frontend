import React, { useEffect, useState } from "react";

import { fetchAllUsers, updateURole, deleteUser } from "../../utils/admin/users.js";

// import ConfirmationalCompoDynamic from "./ConfirmationalCompoDynamic.jsx";
import {ConfirmationModal} from "../comman/ConfirmationModal.jsx"; 


function Users() {
  const [users, SetUsers] = useState([]);
  const [UId, SetUId] = useState("");
  const [action, setAction] = useState(""); //for restful actions  roleChange or "" or delete
  const [showConfirm, setShowConfirm] = useState(false); //for confirmational component
  const [uRole, setUrole] = useState("");

  //css
  const btnPrimary = "px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm";
const btnDanger = "px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-sm";
const btnSuccess = "px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-sm";
// const btnSecondary = "px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded text-sm";


//read comments for blog.jsx 
 let message = "";
  if (action === "delete") {
    message = "Are you sure you want to delete this user?";
  } else if (action === "roleChange") {
    message = `Are you sure you want to change role to ${uRole}?`;
  }

  const HandelOperations = async ({ UId, action, uRole }) => {
    if (action === "delete") {
      try{
        const resMessage = await deleteUser(UId);
        alert(`${resMessage}`);
      }catch(err){
         console.log("failed to delete User!",err); 
      }
    } else if (action === "roleChange") {
      const newRole = uRole;
       try{
         const resMessage = await updateURole({ newRole, UId });
                            alert(`${resMessage}`);
      }catch(err){
           console.log("failed to update User role!",err); 
      }
    }
    // console.log("33423");
    // console.log(uRole, UId, action);
  };

  let onConfirm =  () => {
            if (action === "delete") {
              HandelOperations({ UId, action, uRole });
            } else if (action === "roleChange") {
              HandelOperations({ UId, action, uRole });
            }
            SetUId("");
            setShowConfirm(false);
          }


  useEffect(() => {
    (async () => {
      try{
        const res = await fetchAllUsers();
        SetUsers(res.users||[]);

      }catch(err){
        console.error("failed to fetch users!",err); 
        SetUsers([]); 
      }
      // console.log(res.totalUsers)
      // console.log(res.users);
      // console.log(UId);
    })();
  }, [showConfirm]);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg overflow-x-auto">
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
                  className={btnSuccess}
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
                  className={btnPrimary}
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
                  className={btnDanger}
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

                 <ConfirmationModal
                 message ={message}
                 onConfirm={onConfirm}
                 onCancel={()=>{
                     SetUId("");
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

export default Users;
