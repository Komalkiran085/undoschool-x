import StatsBadge from "./StatsBadge";
import SearchBar from "./SearchBar";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import Ballpit from "./Ballpit.jsx";

const Hero = () => {
    return (
        <section className="relative w-full min-h-[700px] overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-purple-600 px-4">

            {/* 🔥 Ballpit Background Layer */}
            <div className="absolute inset-0 z-0">
                <Ballpit
                    colors={[0xffe066, 0xffd633, 0xffe066]}
                    ambientColor={0xffe680}
                    lightIntensity={150}
                    count={50}
                    gravity={0.01}
                    friction={0.9975}
                    wallBounce={0.95}
                    followCursor={false}
                    materialParams={{
                        transparent: true,
                        opacity: 0.9,
                        metalness: 0.2,
                        roughness: 0.35,
                        clearcoat: 0.8,
                        clearcoatRoughness: 0.4,
                        emissive: 0xcc9900,
                        emissiveIntensity: 0.2
                    }}
                />
            </div>

            {/* 🔥 Main Content Wrapper */}
            <div className="relative z-20 flex flex-col items-center justify-center min-h-[600px] text-center text-white">

                {/* Mobile Badges */}
                <div className="flex justify-center gap-3 mt-6 md:hidden">
                    <StatsBadge title="500+" subtitle="Courses" />
                    <StatsBadge title="10k+" subtitle="Happy Kids" />
                    <StatsBadge title="4.9" subtitle="Rating" />
                </div>

                {/* Headings */}
                <h1 className=" mt-30 font-comic text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-3 sm:mb-4">
                    Learn a New Skill
                </h1>

                <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-300 mb-6 sm:mb-8">
                    Everyday, Anytime, and Anywhere.
                </h2>
                

                <SearchBar />
            </div>

            {/* Left Image */}
            <img
                src={boy}
                alt="Boy"
                className="absolute bottom-0 left-2 sm:left-6 md:left-10 w-[140px] sm:w-[180px] md:w-[240px] lg:w-[280px] z-20"
            />

            {/* Right Image */}
            <img
                src={girl}
                alt="Girl"
                className="absolute bottom-0 right-2 sm:right-6 md:right-10 w-[140px] sm:w-[180px] md:w-[240px] lg:w-[280px] z-20"
            />

            {/* Desktop Floating Badges */}
            <div className="hidden sm:block z-30">
                <StatsBadge
                    title="500+"
                    subtitle="Courses"
                    className="absolute top-20 left-6 sm:left-10 md:left-40"
                />

                <StatsBadge
                    title="10k+"
                    subtitle="Happy Kids"
                    className="absolute top-28 right-6 sm:right-10 md:right-40"
                />
                <StatsBadge
                    title="4.9"
                    subtitle="Ratings"
                    className="absolute top-98 sm:left-90"
                />

            </div>

        </section>
    );
};

export default Hero;