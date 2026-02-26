interface TeacherCardProps {
  image: string;
  name: string;
  qualification: string;
  experience: string;
  students: string;
  subject: string;
}

const TeacherCard = ({
  image,
  name,
  qualification,
  experience,
  students,
  subject,
}: TeacherCardProps) => {
  return (
    <div className="relative bg-white rounded-3xl shadow-md pt-16 pb-6 px-6 text-center w-60 hover:shadow-xl transition-all duration-300">

      {/* Profile Image */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold mt-2">{name}</h3>

      {/* Qualification + Experience */}
      <p className="text-sm text-gray-500 mt-1">
        {qualification} | {experience}
      </p>

      {/* Students */}
      <p className="text-sm text-gray-500 mt-1">
        {students} Students
      </p>

      {/* Subject Badge */}
      <div className="mt-4">
        <span className="px-4 py-1 text-sm bg-gray-100 rounded-full text-gray-700">
          {subject}
        </span>
      </div>
    </div>
  );
};

export default TeacherCard;