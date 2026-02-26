import { useState } from "react";
import TextPressure from "./TextPressure.jsx";

interface AgeSelectorProps {
  onSelect?: (age: string) => void;
}

const AgeSelector = ({ onSelect }: AgeSelectorProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const ages = [
    "1-2", "2-3", "3-4",
    "4-5", "5-6", "6-7",
    "7-8", "8-9", "9-10", "10-11", "11-12",
    "12-13", "13-14", "14-15", "15-16",
    "16-17", "17-18", "18-19", "19-20",
  ];

  // Color groups
  const getColorClasses = (index: number) => {
    if (index <= 2)
      return {
        border: "border-yellow-400",
        text: "text-yellow-600",
        bg: "bg-yellow-400"
      };

    if (index <= 5)
      return {
        border: "border-orange-400",
        text: "text-orange-600",
        bg: "bg-orange-400"
      };

    if (index <= 10)
      return {
        border: "border-pink-400",
        text: "text-pink-600",
        bg: "bg-pink-400"
      };

    if (index <= 14)
      return {
        border: "border-green-500",
        text: "text-green-600",
        bg: "bg-green-500"
      };

    return {
      border: "border-blue-400",
      text: "text-blue-600",
      bg: "bg-blue-400"
    };
  };

  const handleClick = (age: string) => {
    setSelected(age);
    onSelect?.(age);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-200 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <TextPressure
          text="How old are You?"
          fontFamily="Fredoka"
          flex={false}
          width={false}
          alpha={false}
          stroke={false}
          weight
          textColor="#6a0eb5"
          minFontSize={36}
        />

        <p className="text-gray-600 mb-10">
          Pick your age and find the perfect courses just for you! ✨
        </p>

        {/* Age Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {ages.map((age, index) => {
            const colors = getColorClasses(index);
            const isActive = selected === age;

            return (
              <button
                key={age}
                onClick={() => handleClick(age)}
                className={`
                  px-5 py-3
                  rounded-2xl
                  border-2
                  text-sm font-medium
                  transition-all duration-200
                  ${colors.border}
                  ${
                    isActive
                      ? `${colors.bg} text-white scale-120`
                      : `bg-white ${colors.text} hover:scale-120`
                  }
                `}
              >
                {age}
                <div className="text-xs">Years</div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AgeSelector;