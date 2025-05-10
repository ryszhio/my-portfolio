'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
  <footer className="flex flex-row-reverse bg-slate-100 items-center justify-center text-black p-10 rounded-md">
    <div className="flex flex-col items-center justify-center w-sm">
      <p className="font-bold">&copy; Rishab Karki - <span className="font-extralight">{new Date().getFullYear()}</span></p>
      <div className="flex gap-4 gap-x-6 py-2">
        <a href="mailto:rishabkarki78@gmail.com" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/ryszhio" target="_blank" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/rishab-karki-a2b139329/" target="_blank" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/__rishhhabbk/" target="_blank" className="hover:text-orange-500">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>
        Made with ♥️ by Rishab Karki
      </p>
    </div>
  </footer>
  );
}
