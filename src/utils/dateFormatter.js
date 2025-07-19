function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock

  const formattedTime = `${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${ampm}`;
  return `${day} ${month} ${year}, ${formattedTime}`;
}

export default formatDate;
// console.log(formatDate("2025-07-19T15:03:50.647Z"));
// // Output: "19 July 2025, 3:03 PM"
