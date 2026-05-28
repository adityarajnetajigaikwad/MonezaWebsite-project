"use client";

export default function EnrollButton({

  courseId,

}) {

  const handleEnroll =
    async () => {

      try {

        const res = await fetch(

          "/api/courses/enroll",

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json",

            },

            credentials: "include",

            body: JSON.stringify({

              courseId,

            }),

          }
        );

        const data =
          await res.json();

        alert(data.message);

        // SUCCESS

        if (data.success) {

          window.location.href =
            "/dashboard";
        }

      } catch (error) {

        console.log(error);

        alert("Something went wrong");
      }
    };

  return (

    <button
      onClick={handleEnroll}
      className="mt-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-10 py-4 rounded-2xl text-xl font-bold shadow-xl hover:scale-105 transition duration-300"
    >

      🚀 Enroll Now

    </button>
  );
}