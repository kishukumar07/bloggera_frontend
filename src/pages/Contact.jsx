import { useState } from "react";
import { postContactMsg } from "../utils/contact";

function Contact() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const btnPrimary =
    "px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm";

  const handleSubmit = async () => {
    try {
      setLoading(true);
              //  console.log(formData); 
      const res = await postContactMsg(formData);
            console.log(res);
      if (res) {
        alert("Message sent...");
        setformData({
          message: "",
          email: "",
          name: ""
        });
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  const changeHandler = (key, value) => {
    setformData({ ...formData, [key]: value });
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      
      {/* Header */}
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto text-sm">
          We'd love to hear from you! Send us a message.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 p-6 rounded-lg">
        
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();

            if (!formData.name || !formData.email || !formData.message) {
              return alert("All fields required");
            }

            handleSubmit();
          }}
        >
          
          <div className="grid md:grid-cols-2 gap-4">
            
            <input
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm"
              value={formData.name}
              onChange={(e) => changeHandler("name", e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm"
              value={formData.email}
              onChange={(e) => changeHandler("email", e.target.value)}
            />
          </div>

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full px-3 py-2 bg-black border border-gray-700 rounded text-sm"
            value={formData.message}
            onChange={(e) => changeHandler("message", e.target.value)}
          />

          <button
            type="submit"
            className={btnPrimary}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </section>

      {/* Info */}
      <section className="text-center mt-12 text-xs text-gray-500">
        <p>Email: kishukumars082@gmail.com</p>
        <p>Phone: +91 62077 60272</p>
        <p>Ranchi, Jharkhand</p>
      </section>

    </main>
  );
}

export default Contact;