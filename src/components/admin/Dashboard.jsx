import React, { useState, useEffect } from "react";
import { fetchAll } from "../../utils/admin/dashboard.js";

function Dashboard() {
  let [data, setdasData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const x = await fetchAll();
      // console.log(x);
      setdasData(x);
    }
    fetchData();
  }, []);

  const cards = [
    { title: "Total Users", value: data?.totalUsers },
    { title: "Normal Users", value: data.normalUsers },
    { title: "Admins", value: data.totalAdmin },
    { title: "Total Blogs", value: data.totalBlogs },
    { title: "Approved Blogs", value: data.totalApprovedBlogs },
    { title: "Pending Blogs", value: data.totalPendingBlogs },
    { title: "Rejected Blogs", value: data.totalRejectedBlogs },
    { title: "Total Contacts", value: data.totalContacts },
    { title: "Pending Contacts", value: data.totalPendingContacts },
    { title: "Resolved Contacts", value: data.totalResolvedContacts },
    { title: "New Contacts", value: data.totalnewContacts },
  ];

  return (
    <div className="p-6 min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-8 text-center text-orange-400">
        📊  Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#111] to-[#1a1a1a] border border-orange-500/20 hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-300">{card.title}</h2>
            <p className="text-2xl font-bold text-green-400 mt-2">{card.value ?? 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
