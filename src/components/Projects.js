import { useEffect } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "AMR Safety Platform",
    href: "https://github.com/ui2030/collision_detection",
    imageSrc: process.env.PUBLIC_URL + "/amr.png",
    pdf: process.env.PUBLIC_URL + "/amr_ppt.pdf",
    used: "Python, YOLOv11, OpenCV, BoT-SORT",
    description:
      "Computer Vision으로 위험 주행 상황을 사전에 감지하는 자율주행 로봇(AMR) 안전 플랫폼.",
  },
  {
    id: 2,
    name: "Smartfarm Predictive Maintenance",
    href: "https://github.com/ui2030/nutrient_pump_anomaly_detection",
    imageSrc: process.env.PUBLIC_URL + "/smartfarm.png",
    pdf: process.env.PUBLIC_URL + "/smartfarm_ppt.pdf",
    used: "Python, PyTorch, AutoEncoder",
    description:
      "AutoEncoder 기반 이상 탐지로 스마트팜 양액펌프의 막힘을 사전에 감지하는 예지보전 프로젝트.",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <div className="mx-auto text-center max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold tracking-tight">프로젝트 발표자료</h3>
          <p className="mt-2 text-sm">
            각 프로젝트의 발표 PPT를 PDF로 다운로드할 수 있습니다.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.pdf}
                download
                className="btn btn-outline gap-2"
              >
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                {project.name} PPT
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://github.com/ui2030"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}