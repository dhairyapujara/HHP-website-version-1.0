import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md font-headline font-semibold tracking-tight w-full top-0 sticky z-50 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 dark:text-slate-50">
          The Human Health Platform
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`transition-colors ${isActive('/') ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-primary'}`}>The Why</Link>
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Venture Capital</Link>
          <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Venture Advisory</Link>
          <Link to="/insights" className={`transition-colors ${isActive('/insights') ? 'text-primary border-b-2 border-primary pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-primary'}`}>Insights</Link>
        </div>
        <a href="mailto:dhairya@y-center.org,sippolito@veritusholdings.com" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-headline text-sm tracking-wide hover:bg-primary-container transition-all scale-95 active:opacity-80">
          Contact Us
        </a>
      </div>
    </nav>
  );
}
