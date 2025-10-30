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
  // aboutMe:
  //   "I'm a ",
  // skills: ["Spring Boot", "PyTorch", "CuPy", "Python", "Kafka", "C", "C++", "Docker", "RabbitMQ", "Redis", "Azure Blob Storage", "Postman", "Vulkan"],
  projects: [
    {
      name: "Retrieval-Augmented Generation (RAG) service",
      description:
       "A RAG service designed for efficient processing of natural language queries through queueing and dynamic batch execution. Built with FastAPI and Hugging Face Transformers, it batches incoming user requests for embedding, retrieval, and generation. The retrieved context is sent to a Large Language Model (LLM) to produce a final response. Optimizations such as autoscaling, load balancing, multithreading, and FAISS-based vector search reduce latency by over 50%, achieve near-100% success rates, and significantly improve throughput under burst and diurnal workloads.",
        link: "https://openreview.net/pdf?id=NDqo7LyrH4",
      skills: ["PyTorch", "FastAPI", "TraceStorm", "Hugging Face Transformers", "LLM", "Query Processing"],
    },
    {
      name: "GPU-Accelerated Vector Search and Clustering System",
      description:
        "Designed to process large-scale, high-dimensional datasets efficiently. Built using PyTorch-CUDA, it integrates K-Means and Approximate Nearest Neighbor (ANN) algorithms to explore the lifecycle of machine learning workflows involving massive vector data, supporting multiple distance metrics such as L2 and cosine. The system is memory-aware, it dynamically adapts to GPU capacity (up to 80%) and uses batching with CUDA streams to overlap data transfers and computation. Overall, this GPU-based system achieves up to 150× speedup over CPU implementations while maintaining strong recall and low query latency across varying distance metrics.",
      link: "https://openreview.net/pdf?id=NDqo7LyrH4",
      skills: ["GPU", "PyTorch", "CUDA", "Vector Search"],
    },
    {
      name: "Java REST Service with Docker Deployment",
      description:
        "Developed a cloud-ready RESTful microservice using Java (Spring Boot), designed to simulate real-world key–value data management and external API integration scenarios. The application implements multiple HTTP endpoints (GET, POST, DELETE) with structured JSON handling, parameter validation, and error management. The application aims to reflect secure and scalable cloud-native architecture principles and it is packaged into a Docker container to enable portable deployment across cloud environments (AWS, Azure, GCP). Robust endpoint testing is conducted using Postman to ensure production-level reliability, emphasize infrastructure automation, and ensure proper status code handling.",
      // link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["Java", "Spring Boot", "AWS", "Postman", "Cloud Architectures"],
    },
     {
      name: "Custom Network Stack (Advanced Network Programming)",
      description:
        "Designed and implemented a custom network stack in C, including ARP, ICMP, IP, and TCP layers. Built components for packet creation, routing, and buffering; implemented user-space buffer structures inspired by Linux kernel SKB. Delivered a functional client-server system capable of handling ARP resolution and TCP communication over a virtual network interface.",
      // link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["TCP", "IP", "C", "Linux" ,"ARP", "Computer Networks"],
    },
    
  ],
  experience: [
    {
      company: "Vrije Universiteit Amsterdam",
      title: "Computer Networks Teacher Assistant",
      dateRange: "2023-2024",
      bullets: [
        "Led labs on socket programming, client-server apps, TCP/IP; graded and provided feedback on assignments.",
      ],
    },
    {
      company: "Vrije Universiteit Amsterdam",
      title: "Software Engineering Processes Teacher Assistant",
      dateRange: "2024",
      bullets: [
        "Developed and assessed exercises, quizzes, and exams focused on designing maintainable, large-scale software systems.",
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
