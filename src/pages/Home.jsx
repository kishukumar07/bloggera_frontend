import  { useEffect } from "react";

function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      console.log("Token saved:", token);

      // Optional: remove token from URL (clean UX)
      window.history.replaceState({}, document.title, "/");
    } else {
      console.error("Token not found in URL");
    }
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 font-sans">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto text-center mb-3">
        <h1 className="text-4xl md:text-5xl font-serif mb-3">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Bloggera
          </span>
        </h1>
      </section>
      {/* Two Column Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 mt-6">
        <p className="text-lg text-gray-400 font-light">
          Bloggera is the platform where writers, thinkers, and creators share
          their stories and ideas with the world.
        </p>

        <div className="flex justify-end">
          <img
            src="/blog.png"
            alt="About Bloggera"
            className="w-80 rounded-xl shadow-lg"
          />
        </div>
      </section>
      <section className="mt-10 text-center">
        <h3 className="text-2xl  text-gray-400 font-light mb-6">
          Write freely. Share honestly.
        </h3>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/dashboard"
            className="bg-white text-black px-6 py-2 rounded-full text-sm hover:opacity-80 transition"
          >
            Continue as User
          </a>

          <a
            href="/adminlogin"
            className="border border-gray-600 text-gray-300 px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition"
          >
            Admin Login
          </a>
        </div>
      </section>

<section className="mt-10 text-center">
  <h2 className="text-lg font-semibold text-gray-300 mb-0">
    Demo Credentials
  </h2>

  <div className="flex justify-center gap-6 flex-wrap">

    {/* User Login */}
    <div >
      <p className="text-sm text-gray-400 mb-0">User Login</p>
      <p className="text-sm">Email: kishukumars082@gmail.com</p>
      <p className="text-sm">Password: qwerty123</p>
    </div>

    {/* Admin Login */}
    <div >
      <p className="text-sm text-gray-400 mb-0">Admin Login</p>
      <p className="text-sm">Email : niket@gmail.com</p>
      <p className="text-sm">Password: niket053</p>
    </div>

  </div>
</section>
      <footer className="text-center text-sm text-gray-500 mt-0">
        &copy; {new Date().getFullYear()} Bloggera. All rights reserved.
        <section className="text-center font-extralight mt-1 text-xs text-gray-500">
          <p>Email: kishukumars082@gmail.com</p>
          <p>Phone: +91 62077 60272</p>
          <p>Ranchi, Jharkhand</p>
          <p> India</p>
        </section>
      </footer>
    </main>
  );
}

export default Home;
