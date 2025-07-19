import React from 'react';

function Contact() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 font-sans">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          We'd love to hear from you! Whether it's feedback, a question, or just saying hi — feel free to reach out.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-xl shadow-[0_0_40px_#ff6a3d40] relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-1 bg-black border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 mt-1 bg-black border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 mt-1 bg-black border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition shadow-md hover:shadow-[0_0_20px_#ff6a3d] duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Info Section */}
      <section className="text-center mt-16 text-sm text-gray-500">
        <p>Email: support@bloggera.in</p>
        <p>Phone: +91 62077 60272</p>
        <p>Address: Ranchi, Jharkhand, India</p>
      </section>
    </main>
  );
}

export default Contact;
