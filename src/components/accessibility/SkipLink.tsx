
import { Button } from '@/components/ui/button';

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <Button
      asChild
      className={`
        absolute -top-10 left-4 z-50 bg-[#0A3D62] text-white px-4 py-2 rounded-md
        focus:top-4 transition-all duration-200
        transform translate-y-0 focus:translate-y-0
      `}
    >
      <a href={href} className="sr-only focus:not-sr-only focus:absolute">
        {children}
      </a>
    </Button>
  );
}
