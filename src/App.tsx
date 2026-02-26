import Header from "./components/Header";
import Hero from "./components/Hero";
import NewLaunches from "./components/NewLaunches";
import AgeSelector from "./components/AgeSelector";
import FeaturedCourses from "./components/FeaturedCourses";
import TopTeachers from "./components/TopTeachers";
import TeacherCourses from "./components/TeacherCourses";
import WebinarCourses from "./components/WebinarCourses";
import PopularCategories from "./components/PopularCategories";
import FilterWithTime from "./components/FilterWithTime";
import AfterTimeCards from "./components/AfterTimeCards";

function App() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <AgeSelector/>
      <NewLaunches/>
      <FeaturedCourses/>
      <TopTeachers/>
      <TeacherCourses/>
      <WebinarCourses/>
      <PopularCategories/>
      <FilterWithTime/>
      <AfterTimeCards/>
    </div>
  );
}

export default App;