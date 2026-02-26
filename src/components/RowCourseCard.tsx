interface RowCourseCardProps {
  image: string;
  title: string;
  description: string;
  language: string;
  level: string;
  classes: string;
  age: string;
  duration: string;
  price: string;
  rating: string;
  learners: string;
}

const RowCourseCard = ({
  image,
  title,
  description,
  language,
  level,
  classes,
  age,
  duration,
  price,
  rating,
  learners,
}: RowCourseCardProps) => {
  return (
    <div className="w-full max-w-sm mx-auto" >
      {/* Rating */}
      <div className="text-sm text-gray-500 mb-2 flex items-center gap-1">
        ⭐ {rating} | {learners} learners
      </div>

    <div className="bg-white rounded-3xl shadow-md p-4 flex hover:shadow-xl gap-4 transition-all duration-300 w-xl">


      {/* Image */}
      <div className="rounded-2xl overflow-hidden mb-4 w-2/3 ">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="w-2/3" >
        
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-3 py-1 text-xs rounded-full border border-blue-400 text-blue-600">
          {language}
        </span>
        <span className="px-3 py-1 text-xs rounded-full border border-red-400 text-red-500">
          {level}
        </span>
        <span className="px-3 py-1 text-xs rounded-full border border-yellow-400 text-yellow-600">
          {classes}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
        {description}
      </p>

      {/* Bottom Row */}
      <div className="flex items-center justify-between text-sm text-gray-600 pt-3">
        <div className="flex items-center gap-4">
          <span>👤 {age}</span>
          <span>⏱ {duration}</span>
          <span className="font-semibold text-black">₹ {price}</span>
        </div>

        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
          🛒
        </button>
      </div>
      </div>

    </div>
    </div>
  );
};

export default RowCourseCard;