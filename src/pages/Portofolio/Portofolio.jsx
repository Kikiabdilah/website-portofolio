import { useState } from 'react';
import './Portofolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { hasilProyek } from './data';
import { Link } from 'react-router';

const Portofolio = () => {
    const [selectedProject, setSelectedProject] = useState(null); // Menyimpan data proyek
    const [isModalOpen, setIsModalOpen] = useState(false); // Menyimpan status modal

    const openModal = (proyek) => {
        setSelectedProject(proyek); // Atur proyek yang dipilih
        setIsModalOpen(true); // Tampilkan modal
    };

    const closeModal = () => {
        setSelectedProject(null); // Reset data proyek
        setIsModalOpen(false); // Sembunyikan modal
    };

    return (
        <>
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
                                <Link to={selectedProject.link} target="_blank" rel="noopener noreferrer">
                                    <button className='btn'>
                                        <FontAwesomeIcon icon={faLink} />
                                    </button>
                                </Link>
                                <Link to={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                    <button className='btn'>
                                        <FontAwesomeIcon icon={faGithub} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Portofolio;

