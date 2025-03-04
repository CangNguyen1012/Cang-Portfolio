import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";
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
    name: "Discord",
    icon: <FaDiscord />,
    path: "https://discord.com/users/682561193856335872",
  },
  {
    name: "Zalo",
    icon: <SiZalo />,
    path: "https://zalo.me/0936408410",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank" //open in new tab
            rel="noopener noreferrer" //Improve security and prevents the new tab from accessing the  page
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
