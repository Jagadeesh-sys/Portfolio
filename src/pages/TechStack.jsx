import React from 'react';
import {
    FaJava,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaMicrosoft,
} from 'react-icons/fa';

import {
    SiSpringboot,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiJupyter,
    SiPycharm,
    SiEclipseide,
    SiMysql,
} from 'react-icons/si';

import { TbBrandVscode } from 'react-icons/tb';

import GlowBox from '../components/GlowBox';
import SectionTitle from '../components/SectionTitle';

import '../styles/TechStack.css';

const techs = [
    {
        heading: 'Languages',
        items: [
            { title: 'Java', icon: <FaJava />, color: '#f89820' },
            { title: 'Python', icon: <FaPython />, color: '#3776ab' },
            { title: 'SQL', icon: <SiMysql />, color: '#4479A1' },
            { title: 'HTML', icon: <FaHtml5 />, color: '#e34c26' },
            { title: 'CSS', icon: <FaCss3Alt />, color: '#264de4' },
            { title: 'JavaScript', icon: <FaJs />, color: '#f0db4f' },
        ],
    },
    {
        heading: 'Frameworks & Libraries',
        items: [
            { title: 'React', icon: <FaReact />, color: '#61dbfb' },
            { title: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
            { title: 'Pandas', icon: <SiPandas />, color: '#150458' },
            { title: 'NumPy', icon: <SiNumpy />, color: '#013243' },
            { title: 'Scikit-Learn', icon: <SiScikitlearn />, color: '#f7931e' },
        ],
    },
    {
        heading: 'Tools',
        items: [
            { title: 'Git', icon: <FaGitAlt />, color: '#f1502f' },
            { title: 'VS Code', icon: <TbBrandVscode />, color: '#0078d7' },
            { title: 'PyCharm', icon: <SiPycharm />, color: '#21d789' },
            { title: 'Jupyter', icon: <SiJupyter />, color: '#f37626' },
            { title: 'Eclipse', icon: <SiEclipseide />, color: '#2c2255' },
            { title: 'Power BI', icon: <FaMicrosoft />, color: '#f2c811' },
        ],
    },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="tech-stack section">
            <div className="tech-grid">
                {techs.map((tech, index) => (
                    <div key={index} className="tech-category">
                        <h3>{tech.heading}</h3>

                        <div className="tech-row">
                            {tech.items.map((item, idx) => (
                                <GlowBox
                                    key={idx}
                                    icon={item.icon}
                                    title={item.title}
                                    color={item.color}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="tech-stack-left-column">
                <SectionTitle title="TECH" subTitle="STACK" />
            </div>
        </section>
    );
};

export default TechStack;
