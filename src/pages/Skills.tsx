// src/pages/Skills.tsx
// Skills section displaying categorized technical proficiencies.

const skills = {
  "Programming Languages": [
    "JavaScript (Intermediate)",
    "Python (Intermediate)",
    "PHP (Intermediate)",
    "C# (Intermediate)",
    "Gdscript (Intermediate)",
    "C/C++ (Beginner)",
    "Java (Beginner)",
  ],
  "Web Development": [
    "HTML5 (Intermediate)",
    "CSS3 (Intermediate)",
    "Bootstrap (Intermediate)",
    "Flask (Intermediate)",
    "React.js (Beginner)",
  ],
  "Databases": [
    "MySQL (Intermediate)",
    "SQLite (Intermediate)",
    "Firebase (Beginner)",
  ],
  "Development Tools and Platforms": [
    "Git/GitHub (Intermediate)",
    "VSCode (Intermediate)",
    "Visual Studio (Intermediate)",
    "Jira/Trello (Intermediate)",
    "LLM (Intermediate)",
    "Docker (Beginner)",
  ],
  "Machine Learning": [
    "Yolo (Intermediate)",
    "OpenCV (Intermediate)",
    "TensorFlow (Beginner)",
    "PyTorch (Beginner)",
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
