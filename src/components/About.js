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
안녕하세요, AI 모델의 성능 수치에서 멈추지 않고 오류가 어디서 왜 발생하는지 찾아 개선하는 엔지니어 김천의입니다. 스마트팜 예지보전 프로젝트에서는 오탐의 94%가 양액 센서 계통 한 곳에서 나온다는 것을 혼동행렬 분석으로 밝혀, 실제 이상은 하나도 놓치지 않으면서 오탐률을 10.1%에서 4.4%로 낮췄습니다. AMR 위험 감지 프로젝트에서는 사전학습 모델에 지게차 클래스가 없어 베이스라인조차 잡을 수 없던 상태에서, 학습 데이터를 직접 만들어 재현율 1.00과 위험 상황 누락 0건을 달성했습니다. 교육 과정을 마친 뒤에도 개발을 이어가, 캡스톤에서 만든 화면 번역 도구를 1년 넘게 혼자 발전시켜 처리 시간을 27초에서 약 2초로 줄였고, 한국어 의료 문장으로 음성 인식 모델을 직접 측정해 약품명 20종 중 18종이 오인식된다는 사실을 확인했습니다. 저는 성능 지표 하나로 결론을 내리기보다, 무엇이 왜 틀렸는지를 수치로 확인하고 설명할 수 있는 형태로 만드는 일을 중요하게 생각합니다.
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