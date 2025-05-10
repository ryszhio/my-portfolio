import Footer from "../components/Footer";
import Contacts from "../components/Contacts";

export default function Home() {
  return (
    <div>
      <div className="min-h-240 md:min-h-270 sm:min-h-250 flex-grow flex items-center justify-center">
        <div className="absolute left-9">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
            <h1 className="py-3">Hi, I&apos;m Rishab Karki</h1>
            <span className="text-teal-300">A Software Developer</span>
          </div>
          <div className="text-gray-50 py-9 max-w-xs md:max-w-2xl sm:max-w-xs">
            <p className="text-left md:text-justify">
              Computer Science student with practical experience in backend development, frontend development,
              system administration, and server deployment. Passionate about building reliable Software with <strong>Go, TypeScript, JavaScript, Rust and Java</strong>.
              My diverse experience with different technologies and programming paradigms enables me to confidently deliver results alinged with your goal.
            </p>
          </div>
          <h1 className="text-xl font-bold text-indigo-400 py-5">Contact Me:</h1>
          <Contacts/>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
