"use client";
import Image from "next/image";
import ProfilePicture from "../../public/assets/Profile_pict.jpg";

export default function Hero() {
  return (
    <section className="mx-auto min-h-screen max-w-screen-xl px-4 py-16 md:py-24 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight">
        Front‑End Developer & Freelancer
      </h1>
      <div className="w-full  flex flex-col-reverse md:flex-row items-center md:items-stretch justify-center gap-8 md:gap-4 h-full mt-8 md:mt-16">
        <div className="flex px-4 flex-col items-center md:items-start justify-between max-w-full md:max-w-[50%]">
          <p className="text-lg sm:text-xl md:text-2xl text-justify md:text-left">
            Hi, I’m Alex. I’m a front-end developer with 3 years of experience
            building responsive, high-performance websites and web applications.
            With a strong foundation in modern technologies like React,
            JavaScript, HTML, and CSS, I focus on delivering clean code,
            intuitive interfaces, and seamless user experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 w-full">
            <a
              href="#projects"
              className="rounded-md bg-indigo-600 px-5 py-3 text-white font-medium hover:bg-indigo-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-md border border-gray-300 dark:border-gray-700 px-5 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full md:w-auto">
          <Image
            src={ProfilePicture}
            alt="Téringer Alex"
            height={500}
            width={350}
            className="rounded-2xl mt-8 md:mt-0 w-full max-w-[300px] sm:max-w-[350px] h-auto object-cover shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
