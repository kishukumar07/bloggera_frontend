export function ConfirmationModal({
  message,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center"> 
  {
  //this ccs -> floating modal 
  }
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <p className="mb-3">{message}</p>

      <div className="flex gap-3">
        <button
          onClick={onConfirm}
          className="px-3 py-1 bg-green-600 rounded text-xs"
        >
          Confirm
        </button>

        <button
          onClick={onCancel}
          className="px-3 py-1 bg-gray-600 rounded text-xs"
        >
          Cancel
        </button>
      </div>
          </div>
    </div>
  );
}

export default ConfirmationModal;



 
