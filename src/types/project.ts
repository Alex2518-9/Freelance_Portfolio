import { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  live?: string;
  repo?: string;
};

export type Stack = {
  id: string | number;
  src: StaticImageData;
  title: string;
  className?: HTMLAttributes<HTMLElement>["className"];
};
