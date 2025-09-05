import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Satellite Orbit Simulator",
    description: "A real-time 3D simulator using C++ and OpenGL that models simplified satellite physics.",
    skills: [
      "Implemented orbital mechanics and real-time physics engine",
      "Used OpenGL for custom 3D rendering",
      "Learned time-step simulation and frame synchronization"
    ],
    startDate: "May 2025",
    endDate: "June 2025"
  },
  {
    name: "Rideshare App for BYU-Idaho",
    description: "A Flutter + Firebase app that connects student drivers and riders within the campus community.",
    skills: [
      "Firebase Authentication & Firestore integration",
      "Built push notifications using FCM",
      "Created dynamic UI with Flutter widgets and state management"
    ],
    startDate: "April 2025",
    endDate: "June 2025"
  },
  {
    name: "Nutritionist Web App",
    description: "A React web app that tracks calories using the FatSecret API and helps users plan meals.",
    skills: [
      "React frontend with Express backend",
      "FatSecret API integration",
      "Form validation and search functionality"
    ],
    startDate: "March 2025",
    endDate: "April 2025"
  }
];

export const ProjectSection: React.FC = () => {
  return (
    <section id="projects" className="min-h-screen py-16 px-4 sm:px-8 md:px-16 lg:px-32 overflow-y-auto justify-items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid gap-6 grid-cols-1 h-full w-1/2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};
