import TeacherCard from "./TeacherCard";
import teacher from "../assets/teacher.png"; // replace with your image

const TopTeachers = () => {
  const teachers = [
    {
      name: "Andy Brew",
      qualification: "M.Sc, B.Ed",
      experience: "15+ Years",
      students: "1000+",
      subject: "Computer science",
    },
    {
      name: "Andy Brew",
      qualification: "M.Sc, B.Ed",
      experience: "15+ Years",
      students: "1000+",
      subject: "English",
    },
    {
      name: "Andy Brew",
      qualification: "M.Sc, B.Ed",
      experience: "15+ Years",
      students: "1000+",
      subject: "Early educator",
    },
    {
      name: "Andy Brew",
      qualification: "M.Sc, B.Ed",
      experience: "15+ Years",
      students: "1000+",
      subject: "Coding",
    },
    {
      name: "Andy Brew",
      qualification: "M.Sc, B.Ed",
      experience: "15+ Years",
      students: "1000+",
      subject: "Computer science",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-lime-100 to-gray-100">
      <div className="max-w-8xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-semibold mb-4">
          Learn from Top Teachers
        </h2>

        <p className="text-gray-600 mb-16">
          Expert instructors who make learning fun and engaging for every child
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {teachers.map((teacherData, index) => (
            <TeacherCard
              key={index}
              image={teacher}
              {...teacherData}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopTeachers;