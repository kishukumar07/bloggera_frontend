import React from "react";

import { updateBState, deleteBlog } from "../../utils/admin/blogs.js";

export function ConfirmationalCompoDynamic({
  BId,
  SetBId,
  action, // delete or changeStatus
  status, // "pending", "rejected", "fullfilled"
  setShowConfirm,
}) {
  // console.log(BId, SetBId, action, status, setShowConfirm);

  const HandelOperations = async ({ UId, action, status }) => {
    if (action === "delete") {
      // console.log({ BId, status, action });
      
      const resMessage = await deleteBlog(BId);
      alert(`${resMessage}`);
    } else if (action === "changeStatus") {
      // console.log({ BId, status, action });
      const resMessage = await updateBState({ status, BId });
      alert(`${resMessage}`);
    }
  };

  let message = "";
  if (action === "delete") {
    message = "Are you sure you want to delete this Blog?";
  } else if (action === "changeStatus") {
    message = `Are you sure to make this Blog ${status}? `;
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
              HandelOperations({ BId, action, status });
            } else if (action === "changeStatus") {
              HandelOperations({ BId, action, status });
            }
            SetBId("");
            setShowConfirm(false);
          }}
          className="px-3 py-1 bg-green-600 rounded text-xs"
        >
          Confirm
        </button>

        <button
          onClick={() => {
            SetBId("");
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
