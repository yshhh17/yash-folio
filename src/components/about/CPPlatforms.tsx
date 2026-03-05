import { motion } from "framer-motion";
import { containerVariants, scaleIn } from "./aboutVariants";

interface Platform {
  name: string;
  handle: string;
  url: string;
  stat: string;
  statLabel: string;
  color: string;
  icon: React.ReactNode;
}

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.045l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
);

const CodeforcesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5V19.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V4.5C9 3.672 9.672 3 10.5 3h3zm9 7.5c.828 0 1.5.672 1.5 1.5v9c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
  </svg>
);

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24C10.715 24 2.25 19.114 1.608 18 .963 16.886.963 7.116 1.608 6 2.253 4.886 10.715 0 12 0zm2.205 6.015h-1.938a.252.252 0 0 0-.252.252v.782h-.03l-1.929-9.134h-.03v-.78H8.088a.252.252 0 0 0-.252.252v11.466c0 .139.113.252.252.252h1.938a.252.252 0 0 0 .252-.252v-.782h.03l1.929 9.134h-.03v.78h1.938a.252.252 0 0 0 .252-.252V6.266a.252.252 0 0 0-.192-.252z" />
  </svg>
);

const platforms: Platform[] = [
  {
    name: "LeetCode",
    handle: "yshhh",
    url: "https://leetcode.com/u/yshhh/",
    stat: "150+",
    statLabel: "Problems · Rating 1456",
    color: "text-orange-400",
    icon: <LeetCodeIcon />,
  },
  {
    name: "Codeforces",
    handle: "q_0",
    url: "https://codeforces.com/profile/q_0",
    stat: "961",
    statLabel: "Rating · Newbie → Pupil path",
    color: "text-blue-400",
    icon: <CodeforcesIcon />,
  },
  {
    name: "HackerRank",
    handle: "yshhh",
    url: "https://www.hackerrank.com/yshhh",
    stat: "⭐⭐⭐",
    statLabel: "Algorithmic challenges",
    color: "text-green-400",
    icon: <HackerRankIcon />,
  },
];

const CPPlatforms = () => (
  <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
      Competitive Programming
    </p>
    <div className="space-y-2">
      {platforms.map((p) => (
        <motion.a
          key={p.name}
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={scaleIn}
          whileHover={{ x: 6, scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-between gap-4 p-3 rounded-xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:bg-card/70 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <span className={`${p.color} transition-transform group-hover:scale-110`}>
              {p.icon}
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">{p.name}</p>
              <p className="text-xs text-muted-foreground mt-0.5">@{p.handle}</p>
            </div>
          </div>
          <div className="text-right shrink-0">
            <p className={`text-sm font-bold ${p.color}`}>{p.stat}</p>
            <p className="text-[10px] text-muted-foreground leading-snug max-w-[110px] text-right">
              {p.statLabel}
            </p>
          </div>
        </motion.a>
      ))}
    </div>
  </motion.div>
);

export default CPPlatforms;
