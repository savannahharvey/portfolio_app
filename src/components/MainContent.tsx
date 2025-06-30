import { useState, useEffect } from "react";
import portfolioPic from '../images/portfolioPic.jpg';

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const MainContent = () => {
    // const [stars, setStars] = useState([])
    // const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        // generateStars();
        // generateMeteors();

        const handleResize = () => {
            // generateStars();
        };

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <section className="intro_sec">
                <div className="grid_system">
                    <div className="intro">
                        <p className="name"><span>Savannah Harvey</span></p>
                        <p className="major"><i><span>Software Engineer</span></i></p>
                        <button className="reach_out">REACH OUT</button>
                    </div>
                    <img className="main_pic" src= {portfolioPic} alt="Picture of Savannah Harvey" />
                </div>
            </section>
        </div>
    );
}