import React from "react";

import {
  updatingContactStatus,
  deleteContact,
} from "../../utils/admin/contact.js";

export function ConfirmationalCompoDynamic({
  CId,
  SetCId,
  action, // delete or changeStatus
  status, // "pending", "rejected",''
  setShowConfirm,
}) {
  // console.log(BId, SetBId, action, status, setShowConfirm);

  const HandelOperations = async ({ CId, action, status }) => {
    if (action === "delete") {
      // console.log({ CId, status, action });

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

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-2">
      <p className="mb-3">{message}</p>
      <div className="flex gap-3">
        <button
          onClick={() => {
            // operations here
            // console.log(action);
            if (action === "delete") {
              HandelOperations({ CId, action, status });
            } else if (action === "changeStatus") {
              HandelOperations({ CId, action, status });
            }
            SetCId("");
            setShowConfirm(false);
          }}
          className="px-3 py-1 bg-green-600 rounded text-xs"
        >
          Confirm
        </button>

        <button
          onClick={() => {
            SetCId("");
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
