export const siteConfig = {
  name: "Dide Poyraz",
  title: "Msc Computer Science Graduate",
  description: "Portfolio website of Dide Poyraz",
  accentColor: "#1d4ed8",
  social: {
    email: "didepyz@gmail.com",
    linkedin: "https://www.linkedin.com/in/dide-poyraz/",
    github: "https://github.com/didepoyraz",
  },
  aboutMe:
    "I'm a ",
  skills: ["Spring Boot", "PyTorch", "CuPy", "Python", "Kafka", "C", "C++", "Docker", "RabbitMQ", "Redis", "Azure Blob Storage", "Postman", "Vulkan"],
  projects: [
    {
      name: "FastAPI-based Retrieval-Augmented Generation (RAG) service",
      description:
        " with a python script to test the service with different request rates using TraceStorm including system deployment and optimization",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "GPU-Accelerated Vector Search and Clustering System",
      description:
        "Designed to process large-scale, high-dimensional datasets efficiently. Built using PyTorch-CUDA, it integrates K-Means and Approximate Nearest Neighbor (ANN) algorithms to explore the lifecycle of machine learning workflows involving massive vector data, supporting multiple distance metrics such as L2 and cosine. The system is memory-aware, it dynamically adapts to GPU capacity (up to 80%) and uses batching with CUDA streams to overlap data transfers and computation. Overall, this GPU-based system achieves up to 150× speedup over CPU implementations while maintaining strong recall and low query latency across varying distance metrics.",
      link: "https://openreview.net/pdf?id=NDqo7LyrH4",
      skills: ["GPU", "PyTorch", "CUDA", "Vector Search"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University of Edinburgh",
      degree: "Master of Science in Computer Science",
      dateRange: "2024 - 2025",
      achievements: [
        "Degree awarded with Distinction.",
        "Courses: Distributed Systems, Machine Learning Systems (GPU Programming), Applied Cloud Programming, Algorithmic Game Theory, Reinforcement Learning, and Introduction to Quantum Computing.",
      ],
    },
    {
      school: "Vrije Universiteit Amsterdam",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2021 - 2024",
      achievements: [
        "Honours Student.",
        "Member of AtLarge Research: Massivizing Computer Systems, contributing to cutting-edge research in computing scalability and efficiency.",
        "Deep Programming Minor: Advanced Network Programming, Compiler Construction, Concurrency and Multithreading, Security Programming",
      ],
    },
  ],
};
