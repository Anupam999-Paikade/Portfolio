export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-bold text-xl tracking-tight text-gray-900">
          Anupam<span className="text-accent">.</span>
        </p>
        
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Anupam Paikade. All rights reserved.
        </p>

        <div className="text-gray-400 text-xs">
          Built with React &amp; Tailwind.
        </div>
      </div>
    </footer>
  );
}
