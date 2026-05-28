import Link from "next/link";

export default function HomePage() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-8 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="text-green-400 uppercase tracking-[5px] font-semibold">

            Online Tech Academy

          </p>

          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mt-5">

            Learn Future
            <br />

            <span className="text-green-400">

              Skills Online

            </span>

          </h1>

          <p className="text-gray-400 text-xl mt-8 leading-relaxed">

            Start learning Web Development,
            AI, Python and modern technology
            with practical projects.

          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <Link href="/courses">

              <button className="bg-green-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">

                Start Learning

              </button>

            </Link>

            <button className="border border-gray-600 px-8 py-4 rounded-full hover:bg-white/10 transition">

              Explore More

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="hero"
            className="rounded-[40px] shadow-2xl w-full h-[500px] object-cover"
          />

        </div>

      </section>

      {/* COURSES */}

      <section className="bg-zinc-950 py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center">

            Featured Programs

          </h2>

          <p className="text-center text-gray-400 mt-5 text-lg">

            Upgrade your skills with premium courses

          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            {/* CARD 1 */}

            <div className="bg-zinc-900 rounded-[30px] overflow-hidden border border-white/10 hover:-translate-y-2 transition">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="course"
                className="h-[250px] w-full object-cover"
              />

              <div className="p-8">

                <p className="text-green-400 font-bold uppercase">

                  Coding

                </p>

                <h3 className="text-3xl font-bold mt-4">

                  Frontend Development

                </h3>

                <p className="text-gray-400 mt-5">

                  Learn React.js, Next.js,
                  Tailwind CSS and modern UI.

                </p>

                <div className="flex justify-between mt-6 text-gray-500">

                  <span>
                    👨‍🎓 10,000+
                  </span>

                  <span>
                    ⏳ 5 Months
                  </span>

                </div>

                <h2 className="text-4xl font-bold text-green-400 mt-8">

                  ₹2,999

                </h2>

                <Link href="/courses/1">

                  <button className="w-full mt-8 bg-green-400 text-black py-4 rounded-2xl font-bold">

                    View Course

                  </button>

                </Link>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="bg-zinc-900 rounded-[30px] overflow-hidden border border-white/10 hover:-translate-y-2 transition">

              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935"
                alt="course"
                className="h-[250px] w-full object-cover"
              />

              <div className="p-8">

                <p className="text-green-400 font-bold uppercase">

                  Python

                </p>

                <h3 className="text-3xl font-bold mt-4">

                  Python Mastery

                </h3>

                <p className="text-gray-400 mt-5">

                  Learn Python programming
                  with real-world projects.

                </p>

                <div className="flex justify-between mt-6 text-gray-500">

                  <span>
                    👨‍🎓 8,500+
                  </span>

                  <span>
                    ⏳ 4 Months
                  </span>

                </div>

                <h2 className="text-4xl font-bold text-green-400 mt-8">

                  ₹3,499

                </h2>

                <Link href="/courses/2">

                  <button className="w-full mt-8 bg-green-400 text-black py-4 rounded-2xl font-bold">

                    View Course

                  </button>

                </Link>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="bg-zinc-900 rounded-[30px] overflow-hidden border border-white/10 hover:-translate-y-2 transition">

              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="course"
                className="h-[250px] w-full object-cover"
              />

              <div className="p-8">

                <p className="text-green-400 font-bold uppercase">

                  AI & ML

                </p>

                <h3 className="text-3xl font-bold mt-4">

                  AI Engineering

                </h3>

                <p className="text-gray-400 mt-5">

                  Learn Artificial Intelligence,
                  Machine Learning and AI tools.

                </p>

                <div className="flex justify-between mt-6 text-gray-500">

                  <span>
                    👨‍🎓 14,000+
                  </span>

                  <span>
                    ⏳ 7 Months
                  </span>

                </div>

                <h2 className="text-4xl font-bold text-green-400 mt-8">

                  ₹5,999

                </h2>

                <Link href="/courses/3">

                  <button className="w-full mt-8 bg-green-400 text-black py-4 rounded-2xl font-bold">

                    View Course

                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className="max-w-7xl mx-auto px-8 py-24">

        <h2 className="text-5xl font-bold text-center">

          Why Students Choose Us

        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center">

            <div className="text-6xl">

              🚀

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Live Projects

            </h3>

            <p className="text-gray-400 mt-4">

              Work on real-world projects
              and improve your portfolio.

            </p>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center">

            <div className="text-6xl">

              🤖

            </div>

            <h3 className="text-2xl font-bold mt-6">

              AI Based Learning

            </h3>

            <p className="text-gray-400 mt-4">

              Learn modern technologies
              with AI support.

            </p>

          </div>

          <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center">

            <div className="text-6xl">

              🏆

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Placement Support

            </h3>

            <p className="text-gray-400 mt-4">

              Build job-ready skills
              and grow your career.

            </p>

          </div>

        </div>

      </section>

    </div>

  );
}