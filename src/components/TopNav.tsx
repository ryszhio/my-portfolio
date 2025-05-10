export default function TopNav() {
  return (
    <div>
        <div className="absolute top-4 left-4 z-50 font-bold text-3xl select-none">
            ryszh<span className="text-teal-300">io</span>.
        </div>
        <div className="absolute top-4 right-4 z-50 backdrop-blur-md bg-blue-300/20 rounded-full px-3 sm:px-6 py-2 text-teal-400 shadow-lg border border-blue-300/20 space-x-0.5 md:space-x-2 sm:space-x-1 text-xs sm:text-sm">
          <a href="https://github.com/ryszhio" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com/in/rishab-karki-a2b139329/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <span>/</span>
          <a href="/resume.pdf" target="_blank" className="hover:underline">
            Resume
          </a>
        </div>
    </div>
  )
}