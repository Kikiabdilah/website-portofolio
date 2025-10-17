import { useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight, faLink } from '@fortawesome/free-solid-svg-icons'
import { hasilProyek } from '../Portofolio/data'
import { Link } from 'react-router-dom'

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = (proyek) => {
        setSelectedProject(proyek)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setSelectedProject(null)
        setIsModalOpen(false)
    }

    return (
        <>
            <div className='main-container'>

                <section id="hero">
                    <div className="hero-left">
                        <h3 className="pre-title">My Name Is</h3>
                        <h1 className="hero-name">Muhamad Rizky <span>Abdilah</span></h1>
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

            {/* Portofolio section (dipindahkan dari Portofolio.jsx) */}
            <section id="portofolio">
                <div className="Portofolio">
                    <div className="portofolio-container">
                        {hasilProyek.map((proyek) => (
                            <div className="portofolio-cover" key={proyek.id}>
                                <img src={proyek.image} alt={`Proyek ${proyek.id}`} />
                                <div className="portofolio-info">
                                    <h4>{proyek.title}</h4>
                                    <button className="btn" onClick={() => openModal(proyek)}>
                                        <FontAwesomeIcon icon={faArrowAltCircleRight} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {isModalOpen && selectedProject && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-content-left">
                                <button className="modal-close" onClick={closeModal}>×</button>
                                <img src={selectedProject.image} alt={`Proyek ${selectedProject.id}`} />
                                <h4>{selectedProject.title}</h4>
                            </div>
                            <div className="modal-content-right">
                                <p>{selectedProject.deskripsi}</p>
                                <h3>
                                    Teknologi yang digunakan:  <span>
                                        {selectedProject.bahasa}
                                    </span>
                                </h3>
                                <div className="button-container">
                                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                        <button className='btn'>
                                            <FontAwesomeIcon icon={faLink} />
                                        </button>
                                    </a>
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                        <button className='btn'>
                                            <FontAwesomeIcon icon={faGithub} />
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default Home