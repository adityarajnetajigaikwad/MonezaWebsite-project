export default function CareerGrowthPage() {

  return (

    <div className="min-h-screen bg-white text-black">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">

            Career Growth

          </p>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">

            Build Your Future
            <br />

            With Real Skills 🏆

          </h1>

          <p className="mt-8 text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">

            Career growth starts with practical knowledge,
            confidence and modern industry-ready skills.
            Moneza helps students prepare for real opportunities.

          </p>

        </div>

      </section>

      {/* MAIN SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Career Growth"
            className="rounded-[35px] w-full h-[500px] object-cover shadow-2xl"
          />

          {/* CONTENT */}

          <div>

            <h2 className="text-5xl font-extrabold leading-tight">

              Create A
              <span className="text-blue-600">
                {" "}Successful Career
              </span>

            </h2>

            <p className="mt-8 text-gray-600 text-xl leading-relaxed">

              Modern careers require practical skills,
              problem solving and continuous learning.
              Students who adapt to new technologies gain
              better opportunities and long-term growth.

            </p>

            <div className="mt-10 space-y-6">

              {/* CARD 1 */}

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  💼 Job Ready Skills

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Learn development, AI and digital skills
                  required in modern companies and startups.

                </p>

              </div>

              {/* CARD 2 */}

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  🚀 Portfolio Projects

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Build real projects that improve your resume,
                  portfolio and interview confidence.

                </p>

              </div>

              {/* CARD 3 */}

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  🌍 Global Opportunities

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Modern technology creates opportunities
                  for remote work, freelancing and international careers.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY CAREER GROWTH IMPORTANT */}

      <section className="bg-gray-50 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-extrabold text-center">

            Why Career Growth Matters

          </h2>

          <p className="text-center text-gray-600 mt-6 text-xl max-w-4xl mx-auto">

            Continuous learning and skill development
            help students stay competitive in the modern world.

          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* CARD 1 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                📈
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Better Salary

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Skilled professionals often receive
                better salaries and career opportunities.

              </p>

            </div>

            {/* CARD 2 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                🧠
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Strong Knowledge

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Continuous learning improves confidence,
                technical understanding and decision making.

              </p>

            </div>

            {/* CARD 3 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                🌟
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Long-Term Success

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                Career growth helps students build
                a stable and successful future over time.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}