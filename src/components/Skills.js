import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const aiml = [
  {
    name: "Python",
    value: 90,
    icon: CheckCircleIcon,
  },
  {
    name: "YOLOv11",
    value: 88,
    icon: CheckCircleIcon,
  },
  {
    name: "OpenCV",
    value: 82,
    icon: CheckCircleIcon,
  },
  {
    name: "scikit-learn",
    value: 78,
    icon: CheckCircleIcon,
  },
  {
    name: "PyTorch",
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: "TensorFlow / Keras",
    value: 70,
    icon: CheckCircleIcon,
  },
];
const dataTools = [
  {
    name: "Pandas / NumPy",
    value: 90,
    icon: CheckCircleIcon,
  },
  {
    name: "SHAP (XAI)",
    value: 82,
    icon: CheckCircleIcon,
  },
  {
    name: "Git / Linux",
    value: 78,
    icon: CheckCircleIcon,
  },
  {
    name: "PostgreSQL / SQL",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: "FastAPI",
    value: 65,
    icon: CheckCircleIcon,
  },
  {
    name: "Docker",
    value: 60,
    icon: CheckCircleIcon,
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-24 sm:py-32" id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Explore my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              AI / Machine Learning
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {aiml.map((skill) => (
                <div key={skill.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <skill.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {skill.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={skill.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Data & Backend
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {dataTools.map((skill) => (
                <div key={skill.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <skill.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {skill.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={skill.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}