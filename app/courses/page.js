import Link from "next/link";

const courses = [

  {
    id: 1,
    title: "Frontend Development",
    category: "Web Tech",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    description:
      "Build modern responsive websites using HTML, CSS, React and Next.js.",
    students: "14,200+",
    duration: "5 Months",
    price: "₹5,499",
  },

  {
    id: 2,
    title: "Python Mastery",
    category: "Programming",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    description:
      "Complete Python training with projects, APIs and automation.",
    students: "11,400+",
    duration: "4 Months",
    price: "₹4,499",
  },

  {
    id: 3,
    title: "AI Engineering",
    category: "Artificial Intelligence",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description:
      "Learn AI tools, machine learning and real-world AI applications.",
    students: "18,000+",
    duration: "7 Months",
    price: "₹7,999",
  },

];

export default function CoursesPage() {

  return (

    <div className="min-h-screen bg-[#0f172a] py-20 px-6">

      {/* TOP SECTION */}

      <div className="text-center">

        <p className="text-cyan-400 uppercase tracking-[6px] font-semibold">

          Premium Learning Platform

        </p>

        <h1 className="text-6xl font-extrabold text-white mt-6">

          Upgrade Your Skills 🚀

        </h1>

        <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">

          Learn trending technologies with practical projects,
          certificates and industry guidance.

        </p>

      </div>

      {/* COURSE CARDS */}

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-20">

        {courses.map((course) => (

          <div
            key={course.id}
            className="bg-[#1e293b] rounded-[30px] overflow-hidden border border-white/10 shadow-2xl hover:scale-105 transition duration-300"
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />

            </div>

            {/* CONTENT */}

            <div className="p-8">

              <span className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-bold">

                {course.category}

              </span>

              <h2 className="text-4xl font-extrabold text-white mt-6 leading-tight">

                {course.title}

              </h2>

              <p className="mt-5 text-gray-300 leading-relaxed">

                {course.description}

              </p>

              {/* INFO */}

              <div className="flex justify-between mt-8 text-gray-300">

                <span>
                  👨‍🎓 {course.students}
                </span>

                <span>
                  ⏳ {course.duration}
                </span>

              </div>

              {/* PRICE */}

              <div className="mt-8">

                <h3 className="text-5xl font-extrabold text-cyan-400">

                  {course.price}

                </h3>

              </div>

              {/* BUTTON */}

              <Link href={`/courses/${course.id}`}>

                <button className="w-full mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-4 rounded-2xl text-xl font-bold hover:opacity-90 transition">

                  Start Learning →

                </button>

              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}