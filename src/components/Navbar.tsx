// import { cn } from "@/lib/utils";

// const navItems = [
//     {name: "Home", href: "#hero"},
//     {name: "About", href: "#about"},
//     {name: "Skills", href: "#skills"},
//     {name: "Projects", href: "#projects"},
//     {name: "Contact", href: "#contact"},
// ]

export const Navbar = () => {
    return <div>
        <div className="topnav">
            <div className="topnav_left">
                <a className="active" href="index.html">Home</a>
                <a href="#about_me">About Me</a>
                <a href="#personal_projects">Projects</a>
                <a href="#work_expereince">Experience</a>
                <a href="#certificates_acheivements">Certificates</a>
            </div>
            <div className="topnav_right">
                <a href="https://www.youtube.com/channel/UC9ANTlNBUvqEGknQaEGn6jg" target="_blank">Youtube Channel</a>
                <a href="https://www.linkedin.com/in/savannah-harvey1/" target="_blank">LinkedIn</a>
            </div>
        </div>
    </div>;
}