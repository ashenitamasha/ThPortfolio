import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [

  {
    name: "National Photography Award Competition Web Application",
    year: "Jan 2025 - Present",
    align: "left",
    image: "/Wildlife.png",
    
  },
  {
    name: "Cinec Shuttle Tracking System",
    year: "Oct 2024 - Jan 2025",
    align: "right",
    image: "/shuttle.jpg",
    link: ""
  },

  {
    name: "Automotive Services and Electrical Charging Point Finder Web Application Design",
    year: "Dec 2024",
    align: "left",
    image: "/Service.png",
   
  },
  {
    name: "Maternal and Child Clinic Management Web Application",
    year: "Jan 2025 - Present",
    align: "right",
    image: "/Clinic.png",
   
  },
  {
    name: "Nenolka Tuition Class Mobile App Design",
    year: "Jun 2024",
    align: "left",
    image: "/Class.png",
    
  },
  {
    name: "Asalanka Milk Product Distributors Web Application",
    year: "Nov 2024",
    align: "right",
    image: "/CBL.png",
    link: "#",
  },
  {
    name: "Gem E-Commerce Web Design",
    year: "Nov 2024",
    align: "left",
    image: "/Gems.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
