import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Foundations of User Experience (UX) Design",
    company: "Coursera",
    date: "Jan 2025 - present",
    responsibilities: [
      "Gained a strong foundation in UX design principles, user research, wireframing, and prototyping.",
      "Learned usability, accessibility, and the design thinking process to create user-centered digital experiences.",
      "Developed hands-on experience with UX tools and methodologies for designing intuitive interfaces.",
    ],
  },
  {
    job: "Digital Skills: User Experience ",
    company: "Future Learn",
    date: "Jan 2025",
    responsibilities: [
      "Gained foundational knowledge of user experience (UX) principles, including usability, accessibility, and user-centered design.",
      "Learned to analyze user behavior, create wireframes, and improve digital interactions.",
      "Developed an understanding of UX research methods and how to enhance user satisfaction.",
      
    ],
  },
  {
    job: "LottieFiles for Figma Course ",
    company: "LottieFiles for Figma Course",
    date: "Jan 2025",
    responsibilities: [
      "Learned to create, integrate, and optimize lightweight Lottie animations in Figma.",
      "Gained hands-on experience in designing motion graphics for web and mobile interfaces..",
      "Explored best practices for exporting and implementing Lottie animations in UI/UX design."
    ],
  },
  {
    job: "Web Design for Beginners",
    company: "University of Moratuwa",
    date: "Jan 2025",
    responsibilities: [
      "Gained foundational knowledge of web design principles, including layout, typography, and color theory.",
      "Learned HTML, CSS, JS, and responsive design techniques for creating user-friendly websites.",
      "Developed skills in designing and structuring web pages with a focus on usability and accessibility"
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-5xl text-cyan lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
