export default function AILearningPage() {

  return (

    <div className="min-h-screen bg-white text-black">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-[#071952] via-[#0B2447] to-[#19376D] text-white py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">

            AI Powered Learning

          </p>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">

            Learn Artificial Intelligence
            <br />

            The Smart Way 🤖

          </h1>

          <p className="mt-8 text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">

            Explore the future of technology with Artificial Intelligence,
            Machine Learning and modern AI tools used by industries worldwide.

          </p>

        </div>

      </section>

      {/* MAIN SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="AI Learning"
            className="rounded-[35px] w-full h-[500px] object-cover shadow-2xl"
          />

          {/* CONTENT */}

          <div>

            <h2 className="text-5xl font-extrabold leading-tight">

              The Future Is
              <span className="text-blue-600">
                {" "}AI Driven
              </span>

            </h2>

            <p className="mt-8 text-gray-600 text-xl leading-relaxed">

              Artificial Intelligence is transforming every industry.
              From healthcare and finance to software and automation,
              AI is becoming one of the most important technologies in the world.

            </p>

            <div className="mt-10 space-y-6">

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  🤖 Machine Learning

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Learn how machines analyze data,
                  make predictions and improve automatically.

                </p>

              </div>

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  🧠 Deep Learning

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Understand neural networks, image recognition
                  and advanced AI systems inspired by the human brain.

                </p>

              </div>

              <div className="bg-gray-100 rounded-3xl p-6">

                <h3 className="text-2xl font-bold">

                  ⚡ Generative AI

                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">

                  Explore modern AI tools like ChatGPT,
                  image generation and intelligent automation systems.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY AI IMPORTANT */}

      <section className="bg-gray-50 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-extrabold text-center">

            Why AI Learning Matters

          </h2>

          <p className="text-center text-gray-600 mt-6 text-xl max-w-4xl mx-auto">

            AI skills are becoming essential for future careers,
            innovation and solving real-world problems.

          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {/* CARD 1 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                🚀
              </div>

              <h3 className="text-3xl font-bold mt-6">

                High Demand Careers

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                AI engineers, ML developers and automation experts
                are among the highest-demand professionals globally.

              </p>

            </div>

            {/* CARD 2 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                🌍
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Industry Transformation

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                AI is transforming healthcare, finance,
                education, cybersecurity and many more industries.

              </p>

            </div>

            {/* CARD 3 */}

            <div className="bg-white rounded-3xl p-8 shadow-lg">

              <div className="text-5xl">
                📈
              </div>

              <h3 className="text-3xl font-bold mt-6">

                Future Innovation

              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">

                AI will power future technologies,
                smart systems and next-generation digital experiences.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}