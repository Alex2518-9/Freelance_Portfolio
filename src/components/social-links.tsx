"use client";

import React from "react";
import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <LinkedinLogoIcon size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/alex-t%C3%A9ringer-535b76236/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <GithubLogoIcon size={30} />
        </>
      ),
      href: "https://github.com/Alex2518-9",
    },
    {
      id: 3,
      child: (
        <>
          Email <EnvelopeIcon size={30} />
        </>
      ),
      href: "mailto:teringeralex2000@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <ReadCvLogoIcon size={30} />
        </>
      ),
      href: "../../public/assets/Alex_Téringer_CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, href, child, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
