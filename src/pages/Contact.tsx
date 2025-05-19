const Contact = () => (
  <div className="p-6 max-w-lg mx-auto">
    <h2 className="text-4xl font-bold mb-6 text-center text-green-700 dark:text-green-400">HIRE ME!</h2>
    <p className="mb-6 text-center text-lg font-medium">
      Contact me through these methods:
    </p>

    <ul className="mb-6 list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
      <li>
        <a
          href="https://facebook.com/brianshiroe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Facebook
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/brianshiroe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </li>
    </ul>

    <h3 className="text-2xl font-semibold mb-4">Information</h3>
    <ul className="space-y-2 text-gray-800 dark:text-gray-200">
      <li><strong>Name:</strong> Brian Haw</li>
      <li><strong>Birth Date:</strong> January 17, 2002</li>
      <li>
        <strong>Email:</strong>{" "}
        <a href="mailto:brianshiroe@gmail.com" className="text-blue-600 hover:underline">
          brianshiroe@gmail.com
        </a>
      </li>
      <li>
        <strong>GitHub:</strong>{" "}
        <a
          href="https://github.com/brianshiroe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          github.com/brianshiroe
        </a>
      </li>
      <li>
        <strong>Itch.io:</strong>{" "}
        <a
          href="https://mun-development.itch.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          mun-development.itch.io
        </a>
      </li>
      <li><strong>City:</strong> Olongapo</li>
      <li><strong>Address:</strong> 23 Bonifacio St., Olongapo City, Philippines</li>
    </ul>
  </div>
);

export default Contact;
