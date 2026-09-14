---
title: "Private Cloud 보안 감사 대응 & 결제 서비스 무중단 인증서 교체"
domain: "금융/보안"
company: "PG 연동 Private 클라우드 운영사 (사명 비공개)"
period: "2024.09 ~ 2025.02"
stack: ["OpenShift Compliance Operator", "grype", "syft", "ISMS", "Java Keystore/Truststore"]
summary: "빌드 파이프라인 보안 스캔과 Compliance Operator 기반 취약점 조치로 ISMS 감사를 대응하고, 결제 서비스 인증서를 무중단으로 교체했습니다."
highlights:
  - "빌드·배포 파이프라인에 grype·syft 기반 컨테이너 이미지 보안 스캔 단계 추가"
  - "OpenShift Compliance Operator를 활용해 KISA 권고 보안 취약점 점검·조치 (Immutable OS 환경 대응)"
  - "클러스터 구성 전수 점검 및 보안 정책 기준 취약점 도출 → ISMS 감사 대응 완료"
  - "PG 서비스 Java 인증서(Toss·카카오페이)를 keystore·truststore에 적용, WAS 재기동 절차 단계화로 결제 서비스 무중단 인증서 교체"
featured: true
order: 2
---
