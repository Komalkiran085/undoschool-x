import React from "react";
import { motion } from "framer-motion";

import codingImg from "../assets/coding.png";
import publicImg from "../assets/public-speaking.png";
import chessImg from "../assets/chess.png";
import homeworkImg from "../assets/homework.png";
import appImg from "../assets/app-building.png";

const categories = [
    { id: 1, title: "Coding", image: codingImg, active: true },
    { id: 2, title: "Public speaking", image: publicImg },
    { id: 3, title: "Chess", image: chessImg },
    { id: 4, title: "Home work help", image: homeworkImg },
    { id: 5, title: "App building", image: appImg },
];

const PopularCategories: React.FC = () => {
    return (
        <section className="bg-[#f4f4f4] py-20">
            <div className="max-w-8xl mx-auto px-6 text-center">
                {/* Heading */}
                <h2 className="text-5xl font-semibold text-gray-800 mb-4">
                    Popular Categories
                </h2>

                <p className="text-gray-500 text-lg mb-16">
                    Pick what you love most! These categories have everything you need
                    to learn something awesome ✨
                </p>

                {/* Cards */}
                <div className="flex justify-center gap-8 flex-wrap">
                    {categories.map((item) => (
                        <motion.div
                            key={item.id}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={{
                                rest: { scale: 1, y: 0 },
                                hover: {
                                    scale: 1.07,
                                    y: -10,
                                    boxShadow: "0px 25px 50px rgba(255,140,0,0.35)"
                                }
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className={`
      relative w-[260px] h-[160px] rounded-3xl
      px-6 pb-6 pt-10
      flex items-end
      overflow-visible
      ${item.active
                                    ? "bg-orange-500 text-white shadow-[0_20px_40px_rgba(255,115,0,0.35)]"
                                    : "bg-[#efefef] border border-gray-300 text-gray-800"
                                }
    `}
                        >
                            {/* Floating Image */}
                            <motion.div
                                variants={{
                                    rest: { scale: 1 },
                                    hover: { scale: 1.2 }
                                }}
                                transition={{ type: "spring", stiffness: 250, damping: 12 }}
                                className="absolute -top-14 right-4 w-[160px] h-[120px] pointer-events-none"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>

                            <h3 className="text-xl font-semibold">
                                {item.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;