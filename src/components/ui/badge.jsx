import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "font-mono inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "border-white/15 bg-primary text-gray-400 hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-white hover:bg-destructive/80",
        outline: "text-foreground",
        hero: "gap-2 border-cyan-500/40 bg-gradient-to-r from-cyan-500/20 to-transparent px-4 py-2 font-black tracking-[0.3em] text-cyan-400",
        sectionLabel:
          "border-brand-primary/30 bg-brand-primary/5 font-bold text-brand-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({ className, variant, ...props }) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
