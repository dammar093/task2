import React, { useState } from "react";
import styles from "./home.module.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import like from "../../assets/like.png";
import react from "../../assets/react.png";
import vue from "../../assets/vue.png";
import pencil from "../../assets/pencil.png";

export const courses = [
  {
    id: 1,
    title: "All Courses",
    description: "Courses you're powering through right now.",
    count: "23",
    isActive: true,
  },
  {
    id: 2,
    title: "Upcoming Courses",
    description: "Exciting new courses waiting to boost your skills.",
    count: "05",
    isActive: false,
  },
  {
    id: 3,
    title: "Ongoing Courses",
    description: "Currently happening—don’t miss out on the action!",
    count: 10,
    isActive: false,
  },
];

const Home = () => {
  const [data, setData] = useState(courses);
  const [direction, setDirection] = useState("left");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (id) => {
    const currentIndex = data.findIndex((course) => course.isActive);
    const newIndex = data.findIndex((course) => course.id === id);

    if (newIndex > currentIndex) {
      setDirection("left");
    } else if (newIndex < currentIndex) {
      setDirection("right");
    }

    const updatedData = data.map((course) =>
      course.id === id
        ? { ...course, isActive: true }
        : { ...course, isActive: false }
    );
    setData(updatedData);
  };

  return (
    <section className="w-full min-h-svh max-w-7xl">
      <div className="px-10">
        <p className="text-[24px] text-[#414141]">
          Explore our classes and master trending skills!
        </p>
        <h1 className="text-[32px] font-[700] ">
          Dive Into{" "}
          <span className="text-[#1DA077]"> What’s Hot Right Now! 🔥</span>
        </h1>
      </div>
      <div className={`${styles.home}`}>
        {data?.map((course) => (
          <div key={course.id}>
            {course.isActive ? (
              <motion.div
                className="w-[592px] h-[461px] rounded-3xl relative overflow-hidden"
                onClick={() => handleClick(course.id)}
              >
                <motion.div
                  initial={{
                    clipPath: "circle(0% at 100% 0%)",
                  }}
                  animate={{
                    clipPath: "circle(150% at 50% 50%)",
                  }}
                  exit={{
                    clipPath: "circle(0% at 0% 100%)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute bg-red w-full h-full z-10"
                >
                  <div className="w-full h-full ">
                    <div
                      className="flex items-center gap-2 cursor-pointer justify-end text-white text-[18px] font-[600] h-[61px] p-4"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      View all course
                      <motion.div
                        animate={isHovered ? { x: [0, 3, -3, 0] } : { x: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <FaArrowRight />
                      </motion.div>
                    </div>
                    <motion.div
                      key={course.id}
                      initial={
                        direction === "left" ? { x: "-100%" } : { x: "100%" }
                      }
                      animate={{ x: 0 }}
                      exit={
                        direction === "left" ? { x: "100%" } : { x: "-100%" }
                      }
                      transition={{ duration: 0.5 }}
                      className="flex gap-[42px] justify-center items-center h-[200px]"
                    >
                      <img src={react} className="w-[75px] h-[75px]" alt="" />
                      <img src={like} className="w-[75px] h-[75px]" alt="" />
                      <img src={vue} className="w-[75px] h-[75px]" alt="" />
                      <img src={pencil} className="w-[75px] h-[75px]" alt="" />
                    </motion.div>
                    <motion.div className="w-full flex justify-center items-center h-[200px] px-10">
                      <div className="w-1/2 relative">
                        <div className="text-white text-[150px] font-[700] text-center">
                          {course?.count}
                        </div>
                        <p className="absolute top-0 right-3 text-white text-[64px] font-[700]">
                          +
                        </p>
                      </div>
                      <motion.div
                        className="w-1/2 text-start"
                        initial={{ rotate: -90, y: -200, x: -100 }}
                        animate={{ rotate: 0, y: 0, x: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h2 className="text-[32px] font-[700] text-white">
                          {course?.title}
                        </h2>
                        <p className="text-white text-[18px] font-[400]">
                          {course?.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                className={styles.card}
                onClick={() => handleClick(course.id)}
              >
                <div className={styles.descriptionContainer}>
                  <div className={styles.textWrapper}>
                    <h2 className={styles.title}>{course?.title}</h2>
                    <p className={styles.description}>{course?.description}</p>
                  </div>
                </div>
                <div className={styles.heading}>
                  <div>{course?.count}</div>
                  <div className={styles.plus}>+</div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
