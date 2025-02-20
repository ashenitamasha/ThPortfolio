import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="thepulikavindhya@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 75 865 5414" Image={FiPhone} />
      <SingleInfo text="Kaduwela , Srilanka" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
