import { useState } from "react";

export default function SheCanFoundationWebsite() {
  const [showDonateForm, setShowDonateForm] = useState(false);
const [showVolunteerForm, setShowVolunteerForm] = useState(false);

  return (
    <div className="bg-[#f7f1eb] text-gray-900 font-sans overflow-x-hidden scroll-smooth">
      
      {/* Hide Scrollbar */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Popup Form */}
      {/* Donate Form */}
{showDonateForm && (
  <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center px-4">
    <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">

      <button
        onClick={() => setShowDonateForm(false)}
        className="absolute top-4 right-5 text-2xl font-bold"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
        Donate Now
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <input
          type="number"
          placeholder="Donation Amount"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold"
        >
          Donate
        </button>
      </form>
    </div>
  </div>
)}

{/* Volunteer Form */}
{showVolunteerForm && (
  <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center px-4">
    <div className="bg-white rounded-3xl p-8 w-full max-w-md relative shadow-2xl">

      <button
        onClick={() => setShowVolunteerForm(false)}
        className="absolute top-4 right-5 text-2xl font-bold"
      >
        ×
      </button>

      <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">
        Volunteer Registration
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Skills / Interests"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        />

        <textarea
          rows="4"
          placeholder="Why do you want to volunteer?"
          className="w-full border border-gray-300 rounded-xl px-4 py-3"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold"
        >
          Register
        </button>
      </form>
    </div>
  </div>
)}

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
  <img
    src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=296,fit=crop,q=95/Aq2NJ23MzBH2rx2j/she-YlenJon1O7ieeEoa.jpg"
    alt="She Can Foundation Logo"
    className="w-12 h-12 rounded-full object-cover border-2 border-pink-400"
  />

  <h1 className="text-2xl font-bold tracking-wide">
    She Can Foundation
  </h1>
</div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#home" className="hover:text-pink-300 transition">
            Home
          </a>

          <a href="#about" className="hover:text-pink-300 transition">
            About
          </a>

          <a href="#mission" className="hover:text-pink-300 transition">
            Mission
          </a>

          <a href="#join" className="hover:text-pink-300 transition">
            Join Us
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center"
      >
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop"
          alt="Women Empowerment"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-4xl px-6">
          <p className="uppercase tracking-[6px] text-pink-200 mb-4">
            Together We Can Change
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Empowering Women
            <br />
            Creating Equality
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-200 leading-relaxed">
            She Can Foundation is dedicated to empowering women,
            promoting gender equality, and creating opportunities
            through education, digital initiatives, and community action.
          </p>

          <button
            onClick={() => setShowDonateForm(true)}
            className="mt-10 bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-full text-lg font-semibold shadow-2xl"
          >
            Donate
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-8 md:px-20 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.HwZNZiZJTdR0p9gDeUMaPgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Women Support"
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div>
          <p className="uppercase tracking-[5px] text-pink-500 mb-3">
            Global Vision, Local Action
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Creating Opportunities
            <br />
            For Women & Youth
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-700">
            We are She Can Foundation, a non-governmental organization registered under the Indian Society Act, 1860, dedicated to empowering women and creating a more equitable society. We provide support, resources, and training to women in communities across the globe, working closely with local organizations, governments, and communities to ensure that our programs are effective and sustainable. Through advocacy campaigns and initiatives, we raise awareness of women's issues. We rely on the support of individuals, corporations, and other organizations to achieve our vision. We believe that by working together, we can revolutionize society and create a better world for all.
          </p>

          <button className="mt-8 border-2 border-black px-7 py-3 rounded-full hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        className="bg-[#111111] text-white py-24 px-8 md:px-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <p className="uppercase tracking-[5px] text-pink-400 mb-4">
            Our Mission
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Breaking Barriers
            <br />
            Building Futures
          </h2>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            We believe every woman deserves equal opportunities,
            access to education, leadership support, and a platform
            to thrive. Through collective action and community support,
            we work toward building a more equitable society.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-5">
              Women Empowerment
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Encouraging confidence, leadership,
              independence, and equal opportunities for women.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-5">
              Gender Equality
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Promoting fairness, inclusion,
              and equal rights within communities and education.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 hover:-translate-y-2 transition">
            <h3 className="text-2xl font-semibold mb-5">
              Education & Skills
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Providing access to digital learning,
              awareness initiatives, and practical skill development.
            </p>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section
        id="join"
        className="relative py-28 text-center text-white"
      >
        <img
          src="https://factly.in/wp-content/uploads/2024/03/Women-Empowerment.jpg?q=80&w=1600&auto=format&fit=crop"
          alt="Community"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="uppercase tracking-[5px] text-pink-300 mb-4">
            Join Our Team
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Be The Change
            <br />
            You Want To See
          </h2>

          <p className="mt-8 text-lg text-gray-200 leading-relaxed">
            Become part of a movement dedicated to empowering women
            and supporting communities.
          </p>

          <button
            onClick={() => setShowVolunteerForm(true)}
            className="mt-10 bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-full text-lg font-semibold"
          >
            Volunteer Now
          </button>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-8 md:px-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6 text-pink-600">
          Founder & President
        </h2>

        <h3 className="text-3xl font-semibold">
          REETA MISHRA
        </h3>

        <div className="mt-10 space-y-3 text-lg">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            president@shecanfoundation.org
          </p>

          <p>
            <span className="font-semibold">Contact:</span>{" "}
            +91-8283841830
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-10 text-center">
        <h3 className="text-2xl text-white font-bold">
          She Can Foundation
        </h3>

        <p className="mt-4">
          Empowering Women • Promoting Equality • Building Futures
        </p>

        <p className="mt-6 text-sm">
          © 2026 She Can Foundation. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}