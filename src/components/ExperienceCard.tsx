import { useState } from "react"


interface ExperienceCardItems {
  name: string;
  skills: string[];
  startDate: string;
  endDate: string;
}

const ExperienceCard: React.FC<ExperienceCardItems> = ({
    name, skills, startDate, endDate,
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
      {expanded && (
        <div className="space-y-4 mt-4">
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

export default ExperienceCard;