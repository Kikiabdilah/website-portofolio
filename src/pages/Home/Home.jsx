import './Home.css'

const Home = () => {
    return (
        <>
            <div className='main-container'>

                <section id="hero">
                    <div className="hero-left">
                        <h3 className="pre-title">My Name Is</h3>
                        <h1 className="hero-name">Muhamad Rizky <span>Abdilah</span></h1>
                        {/* <p>My Portofolio Website</p> */}
                        <img src="/src/assets/img/hero1.jpeg" alt="Hero" />
                    </div>
                    <div className="hero-right">
                        <div className="box">
                            <h3>Basic Skills</h3>
                            <p>
                                A full knowledge of HTML/CSS and Javascript. I make responsive
                                applications with any CSS Framework and interactive UIs with React.
                            </p>
                        </div>
                        <div className="box">
                            <h3>Slicing Design</h3>
                            <p>
                                I have the ability to slice up a UI/UX design into a clean, easy-to-use
                                and maintainable set of code.
                            </p>
                        </div>
                        <div className="box">
                            <h3>Developer Skills</h3>
                            <p>
                                I have sufficient knowledge to build infrastructure, framework/boilerplate,
                                good state management, reusable components, very useful open source libraries
                                and much more for React Projects.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home