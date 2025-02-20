import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Thepuli Kavindhya, Passionate about creating intuitive and visually engaging digital experiences, I am currently pursuing a
        degree in Software Engineering with a strong foundation in user-centered design, wireframing, prototyping,
        and front-end development. I am eager to apply my technical and design skills in a dynamic internship role,
        where I can contribute to real-world projects, collaborate with teams, and enhance my skills in UX research, UI
        design, and design systems.

      </p>
      <button className="border border-cyan rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:border-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-white transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
