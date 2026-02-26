
import robotics from "../assets/robotics.png"; // use your image
import CourseCard from "./CourseCard";

const NewLaunches = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          New Launches ⭐
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Our most loved courses that kids absolutely adore!
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            
            <CourseCard
              key={item}
              image={robotics}
              title="Summer robotics camp: fun projects with auto arduino, Tink..."
              description="Build circuits & smart projects like alarms, weather stations, etc"
              language="English"
              level="Intermediate"
              classes="4 classes"
              age="7–10 yrs"
              duration="45"
              price="299"
              rating="4.9"
              learners="200+"
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewLaunches;