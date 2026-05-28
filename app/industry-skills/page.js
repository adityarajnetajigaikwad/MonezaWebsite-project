export default function IndustrySkillsPage() {

  return (

    <div className="min-h-screen bg-white text-black">

      {/* HERO */}

      <section className="bg-gradient-to-r from-[#0f1f7a] via-[#243caa] to-[#3d5afe] text-white py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">

            Industry Ready Learning

          </p>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">

            Build Real Skills
            <br />

            For Real Careers 🚀

          </h1>

          <p className="mt-8 text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">

            Moneza helps students learn practical and modern industry skills
            through real-world projects, AI-powered learning and job-ready training.

          </p>

        </div>

      </section>

      {/* MAIN CONTENT */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="industry skills"
            className="rounded-[35px] w-full h-[500px] object-cover shadow-2xl"
          />

          {/* CONTENT */}

          <div>

            <h2 className="text-5xl font-extrabold leading-tight">

              Learn Skills That
              <span className="text-blue-600">
                {" "}Companies Need
              </span>

            </h2>

            <p className="mt-8 text-gray-600 text-xl leading-relaxed">

              Traditional learning often focuses only on theory.
              At Moneza, we focus on practical implementation,
              real projects and modern technologies used in actual companies.

            </p>

            <div className="mt-10 space-y-6">

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  🚀 Real-World Projects

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Students build modern applications and portfolio projects
                  similar to real startup and company products.

                </p>

              </div>

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  🤖 AI & Modern Tools

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Learn Artificial Intelligence, automation tools,
                  APIs and next-generation technologies.

                </p>

              </div>

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  🏆 Career-Focused Learning

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Courses are designed to help students become
                  job-ready with practical skills and confidence.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXTRA INFO */}

      <section className="bg-gray-50 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-extrabold text-center">

            Why Industry Skills Matter

          </h2>

          <p className="text-center text-gray-600 mt-6 text-xl max-w-4xl mx-auto">

            Companies today need practical problem solvers,
            developers, AI engineers and creators who can build real solutions.

          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                💼
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Better Jobs

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Industry skills increase employability and
                help students get better career opportunities.

              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                🌍
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Global Opportunities

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Modern technologies create opportunities
                for remote jobs, freelancing and startups worldwide.

              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                📈
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Future Growth

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                AI, software and digital skills will dominate
                future industries and business growth.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}