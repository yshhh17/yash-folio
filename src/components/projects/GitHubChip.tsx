import { Github, Lock } from "lucide-react";

interface GitHubChipProps {
  url: string;
}

/** Renders a "Code" chip linking to GitHub, or a locked "Private" chip with tooltip. */
const GitHubChip = ({ url }: GitHubChipProps) => {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5"
        title="View Code"
      >
        <Github size={15} />
        <span className="hidden sm:inline">Code</span>
      </a>
    );
  }

  return (
    <div className="relative group/tooltip">
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground/40 px-3 py-1.5 rounded-lg border border-border/40 cursor-not-allowed">
        <Lock size={15} />
        <span className="hidden sm:inline">Private</span>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-popover text-popover-foreground text-xs px-3 py-2 rounded-lg shadow-xl border border-border opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <div className="font-semibold mb-1">🔒 Private Repository</div>
        <div className="text-muted-foreground leading-relaxed">
          This repository is confidential and maintained by the owner.
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border" />
      </div>
    </div>
  );
};

export default GitHubChip;
