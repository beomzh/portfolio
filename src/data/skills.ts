export type SkillCategory = {
  category: string;
  level: number;
  tags: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Container & Orchestration (OpenShift 주력)",
    level: 85,
    tags: ["OpenShift (OCP)", "OpenShift Virtualization", "OKD", "Kubernetes", "RKE2", "Rancher", "Docker", "Helm", "Operator"],
  },
  {
    category: "Middleware / WAS",
    level: 75,
    tags: ["JBoss (WildFly)", "Tomcat", "Apache HTTPD", "Nginx", "HAProxy", "Istio", "Kiali", "WAS 튜닝(스레드풀·Connector·GC·세션 클러스터링)"],
  },
  {
    category: "CI/CD · 형상관리",
    level: 65,
    tags: ["GitLab CI", "Jenkins", "Harbor", "Nexus", "GitHub Actions", "ArgoCD(학습 중)"],
  },
  {
    category: "Auth / Identity",
    level: 50,
    tags: ["Keycloak", "Google OIDC", "OAuth2-Proxy", "SSO"],
  },
  {
    category: "Cloud / AI Infra",
    level: 55,
    tags: ["AWS (EKS·EC2·ALB)", "GCP (GKE)", "NVIDIA GPU Operator", "vLLM"],
  },
  {
    category: "Monitoring / Logging",
    level: 60,
    tags: ["Fluent Bit", "ELK/EFK", "Loki Stack", "Zabbix", "APM", "Apache Benchmark(ab)"],
  },
  {
    category: "Security / Compliance",
    level: 60,
    tags: ["ISMS 감사 대응", "KISA 권고 조치", "OpenShift Compliance Operator", "grype", "syft", "Java Keystore/Truststore"],
  },
  {
    category: "Automation / IaC",
    level: 60,
    tags: ["Ansible", "Bash", "Python", "Terraform(학습 중)"],
  },
  {
    category: "OS / Network",
    level: 65,
    tags: ["RHEL 7/8/9", "SUSE Linux", "Windows Server", "TCP/IP", "L4/L7 Load Balancer"],
  },
  {
    category: "DB",
    level: 40,
    tags: ["Oracle (SQL Plan 분석 협업)", "MySQL"],
  },
];
