import React from 'react'

function Contact() {
  return (
   
    <main className="min-h-screen bg-gray-50 text-gray-800 px-6 py-16 font-sans">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We'd love to hear from you! Whether it's feedback, a question, or just saying hi — feel free to reach out.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md relative">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>

        <form className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Info Section */}
      <section className="text-center mt-16 text-sm text-gray-500">
        <p>Email: support@bloggera.in</p>
        <p>Phone: +91 98765 43210</p>
        <p>Address: Ranchi, Jharkhand, India</p>
      </section>
    </main>
  );
  
}

export default Contact