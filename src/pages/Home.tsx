import { ThemeToggle } from "../components/ThemeToggle.tsx";
import { StarBackground } from "../components/StarBackground.tsx";
import { Navbar } from "../components/Navbar.tsx";
import { HeroSection } from "../components/HeroSection.tsx";
import { AboutSection } from "../components/AboutSection.tsx";
import { ProjectSection } from "../components/ProjectSection.tsx";
import { ExperienceSection } from "../components/ExperienceSection.tsx";
import { ContactSection } from "../components/ContactSection.tsx";
import { Contact } from "lucide-react";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
            <ContactSection />
        </main>
        
        {/* Backgound Effects */}
        <StarBackground />

        {/* Footer */}
    </div>
    );
}