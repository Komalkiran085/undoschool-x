
import robotics from "../assets/robotics.png";
import RowCourseCard from "./RowCourseCard";

const AfterTimeCards = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-100 to-purple-100">
            <div className="max-w-full mx-auto px-6">

                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex gap-55 w-max px-2">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div className="min-w-[380px] flex-shrink-0" key={item}>
                                <RowCourseCard
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
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AfterTimeCards;