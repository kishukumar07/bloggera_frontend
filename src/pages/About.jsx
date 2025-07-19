import React from "react";

function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16 font-sans">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Bloggera
          </span>
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Your voice matters. Bloggera is the platform where writers, thinkers,
          and creators share their stories and ideas with the world.
        </p>
      </section>

      {/* Two Column Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-5">
          <h2 className="text-2xl font-semibold text-orange-400">Our Mission</h2>
          <p className="text-gray-400">
            Bloggera empowers people to write freely, express creatively, and
            connect meaningfully. We believe everyone has a story worth telling
            and a voice that deserves to be heard.
          </p>

          <h2 className="text-2xl font-semibold text-orange-400">Why Bloggera?</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Clean and distraction-free writing interface</li>
            <li>Engage with a like-minded reader community</li>
            <li>Write, edit, and manage your posts with ease</li>
            <li>Share your ideas with the world in one click</li>
          </ul>
        </div>

        {/* Image with glow */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-52 h-52 bg-orange-500 blur-3xl opacity-30 animate-pulse rounded-full" />
          <img
            src="/blog.png"
            alt="About Bloggera"
            className="w-full rounded-xl shadow-lg relative z-10"
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to start your blogging journey?
        </h3>
        <a
          href="/auth"
          className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
        >
          Get Started
        </a>
      </section>
    </main>
  );
}

export default About;
