//this conditional component for Restful usersManagement only ...

import React from "react";
import { updateURole, deleteUser } from "../../utils/admin/users.js";

function ConfirmationalCompoDynamic({
  UId,
  action,
  uRole,
  setShowConfirm,
  SetUId,
}) {
  const HandelOperations = async ({ UId, action, uRole }) => {
    if (action === "delete") {
      const resMessage = await deleteUser(UId);
      alert(`${resMessage}`);
    } else if (action === "roleChange") {
      const newRole = uRole;
      const resMessage = await updateURole({ newRole, UId });
      alert(`${resMessage}`);
    }

    // console.log("33423");
    // console.log(uRole, UId, action);
  };

  let message = "";
  if (action === "delete") {
    message = "Are you sure you want to delete this user?";
  } else if (action === "roleChange") {
    message = `Are you sure you want to change role to ${uRole}?`;
  }

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-2">
      <p className="mb-3">{message}</p>
      <div className="flex gap-3">
        <button
          onClick={() => {
            // operations here
            // console.log(action);
            if (action === "delete") {
              HandelOperations({ UId, action, uRole });
            } else if (action === "roleChange") {
              HandelOperations({ UId, action, uRole });
            }
            SetUId("");
            setShowConfirm(false);
          }}
          className="px-3 py-1 bg-green-600 rounded text-xs"
        >
          Confirm
        </button>

        <button
          onClick={() => {
            SetUId("");
            setShowConfirm(false);
          }}
          className="px-3 py-1 bg-gray-600 rounded text-xs"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmationalCompoDynamic;
