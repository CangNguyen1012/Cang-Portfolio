import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    path: "https://github.com/CangNguyen1012",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ba-cang-nguyen-aa216830b/?trk=opento_sprofile_details",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    path: "",
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    path: "",
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    path: "",
  },
  {
    name: "Zalo",
    icon: <SiZalo />,
    path: "",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
