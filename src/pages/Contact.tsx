// src/pages/Contact.tsx
// Displays contact methods and personal information for hiring inquiries.

import {
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaUser,
  FaGlobe,
  FaCity,
  FaFlag,
} from "react-icons/fa";

const Contact = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-green-400">CONTACTS!</h2>
    <p className="mb-6 text-center text-lg font-medium">Contact me through these methods:</p>

    <div className="flex flex-col md:flex-row md:space-x-12">
      {/* Left column - Contact Methods */}
      <div className="flex-1 mb-8 md:mb-0">
        <h3 className="text-2xl font-semibold mb-4">Contact Methods</h3>
        <ul className="space-y-4 text-gray-800 dark:text-gray-200">
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaFacebook />
              <strong>Facebook:</strong>
              <a
                href="https://facebook.com/brianshiroe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                facebook.com/brianshiroe
              </a>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaLinkedin />
              <strong>LinkedIn:</strong>
              <a
                href="https://www.linkedin.com/in/brianshiroe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/brianshiroe
              </a>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaEnvelope />
              <strong>Email:</strong>
              <a href="mailto:brianshiroe@gmail.com" className="hover:underline">
                brianshiroe@gmail.com
              </a>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaGithub />
              <strong>GitHub:</strong>
              <a
                href="https://github.com/brianshiroe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/brianshiroe
              </a>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaGlobe />
              <strong>Itch.io:</strong>
              <a
                href="https://mun-development.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                mun-development.itch.io
              </a>
            </span>
          </li>
        </ul>
      </div>

      {/* Right column - Personal Information */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">Information</h3>
        <ul className="space-y-4 text-gray-800 dark:text-gray-200">
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaUser />
              <strong>Name:</strong>
              <span>Brian Haw</span>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaBirthdayCake />
              <strong>Birth Date:</strong>
              <span>January 17, 2002</span>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaMapMarkerAlt />
              <strong>Street:</strong>
              <span>Bonifacio Street</span>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaCity />
              <strong>City:</strong>
              <span>Olongapo City</span>
            </span>
          </li>
          <li>
            <span className="inline-flex items-center space-x-2">
              <FaFlag />
              <strong>Country:</strong>
              <span>Philippines</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Contact;
