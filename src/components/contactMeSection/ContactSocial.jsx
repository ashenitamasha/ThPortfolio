import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";


const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="http://www.linkedin.com/in/thepuli-kavindhya-1552bb2a2" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/thepulikavindhya" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/thepuli_kavindhya/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.behance.net/thepulikavindh" Icon={FaBehanceSquare} />
    </div>
  );
};

export default ContactSocial;
