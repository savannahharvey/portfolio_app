import portfolioPic from '../images/portfolioPic.jpg';

export const HeroSection = () => {
    return <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6">
        <div className="container max-w-85rem mx-auto text-center z-10">
            <section className="intro_sec">
                <div className="grid_system">
                    <div className="intro">
                        <p className="name opacity-0 animate-fade-in"><span>Savannah Harvey</span></p>
                        <p className="major opacity-0 animate-fade-in-delay-1"><i><span>Software Engineer</span></i></p>
                        {/* <button className="reach_out opacity-0 animate-fade-in-delay-1">REACH OUT</button> */}
                    </div>
                    <img className="main_pic opacity-0 animate-fade-in-delay-2" src= {portfolioPic} alt="Picture of Savannah Harvey" />
                </div>
            </section>
        </div>
    </section>
}