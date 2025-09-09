import React from "react";

function Contacts() {
  const contacts = [
    {
      id: 1,
      name: "Alice",
      email: "alice@mail.com",
      message: "Need help!",
      status: "New",
    },
    {
      id: 2,
      name: "Bob",
      email: "bob@mail.com",
      message: "Bug report",
      status: "In Progress",
    },
  ];

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
            <tr key={c.id} className="border-b border-gray-700">
              <td className="py-2">{c.name}</td>
              <td className="py-2">{c.email}</td>
              <td className="py-2">{c.message}</td>
              <td className="py-2">{c.status}</td>
              <td className="py-2 space-x-2">
                <button className="px-2 py-1 bg-blue-600 rounded text-xs">
                  Resolve
                </button>
                <button className="px-2 py-1 bg-red-600 rounded text-xs">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
