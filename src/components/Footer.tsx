import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-black w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 font-body text-sm uppercase tracking-widest">
      <div className="text-lg font-headline font-bold text-white">
        The Human Health Platform
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="/privacy" className="text-slate-400 hover:text-primary transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="text-slate-400 hover:text-primary transition-colors">Terms of Service</Link>
        <Link to="/regulatory" className="text-slate-400 hover:text-primary transition-colors">Regulatory Disclosures</Link>
        <Link to="#" className="text-slate-400 hover:text-primary transition-colors">Investor Login</Link>
      </div>
      <div className="text-slate-400 text-center md:text-right max-w-md normal-case leading-relaxed">
        © 2026 The Human Health Platform. All Rights Reserved. Clinical Precision. Financial Authority.
      </div>
    </footer>
  );
}
