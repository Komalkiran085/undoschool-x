import React from "react";

const timeSlots = [
  {
    id: 1,
    title: "Morning classes",
    time: "8am - 12pm",
    icon: "☀️",
  },
  {
    id: 2,
    title: "Afternoon classes",
    time: "12pm - 4pm",
    icon: "🌤️",
  },
  {
    id: 3,
    title: "Evening classes",
    time: "4pm - 8pm",
    icon: "🌙",
  },
  {
    id: 4,
    title: "Late evening classes",
    time: "8pm - 11pm",
    icon: "🌜",
  },
];

const FilterWithTime: React.FC = () => {
  return (
    <section className="bg-[#eef2f1] py-20">
      <div className="max-w-8xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-semibold text-gray-800 mb-4">
          Filter with Time
        </h2>

        <p className="text-gray-600 text-lg mb-14">
          Choose the perfect time that fits your child's schedule
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {timeSlots.map((slot) => (
            <div
              key={slot.id}
              className="relative w-[260px] h-[120px] bg-[#e6e6e6] 
                         rounded-2xl border border-gray-300
                         p-6 text-left
                         hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {slot.title}
              </h3>

              <p className="text-gray-500 mt-1">{slot.time}</p>

              {/* Icon bottom-right */}
              <div className="absolute bottom-4 right-4 text-3xl">
                {slot.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterWithTime;