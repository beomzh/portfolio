export type CareerEntry = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
};

// 총 경력 계산 기준일 (최초 입사일)
export const careerStartDate = "2023-03-01";

export function getTotalExperience(asOf: Date = new Date()): { years: number; months: number; label: string } {
  const start = new Date(careerStartDate);
  let years = asOf.getFullYear() - start.getFullYear();
  let months = asOf.getMonth() - start.getMonth();
  if (asOf.getDate() < start.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, label: months > 0 ? `${years}년 ${months}개월` : `${years}년` };
}

export const career: CareerEntry[] = [
  {
    company: "오픈마루㈜ · 클라우드 네이티브팀",
    role: "클라우드 아키텍트 / Pre-Sales",
    period: "2024.07 ~ 재직중",
    current: true,
    bullets: [
      "Kubernetes/OpenShift 기반 컨테이너 플랫폼과 오픈소스를 활용해 고객사 서비스를 클라우드 네이티브 환경으로 전환·구축",
      "공공·금융·에너지 분야 프로젝트 다수 수행, WEB/WAS/OS/보안/모니터링 영역 트러블슈팅 가이드 제공",
      "고객사 제안서 작성·기술 검증(PoC) 등 Pre-Sales 활동 병행",
    ],
  },
  {
    company: "㈜티사이언티픽 · 인프라기술팀(ITO운영 3팀)",
    role: "시스템 엔지니어",
    period: "2023.03 ~ 2024.07",
    current: false,
    bullets: [
      "LG U+ 상주, On-Premise WEB/WAS 및 Public·Private 클라우드 환경 운영",
      "장애 트러블슈팅 및 설정 튜닝 담당",
      "Legacy 서비스를 Kubernetes 기반 클라우드로 마이그레이션하고 자원 최적화",
    ],
  },
];
