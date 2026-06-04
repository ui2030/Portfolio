import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
const features = [
  {
    name: "Age:",
    description: "2000년 6월 9일생",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "kimcjsdml@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Seoul, South Korea",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden  px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-lg leading-7"><a href="https://sam-folio.vercel.app">Get to know more</a></h2>
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>
              <p className="mt-6 text-lg leading-8" data-aos="fade-right">
                안녕하세요, Python 기반 AI 모델링과 Computer Vision 프로젝트를 수행해 온 AI 엔지니어 김천의입니다. 저에게 AI는 단순히 모델의 성능을 높이는 일이 아니라, 데이터를 현실의 가치로 바꾸고 실제 문제 해결로 연결하는 과정이라고 생각합니다. 최근에는 AMR 위험 감지 프로젝트에서 YOLO11n Fine-tuning과 BoT-SORT 기반 객체 추적을 수행하며 산업 현장의 안전 위험 상황을 탐지하는 AI 시스템 개발에 참여했고, 스마트팜 프로젝트에서는 AutoEncoder 기반 이상 탐지 모델과 SHAP 기반 모델 해석(XAI)을 다루며 데이터 분석과 AI 모델링 역량을 함께 키워왔습니다. 무엇보다 저는 결과의 성능보다 그 결과가 왜 나왔는지를 분석하고, 설명 가능한 방식으로 문제를 풀어내는 과정을 중요하게 생각합니다. 앞으로도 기술을 잘 만드는 것을 넘어, 데이터와 사용자 관점을 연결하며 빠르게 진화하는 AI 분야와 함께 끊임없이 성장하는 엔지니어가 되겠습니다.
              </p>
            </div>
          </div>
        </div>
        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="Developer workspace"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="h-5 w-5 mx-auto" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  신입 AI 엔지니어 — Computer Vision · 시계열 이상 탐지 · 설명 가능한 AI(XAI) 중심
                </p>
                <p className="mt-3 list-item list-inside">
                  대전대학교 HRD사업단 — 빅데이터 기반 IoT 클라우드 SW 개발 수료 (2025.06~10)
                </p>
                <p className="mt-3 list-item list-inside">
                  (KDT) 휴먼AI교육센터 수료 (2026.03~05) — 데이터 분석 기반 서비스 솔루션 개발 과정
                </p>
              </div>
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                  대전대학교 컴퓨터공학과 졸업 (4년제)
                </p>
                <p className="mt-3 list-item list-inside">
                  CDS 빅데이터 자격인증 2급 취득 (SSMI, 2023.12)
                </p>
                <p className="mt-3 list-item list-inside">
                  수상: 최우수상 — KDT 최종 프로젝트 평가 (AMR 스마트 운영 플랫폼, 휴먼AI교육센터, 2026.05)
                </p>
                <p className="mt-3 list-item list-inside">
                  수상: CDS 빅데이터 경진대회 · 미로탈출 자율주행 코딩 경진대회 (대전대 LINC3.0)
                </p>
              </div>
            </div>
            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}