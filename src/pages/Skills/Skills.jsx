import './Skills.css';
import React, { useState } from 'react';
import { Code, Database, Layers, GitBranch } from 'lucide-react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const skillsData = {
        programming: [
            { name: 'HTML', level: 90, color: '#E34F26', category: 'Bahasa Pemrograman' },
            { name: 'CSS', level: 85, color: '#1572B6', category: 'Bahasa Pemrograman' },
            { name: 'JavaScript', level: 75, color: '#F7DF1E', category: 'Bahasa Pemrograman' },
            { name: 'PHP', level: 65, color: '#777BB4', category: 'Bahasa Pemrograman' },
        ],
        database: [
            { name: 'MySQL', level: 70, color: '#4479A1', category: 'Database' },
        ],
        framework: [
            { name: 'Bootstrap', level: 80, color: '#7952B3', category: 'Framework' },
            { name: 'React', level: 75, color: '#61DAFB', category: 'Framework' },
        ],
        versionControl: [
            { name: 'Git', level: 75, color: '#F05032', category: 'Version Control' },
            { name: 'GitHub', level: 75, color: '#181717', category: 'Version Control' },
        ],
    };

    const categories = [
        { id: 'all', name: 'All Skills', icon: Layers },
        { id: 'programming', name: 'Programming', icon: Code },
        { id: 'database', name: 'Database', icon: Database },
        { id: 'framework', name: 'Framework', icon: Layers },
        { id: 'versionControl', name: 'Version Control', icon: GitBranch },
    ];

    const getAllSkills = () => {
        return [
            ...skillsData.programming,
            ...skillsData.database,
            ...skillsData.framework,
            ...skillsData.versionControl,
        ];
    };

    const getFilteredSkills = () => {
        if (activeCategory === 'all') return getAllSkills();
        return skillsData[activeCategory] || [];
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-800 mb-4">
                        Technical Skills
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Menguasai berbagai teknologi modern untuk membangun aplikasi web yang scalable, 
                        responsif, dan user-friendly
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                                    activeCategory === cat.id
                                        ? 'bg-blue-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-slate-700 hover:bg-slate-200 shadow'
                                }`}
                            >
                                <Icon size={18} />
                                {cat.name}
                            </button>
                        );
                    })}
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {getFilteredSkills().map((skill, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-slate-800">
                                    {skill.name}
                                </h3>
                                <span 
                                    className="text-sm font-semibold px-3 py-1 rounded-full"
                                    style={{ 
                                        backgroundColor: `${skill.color}20`,
                                        color: skill.color 
                                    }}
                                >
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="mb-4">
                                <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                    {skill.category}
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${skill.level}%`,
                                        backgroundColor: skill.color,
                                    }}
                                />
                            </div>

                            {/* Skill Level Text */}
                            <div className="mt-3 text-sm text-slate-600">
                                {skill.level >= 80 && '⭐ Advanced'}
                                {skill.level >= 65 && skill.level < 80 && '🚀 Intermediate'}
                                {skill.level < 65 && '💡 Developing'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Summary Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                            {skillsData.programming.length}
                        </div>
                        <div className="text-sm text-slate-600">Programming Languages</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                            {skillsData.framework.length}
                        </div>
                        <div className="text-sm text-slate-600">Frameworks</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                            {skillsData.database.length}
                        </div>
                        <div className="text-sm text-slate-600">Database</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                        <div className="text-3xl font-bold text-orange-600 mb-2">
                            {skillsData.versionControl.length}
                        </div>
                        <div className="text-sm text-slate-600">Version Control</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;