'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contacts() {
  return (
    <div className="flex flex-col gap-4 text-slate-300 gap-x-6 text-md">
      <div className="flex items-center gap-2 flex-row">
        <FontAwesomeIcon icon={faEnvelope} className='max-w-4'/>
        <a href="mailto:rishabkarki78@gmail.com" className="hover:text-teal-500">
          rishabkarki78@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-2 flex-row">
        <FontAwesomeIcon icon={faLinkedin} className='max-w-4'/>
        <a href="https://www.linkedin.com/in/rishab-karki-a2b139329/" target="_blank" className="hover:text-teal-500">
          rishab-karki-a2b139329  
        </a>
      </div>
      <div className="flex items-center gap-2 flex-row">
        <FontAwesomeIcon icon={faInstagram} className='max-w-4'/>
        <a href="https://www.instagram.com/__rishhhabbk/" target="_blank" className="hover:text-teal-500">
          __rishhhabbk 
        </a>
      </div>
    </div>
  );
}
