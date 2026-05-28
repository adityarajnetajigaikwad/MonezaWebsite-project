import Link from "next/link";

export default function AboutPage() {

  return (

    <div className="min-h-screen bg-[#0f172a] text-white">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">

            About Us

          </p>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">

            Empowering Students
            With Modern Learning 🚀

          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed">

            We provide industry-ready courses in
            Programming, AI, Web Development and
            Career Skills to help students build
            successful careers.

          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <Link href="/courses">

              <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-2xl font-bold text-lg">

                Explore Courses

              </button>

            </Link>

            <Link href="/contact">

              <button className="border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition">

                Contact Us

              </button>

            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="students"
            className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
          />

        </div>

      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/10">

            <div className="text-5xl">
              📚
            </div>

            <h2 className="text-3xl font-bold mt-6">

              Practical Learning

            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">

              Learn with real-world projects and
              hands-on practical experience.

            </p>

          </div>

          {/* CARD 2 */}

          <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/10">

            <div className="text-5xl">
              🤖
            </div>

            <h2 className="text-3xl font-bold mt-6">

              AI Powered

            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">

              Modern AI learning methods and smart
              educational technologies.

            </p>

          </div>

          {/* CARD 3 */}

          <div className="bg-[#1e293b] p-8 rounded-3xl border border-white/10">

            <div className="text-5xl">
              🏆
            </div>

            <h2 className="text-3xl font-bold mt-6">

              Career Growth

            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed">

              Build skills, certificates and job-ready
              portfolio projects.

            </p>

          </div>

        </div>

      </section>

    </div>

  );
}