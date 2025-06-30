import { ThemeToggle } from "../components/ThemeToggle.tsx";
import { StarBackground } from "../components/StarBackground.tsx";
// import { Navbar } from "../components/Navbar.jsx";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Backgound Effects */}
        <StarBackground />

        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Main Content */}


        {/* Footer */}
    </div>
    );
}