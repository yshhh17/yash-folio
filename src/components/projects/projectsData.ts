import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "GeoDermal Assistant",
    description:
      "Built a travel wellness platform covering 30+ cities using FastAPI and React; implemented secure authentication, rate limiting (10 req/hr), and real-time user session management. Integrated Groq LLM with 3 real-time APIs for 6-factor health risk assessment; designed optimized and indexed PostgreSQL schemas for efficient query performance.",
    image: "/geodermal.png",
    techStack: ["FastAPI", "React", "PostgreSQL", "Docker", "Groq LLM", "Nominatim API"],
    githubUrl: "https://github.com/yshhh17/GeoDermal_Assistant",
    liveUrl: "https://geo-dermal-assistant.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "GiveHub",
    description:
      "Developed a full-stack donation platform integrating PayPal REST APIs with webhook-based payment verification and email verification. Implemented JWT authentication, Redis-based OTP flow, and 8+ REST endpoints. Containerized services using Docker with rate limiting and automated transactional emails via SMTP.",
    image: "/Givehub.png",
    techStack: ["React (Redux)", "FastAPI", "Redis", "PayPal Webhooks", "Docker"],
    githubUrl: "https://github.com/yshhh17/GiveHub",
    liveUrl: "https://give-hub-inky.vercel.app/",
  },
  {
    id: 3,
    title: "Bucketlst.io",
    description:
      "AI-driven travel planning platform that helps users create personalized itineraries and discover destinations based on their interests and budget. Contributed to building scalable features that power itinerary generation and user experience.",
    image: "/bucketlst.png",
    techStack: ["Next.js", "TypeScript", "Google Cloud", "Supabase", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "https://bucketlst.io/",
  },
];

export const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" as const },
  }),
};
