import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-[var(--hilldave-light-gray)]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-24 md:h-28">
          <Link href="/">
            <img 
              src="/logo.jpeg" 
              alt="HillDave" 
              className="h-20 md:h-24 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
          
          <a 
            href="mailto:hello@hilldave.com"
            className="text-xs md:text-sm font-semibold tracking-widest uppercase hover:text-[var(--hilldave-orange)] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

