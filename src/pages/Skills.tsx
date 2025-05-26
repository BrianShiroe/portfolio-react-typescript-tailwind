// src/pages/Skills.tsx
// Skills section displaying categorized technical proficiencies.

const skills = {
  "Programming Languages": [
    "Python (Intermediate)",
    "JavaScript (Intermediate)",
    "Typescript (Intermediate)",
    "PHP (Intermediate)",
    "Gdscript (Intermediate)",
    "C# (Beginner)",
    "C/C++ (Beginner)",
    "Java (Beginner)",
  ],
  "Web Development": [
    "HTML5 (Intermediate)",
    "CSS3 (Intermediate)",
    "Bootstrap (Intermediate)",
    "Flask (Intermediate)",
    "Next.js (Beginner)",
    "React.js (Beginner)",
    "Tailwind CSS (Beginner)",
  ],
  "Databases": [
    "MySQL (Beginner)",
    "SQLite (Beginner)",
    "Firebase (Beginner)",
  ],
  "Development Tools and Platforms": [
    "VS/VSCode (Intermediate)",
    "LLM (Intermediate)",
    "GitHub (Intermediate)",
    "Git (Beginner)",
    "Jira/Trello (Beginner)",
    "MySql Workbench (beginner)",
    "Docker (Beginner)",
  ],
  "Machine Learning": [
    "Yolo (Intermediate)",
    "OpenCV (Intermediate)",
    "TensorFlow (Beginner)",
    "PyTorch (Beginner)",
  ],

  "Deployment and Hosting Platform": [
    "Netlify (Beginner)",
    "Railway (Beginner)",
  ],
};

const Skills = () => (
  <div className="p-6 max-w-6xl mx-auto">
    <h1 className="text-4xl font-bold mb-10 text-center">Skills & Tools</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(skills).map(([category, items]) => (
        <section key={category} className="p-5 bg-gray-100 rounded-lg dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">{category}</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  </div>
);

export default Skills;
