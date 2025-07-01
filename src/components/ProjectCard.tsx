import { useState } from "react"


interface ProjectCardItems {
  name: string;
  description: string;
  skills: string[];
  startDate: string;
  endDate: string;
}

const ProjectCard: React.FC<ProjectCardItems> = ({
    name, description, skills, startDate, endDate,
    }) => {
    const [expanded, setExpanded] = useState(false);

    return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={`cursor-pointer p-6 rounded-2xl shadow-md transition-all duration-300 border ${
        expanded ? "bg-blue-100 scale-105 border-blue-400" : "bg-white hover:bg-gray-100"
      }`} >
        <h3 className="text-xl font-semibold text-blue-800">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">
        {startDate} – {endDate}
      </p>
      <p className="text-gray-700 mb-2">{description}</p>
      {expanded && (
        <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}

    </div>
)}

export default ProjectCard;