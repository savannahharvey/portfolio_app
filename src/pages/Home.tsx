import { ThemeToggle } from "../components/ThemeToggle.tsx";
import { StarBackground } from "../components/StarBackground.tsx";
import { Navbar } from "../components/Navbar.tsx";
import { HeroSection } from "../components/HeroSection.tsx";
import { AboutSection } from "../components/AboutSection.tsx";
import { ProjectSection } from "../components/ProjectSection.tsx";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Backgound Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
                        
            <ProjectSection />
            
        </main>

        {/* Footer */}
    </div>
    );
}