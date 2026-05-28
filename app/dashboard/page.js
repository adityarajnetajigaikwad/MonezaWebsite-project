<h1 style={{color:"red",fontSize:"50px"}}>
TEST PAGE
</h1>
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-indigo-600 text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-6xl font-bold leading-tight">
            Learn AI, Web Development & Finance
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Master real-world skills with project-based learning and
            industry-ready courses.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold">
              Start Learning
            </button>

            <button className="border border-white px-6 py-3 rounded-lg">
              Explore Courses
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Learning"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">AI Learning</h3>
            <p className="mt-3">
              Learn Machine Learning, Deep Learning and Generative AI.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Industry Projects</h3>
            <p className="mt-3">
              Build real projects and strengthen your portfolio.
            </p>
          </div>

          <div className="bg-white text-black p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold">Career Growth</h3>
            <p className="mt-3">
              Resume building, interview preparation and job assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Popular Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-xl">
              <h3 className="text-2xl font-bold">Artificial Intelligence</h3>
              <p className="mt-3">
                Learn AI from basics to advanced projects.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="text-2xl font-bold">Web Development</h3>
              <p className="mt-3">
                HTML, CSS, JavaScript, React and Next.js.
              </p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="text-2xl font-bold">Financial Literacy</h3>
              <p className="mt-3">
                Learn investing, budgeting and personal finance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-8">
        <p>© 2026 Moneza. All Rights Reserved.</p>
      </footer>
    </main>
  );
}