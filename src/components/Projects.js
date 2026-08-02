import { useEffect, useState } from "react";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "AMR 위험 주행 사전 감지",
    badge: "KDT 최우수상",
    period: "2026.05 · 5인 팀",
    href: "https://github.com/ui2030/collision_detection",
    imageSrc: process.env.PUBLIC_URL + "/amr.png",
    pdf: process.env.PUBLIC_URL + "/amr_ppt.pdf",
    pdfLabel: "AMR",
    used: "Python, YOLO11n, BoT-SORT, OpenCV, Unity",
    description:
      "지게차와 보행자의 충돌 위험을 몇 초 전에 알리는 시스템입니다. 사전학습 모델에 '지게차' 클래스가 없어 베이스라인조차 잡을 수 없는 상태에서 출발했습니다.",
    role:
      "학습 데이터 확보 방안 검증과 Unity 시뮬레이션 채택 주도, YOLO11n 파인튜닝, BoT-SORT 매칭 기준 조정, TTC 기반 위험도 공식 설계",
    metrics: [
      "검증셋 1,050객체 기준 재현율 1.00",
      "위험 상황 누락 0건, 전체 탐지 mAP 0.92",
      "보행자 F1 0.98 / 지게차 F1 0.94",
    ],
  },
  {
    id: 2,
    name: "스마트팜 양액펌프 막힘 사전 감지",
    badge: "예지보전",
    period: "2026.04 · 5인 팀",
    href: "https://github.com/ui2030/nutrient_pump_anomaly_detection",
    imageSrc: process.env.PUBLIC_URL + "/smartfarm.png",
    pdf: process.env.PUBLIC_URL + "/smartfarm_ppt.pdf",
    pdfLabel: "스마트팜",
    used: "Python, TensorFlow/Keras, AutoEncoder, SHAP, Optuna",
    description:
      "오탐이 운영 신뢰도를 떨어뜨리던 이상 탐지 시스템에서, 평가의 축을 바꿔 오탐이 어디서 나오는지 찾아낸 프로젝트입니다.",
    role:
      "평가 체계 설계(행 단위 F1에서 고장 이벤트 단위와 계통별 혼동행렬로 확장), 3단계 경보 임계값 산출, SHAP 시각화, 오탐 원인 귀속 분석",
    metrics: [
      "오탐의 94%가 단일 계통에 집중됨을 특정",
      "오탐률 10.1% → 4.4%(−56%), 실제 이상 놓침 0건",
      "정밀도 0.64 → 0.80, 이벤트 단위 F1 0.91",
    ],
  },
  {
    id: 3,
    name: "한국어 의료 문장 STT 검증",
    badge: "개인",
    period: "2026.07",
    href: "https://github.com/ui2030/-Whisper_Demo",
    used: "Python, Whisper, CUDA/fp16, CER 측정",
    description:
      "진료 기록을 음성으로 입력하는 기술이 실제로 쓸 만한지 직접 재봤습니다. 측정 스크립트와 평가 문장, 결과 데이터를 모두 공개했습니다.",
    role: "평가 문장 셋 구성, 로컬 GPU 추론, 문자 오류율(CER) 실측과 오류 유형 분석",
    metrics: [
      "16초 음성을 1.9초에 전사",
      "약품명 20종 중 18종 오인식 확인",
      "의료 용어 문장 오류율이 일반 문장의 1.7배",
    ],
  },
  {
    id: 4,
    name: "실시간 화면 OCR 번역 (Cocktail)",
    badge: "단독 유지보수",
    period: "2024.06 ~ 현재",
    href: "https://github.com/ui2030/capstone_translate",
    used: "Python, PySide6, Tesseract, opus-mt, m2m100",
    description:
      "캡스톤에서 만든 500줄짜리 영역 번역 도구를, 트레이에 상주하며 화면을 읽어 번역하는 3,000줄 규모 도구로 키웠습니다.",
    role:
      "졸업 후 단독 유지보수 — 로그로 병목 추적, 다국어 확장, 결함 문서화와 회귀 검사 체계 구축",
    metrics: [
      "화면 한 번 처리 27초 → 약 2초",
      "영어 한 방향에서 여섯 개 언어 인식으로 확장",
      "스모크 테스트 30여 건을 통과해야 변경 반영",
    ],
  },
  {
    id: 5,
    name: "LLM 데스크톱 비서 (Apia)",
    badge: "개인 · 진행 중",
    period: "2026.05 ~ 현재",
    href: "https://github.com/ui2030/Apia",
    used: "Electron, FastAPI, 로컬 LLM(Qwen), MCP, Edge-TTS",
    description:
      "로컬 모델과 클라우드 모델을 역할에 따라 나눠 쓰는 데스크톱 비서입니다. 개인 데이터가 기기 밖으로 나가지 않도록 로컬을 우선해 설계했습니다.",
    role:
      "서비스 전체 구조 설계, AI 에이전트 분업 체계 설계(기획·구현·검증 모델 분리)와 수용 기준 정의, 최종 검증",
    metrics: [
      "150여 커밋 규모의 지속 개발",
      "작업 규칙, 검증 명령, 회귀 이력을 문서로 운영",
      "LLM 출력을 JSON으로 구조화해 자율 행동에 사용",
    ],
  },
  {
    id: 6,
    name: "Home_Spot 부동산 전월세 플랫폼",
    badge: "데이터 파트 리드",
    period: "2025.09 · 5인 팀",
    href: "https://github.com/ui2030/Home_Spot",
    used: "MySQL, Node.js, Ollama(Qwen 2.5 3B), SSE",
    description:
      "매물을 믿을 수 있는가, 궁금한 점을 바로 물어볼 수 있는가. 이 두 가지를 팀의 문제로 제안하고 데이터와 상담 챗봇을 맡았습니다.",
    role:
      "문제 정의 제안, 매물·회원 스키마 설계, 공공 실거래 자료 기반 데이터 전처리, 전세 상담 챗봇 개발",
    metrics: [
      "상담 범위를 프롬프트와 서버 필터로 이중 통제",
      "거래 유형별 필수 항목을 규칙화해 표기 통일",
      "응답 스트리밍과 세션별 대화 20턴 유지",
    ],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  useEffect(() => {
    if (!selected) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div id="projects">
      <div className="mx-auto text-center max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <p className="mt-4 text-sm opacity-80">
          팀 프로젝트는 제가 맡은 부분을 구분해 적었고, 성과는 측정한 값만 표기했습니다.
        </p>
        <p className="mt-1 text-sm opacity-70">
          카드를 클릭하면 발표자료와 상세 설명이 열립니다.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              role="button"
              tabIndex={0}
              aria-label={`${project.name} 상세 보기`}
              onClick={() => setSelected(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelected(project);
                }
              }}
              className="group flex cursor-pointer flex-col text-left ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl overflow-hidden transition duration-200 hover:ring-primary hover:-translate-y-1 focus:outline-none focus-visible:ring-primary"
              data-aos="fade-up"
            >
              {project.imageSrc ? (
                <div className="h-48 w-full overflow-hidden group-hover:brightness-75 duration-300">
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ) : (
                <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-base-300 to-base-100">
                  <span className="px-6 text-center text-2xl font-bold tracking-tight opacity-40">
                    {project.name}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-2">
                  <span className="badge badge-outline badge-sm">
                    {project.badge}
                  </span>
                  <span className="text-xs opacity-70">{project.period}</span>
                </div>

                <h3 className="mt-3 text-lg font-bold">{project.name}</h3>

                <p className="mt-2 text-sm leading-6 opacity-90">
                  {project.description}
                </p>

                <p className="mt-4 text-sm leading-6">
                  <span className="font-semibold">담당 </span>
                  {project.role}
                </p>

                <ul className="mt-4 space-y-1 text-sm">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex gap-2">
                      <span aria-hidden="true">·</span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-auto pt-4 text-xs font-medium opacity-80">
                  {project.used}
                </p>

                <p className="mt-3 text-xs font-semibold opacity-70">
                  {project.pdf ? "클릭하면 발표자료가 열립니다" : "클릭하면 상세 설명이 열립니다"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <a
            href="https://github.com/ui2030"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-64 gap-2"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
            GitHub 저장소 보기
          </a>
          <a
            href="https://www.youtube.com/@%EA%B9%80%EC%B2%9C%EC%9D%98%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline w-64 gap-2"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
            프로젝트 시연 영상 보기
          </a>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setSelected(null)}
            aria-hidden="true"
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.name} 상세`}
            className="relative flex h-full w-full max-w-3xl flex-col bg-base-100 shadow-2xl"
          >
            <header className="flex items-start justify-between gap-4 border-b border-base-300 p-5">
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="badge badge-outline badge-sm">
                    {selected.badge}
                  </span>
                  <span className="text-xs opacity-70">{selected.period}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">{selected.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="btn btn-ghost btn-sm btn-circle"
                aria-label="닫기"
              >
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-5 text-left">
              {selected.pdf ? (
                <div className="mb-6">
                  <iframe
                    src={`${selected.pdf}#view=FitH`}
                    title={`${selected.name} 발표자료`}
                    className="h-[26rem] w-full rounded-xl border border-base-300 bg-base-200 sm:h-[32rem]"
                  />
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={selected.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline gap-2"
                    >
                      <ArrowTopRightOnSquareIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                      새 탭에서 크게 보기
                    </a>
                    <a
                      href={selected.pdf}
                      download
                      className="btn btn-sm btn-outline gap-2"
                    >
                      <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
                      발표자료 내려받기
                    </a>
                  </div>
                </div>
              ) : (
                <p className="mb-6 rounded-xl border border-base-300 bg-base-200 p-4 text-sm leading-6">
                  발표자료가 따로 없는 개인 프로젝트입니다. 코드와 기록은 저장소에서 확인하실 수 있습니다.
                </p>
              )}

              <section className="space-y-5 text-sm leading-6">
                <div>
                  <h4 className="font-bold">프로젝트 개요</h4>
                  <p className="mt-1 opacity-90">{selected.description}</p>
                </div>
                <div>
                  <h4 className="font-bold">담당</h4>
                  <p className="mt-1 opacity-90">{selected.role}</p>
                </div>
                <div>
                  <h4 className="font-bold">성과</h4>
                  <ul className="mt-1 space-y-1">
                    {selected.metrics.map((metric) => (
                      <li key={metric} className="flex gap-2">
                        <span aria-hidden="true">·</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">사용 기술</h4>
                  <p className="mt-1 opacity-90">{selected.used}</p>
                </div>
              </section>
            </div>

            <footer className="border-t border-base-300 p-5">
              <a
                href={selected.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm gap-2"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                GitHub 저장소 열기
              </a>
            </footer>
          </aside>
        </div>
      )}
    </div>
  );
}
