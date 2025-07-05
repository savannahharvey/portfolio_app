import portfolioPic from '../images/portfolioPic.jpg';

export const MainContent = () => {
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