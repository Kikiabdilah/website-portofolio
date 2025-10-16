import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faPhp, faReact, faJs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
    const skills = [
        { icon: faHtml5, name: 'HTML5', level: 'Advanced', color: '#E34F26' },
        { icon: faCss3Alt, name: 'CSS3', level: 'Advanced', color: '#1572B6' },
        { icon: faJs, name: 'JavaScript', level: 'Intermediate', color: '#F7DF1E' },
        { icon: faReact, name: 'React.js', level: 'Intermediate', color: '#61DAFB' },
        { icon: faPhp, name: 'PHP', level: 'Beginner', color: '#777BB4' },
    ];


    return (
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <FontAwesomeIcon
                            icon={skill.icon}
                            className="skill-icon"
                            style={{ color: skill.defaultColor }}
                            onMouseEnter={(e) => e.target.style.color = skill.color}
                            onMouseLeave={(e) => e.target.style.color = '#333'}
                        />
                        <h3>{skill.name}</h3>
                        <p>{skill.level}</p>
                    </div>
                ))}


            </div>
        </div>
    );
};

export default Skills;
