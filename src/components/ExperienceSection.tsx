import React from "react";
import ExperienceCard from "./ExperienceCard";

// Example job data
const jobs = [
  {
    name: "Student Event Coordinator - Brigham Young University-Idaho",
    skills: [
      "Coordinated and executed over 150 campus-wide events, ensuring all logistical needs were met, including venue setup, equipment, and staffing",
      "Resolved on-site issues efficiently, ensuring smooth event operation and customer satisfaction, resulting in consistent 4.8/5 stars or greater weekly reviews."
    ],
    startDate: "February 2024",
    endDate: "June 2024"
  },
  {
    name: "Volunteer Representative - The Church of Jesus Christ of Latter-day Saints",
    skills: [
      "Conducted regular home visits with a companion missionary, organized community events, and facilitated religious discussions in over 5 communities.",
      "Served in multiple mission leadership councils as a Sister Training Leader, contributing to strategic planning and decision-making for mission area over 3, 6 week periods."
    ],
    startDate: "December 2021",
    endDate: "June 2023"
  },
  {
    name: "Teaching Assistant - Brigham Young University-Idaho",
    skills: [
      "Diagnosed and resolved hardware/software issues",
      "Maintained campus computer labs and networks",
      "Trained new staff on troubleshooting best practices"
    ],
    startDate: "January 2025",
    endDate: "July 2025"
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-32 overflow-y-auto justify-items-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
      <div className="grid gap-6 grid-cols-1 h-full w-2/3">
        {jobs.map((job, idx) => (
          <ExperienceCard key={idx} {...job} />
        ))}
      </div>
    </section>
  );
};
