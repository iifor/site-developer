// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import ProjectCard from "@/app/components/homepage/projects/project-card";

const coderFields = [
  { key: 'name', value: 'ifor' },
  { key: 'skills', value: ['React', 'NextJS', 'TypeScript', 'Node.js', 'Docker', 'MySQL', 'MongoDB', 'Git', 'VUE', 'UNIAPP', 'MINIPROGRAM', 'GO', 'PYTHON', 'RUST'], type: 'array' },
  { key: 'hardWorker',value: true, type: 'boolean' },
  { key: 'quickLearner', value: true, type: 'boolean' },
  { key: 'problemSolver', value: true, type: 'boolean' },
];

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            你好，欢迎来到这里<br />
            我是{' '}
            <span className=" text-pink-500">{personalData.name}</span><br />
            {`正在成为`}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <ProjectCard varName="coder" fields={coderFields} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
