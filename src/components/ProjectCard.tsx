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
        <div className="space-y-4 mt-4">
          {/* Responsive YouTube video */}
          <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Skills list */}
          <ul className="pl-6 text-gray-700 text-sm space-y-1">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
)}

export default ProjectCard;