import EnrollButton
from "@/components/EnrollButton";

const courses = {

  1: {

    title: "Web Development",

    category: "Development",

    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    description:
      "Master modern full-stack web development using HTML, CSS, JavaScript, React.js, Next.js and MongoDB.",

    duration: "6 Months",

    level: "Beginner to Advanced",

    students: "12,500+",

    instructor: "Karan Ghatage",

    projects: "15+ Real Projects",

    certificate: "Yes",

    price: "₹4,999",

    learn: [

      "HTML5 & CSS3",
      "JavaScript ES6",
      "React.js",
      "Next.js",
      "MongoDB",
      "Authentication",
      "API Integration",
      "Deployment",

    ],
  },

  2: {

    title: "Python Programming",

    category: "Programming",

    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",

    description:
      "Learn Python from scratch and build practical applications with real coding experience.",

    duration: "4 Months",

    level: "Beginner",

    students: "9,800+",

    instructor: "Karan Ghatage",

    projects: "10+ Projects",

    certificate: "Yes",

    price: "₹3,999",

    learn: [

      "Python Basics",
      "Loops & Functions",
      "OOP Concepts",
      "File Handling",
      "Libraries",
      "Projects",

    ],
  },

  3: {

    title: "Artificial Intelligence",

    category: "AI & ML",

    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",

    description:
      "Learn AI, Machine Learning and Deep Learning with modern tools and industry projects.",

    duration: "8 Months",

    level: "Intermediate",

    students: "15,000+",

    instructor: "Karan Ghatage",

    projects: "20+ AI Projects",

    certificate: "Yes",

    price: "₹6,999",

    learn: [

      "AI Basics",
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Generative AI",
      "AI Projects",

    ],
  },

};

export default async function CourseDetails({
  params,
}) {

  const resolvedParams = await params;

  const course =
    courses[resolvedParams.id];

  return (

    <div className="min-h-screen bg-white py-16 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TOP SECTION */}

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <img
            src={course.image}
            alt={course.title}
            className="w-full h-[500px] object-cover rounded-[30px]"
          />

          {/* INFO */}

          <div>

            <p className="uppercase tracking-[5px] text-cyan-500 font-semibold">

              {course.category}

            </p>

            <h1 className="text-6xl font-extrabold text-gray-800 mt-5 leading-tight">

              {course.title}

            </h1>

            <p className="mt-8 text-gray-600 text-xl leading-relaxed">

              {course.description}

            </p>

            {/* STATS */}

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-white rounded-2xl p-4">

                <h3 className="font-bold text-lg text-gray-800">
                  Duration
                </h3>

                <p className="mt-2 text-gray-600">
                  {course.duration}
                </p>

              </div>

              <div className="bg-white rounded-2xl p-4">

                <h3 className="font-bold text-lg text-gray-800">
                  Level
                </h3>

                <p className="mt-2 text-gray-600">
                  {course.level}
                </p>

              </div>

              <div className="bg-white rounded-2xl p-4">

                <h3 className="font-bold text-lg text-gray-800">
                  Students
                </h3>

                <p className="mt-2 text-gray-600">
                  {course.students}
                </p>

              </div>

              <div className="bg-white rounded-2xl p-4">

                <h3 className="font-bold text-lg text-gray-800">
                  Instructor
                </h3>

                <p className="mt-2 text-gray-600">
                  {course.instructor}
                </p>

              </div>

            </div>

            {/* PRICE */}

            <div className="mt-10 flex items-center gap-5">

              <h2 className="text-5xl font-extrabold text-blue-600">

                {course.price}

              </h2>

              <span className="line-through text-gray-400 text-2xl">

                ₹9,999

              </span>

            </div>

            {/* BUTTON */}

            <EnrollButton
              courseId={resolvedParams.id}
            />

          </div>

        </div>

        {/* WHAT YOU'LL LEARN */}

        <div className="mt-24">

          <h2 className="text-5xl font-extrabold text-gray-800 text-center">

            What You'll Learn

          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-12">

            {course.learn.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-5 text-lg font-medium text-gray-700"
              >

                ✅ {item}

              </div>

            ))}

          </div>

        </div>

        {/* EXTRA SECTION */}

        <div className="grid md:grid-cols-3 gap-6 mt-20">

          <div className="bg-white rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-gray-800">

              Real Projects

            </h3>

            <p className="mt-3 text-gray-600 text-base">

              {course.projects}

            </p>

          </div>

          <div className="bg-white rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-gray-800">

              Certificate

            </h3>

            <p className="mt-3 text-gray-600 text-base">

              {course.certificate}

            </p>

          </div>

          <div className="bg-white rounded-2xl p-6">

            <h3 className="text-2xl font-bold text-gray-800">

              Lifetime Access

            </h3>

            <p className="mt-3 text-gray-600 text-base">

              Available for all students

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}