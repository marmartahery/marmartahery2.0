import React, { useState } from 'react';
import './App.css';
import togetherCA from './assets/togetherca.png';
import phf from './assets/pethelpfinder.png';
import ocnav from './assets/ocnav.png';
import headshot from './assets/headshot.png';

function Home() {
    const [selectedSkill, setSelectedSkill] = useState(null);

    const skills = [
        {
            title: "Front End",
            details: "HTML, CSS, JavaScript, responsive layouts, React, and Firebase."
        },
        {
            title: "Software & Data",
            details: "SQL, C, C++, and C# with strong troubleshooting and debugging experience."
        },
        {
            title: "Tools",
            details: "Git, Jira, Adobe Creative Suite, and Figma."
        },
        {
            title: "Professional",
            details: "Cross-functional collaboration, leadership, mentorship, and customer support."
        }
    ];
    return (
        <main>
            {/* SECTION 1 */}
            <div className="home-container">
                <div className="home-text">
                    <p className="prof-tag">SOFTWARE ENGINEER • WEB DEVELOPER </p>
                    <h1>Hey there, I'm MarMar!</h1>
                    <h3>I solve technical problems and build thoughtful digital experiences.</h3>
                    <p className="home-summary">With experience spanning healthcare systems engineering, cloud migration initiatives, deployment testing, and web development, I focus on creating scalable solutions that prioritize reliability, usability, and real-world impact.</p>
                </div>
            </div>

            {/* ABOUT */}
            <div id="about">
                <h2>About</h2>
                <div>
                    MarMar joined Abbott in 2024 as an Associate Systems Engineer in RCPE. She has helped resolve multiple field complaints while mitigating ongoing production issues and streamlining upcoming projects simultaneously. She works across multiple departments to ensure that customers and patients are giving and receiving appropriate and necessary healthcare at all times while ensuring any and all new products entering production are satisfactory on all aspects. She has helped improve Tiger Ticket SLAs, mentored and trained new RCPE hires, met all MCR completion deadlines, and has lead the ongoing EU migration efforts for RCPE.
                    Prior to joining Abbott, MarMar was a website developer who specialized in creating resources for both adolescents and adults struggling with an array of hardships throughout Los Angeles County and Orange County. Ranging from foster care, domestic violence, mental health, and drug/alcohol abuse, MarMar would create and develop websites holding valuable resources and aids for individuals experiencing these hardships. She ensures that her products are not only working properly on a technical level but also on a personal level. By conducting market research and collecting analytics on those who utilize the city-funded sites, she adjusts the resources to fit the needs of all who find themselves requesting extra assistance.
                    MarMar attended California State University, Northridge and holds a Bachelor's of Science in Computer Science as well as a minor in Computational Mathematics. She enjoys building Legos, knitting sweaters for her cats, streaming videogames on Twitch, and rewatching the entire Harry Potter series to no end.
                </div>
            </div>
            <div className="space-40"></div>
            {/* EXPERIENCE */}
            <div id="experience">
                <h2>Experience</h2>
                <div className="exp-container">
                    <h3>Abbott Laboratories</h3>
                    <h4>Product Support Engineer II – August 2025 - Present</h4>
                    <h4>Associate Systems Engineer – March 2024 - August 2025</h4>
                    <p>
                        <ul>

                            <li>
                                Provide Tier II support for implantable devices, transmitters, and web/mobile applications; investigating issues and analyzing logs to identify root causes and ensure uninterrupted patient care
                            </li>
                            <li>
                                Prepare and execute deployment and regression testing across environments; document, investigate, and validate software defects identified in the field or internally
                            </li>
                            <li>
                                Lead of the current EU Cloud migration initiative, overseeing testing in various environments, coordinating cross-functional teams, managing clinic communications, and driving execution across multiple migration waves
                            </li>
                            <li>
                                Serve as Hypercare lead during active migrations, resolving live issues and managing team response to ensure timely resolutions
                            </li>
                            <li>
                                Write and analyze SQL queries to support investigations, assess field impact and scope, and fulfill data requests across multiple teams
                            </li>
                            <li>
                                Develop and deliver new hire training programs while acting as a key technical resource for various teams, providing guidance on troubleshooting, workflows, and cross-functional collaboration
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="exp-container">
                    <h3>Chores Innovations</h3>
                    <h4>Solutions Architect II – July 2022 - November 2023</h4>
                    <p>
                        <ul>
                            <li>
                                Designed and developed responsive web and mobile applications, translating client requirements into system designs, wireframes, and functional solutions
                            </li>
                            <li>
                                Collaborated cross-functionally with QA, Product, and UI/UX teams while communicating technical concepts to non-technical stakeholders and managing client relationships
                            </li>
                            <li>
                                Applied knowledge of HIPAA/IRB compliance, research methodologies, and biostatistics to support data-driven development and innovation
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="exp-container">
                    <h3>GameStar+</h3>
                    <h4>QA Contract Engineer – December 2021 - November 2023</h4>
                    <p>
                        <ul>
                            <li>
                                Conducted black box testing using systematic methodologies, leveraging browser developer tools for debugging and documenting defects in Jira
                            </li>
                        </ul>
                    </p>
                </div>
                <div className="exp-container">
                    <h3>Wells Fargo Bank</h3>
                    <h4>Operations Supervisor – November 2015 - February 2022</h4>
                    <p>
                        <ul>
                            <li>
                                Delivered excellent customer service across all interactions, resolving customer concerns and complaints efficiently
                            </li>
                            <li>
                                Ensured accurate transaction processing while following procedures to minimize errors and reduce fraud risk
                            </li>
                            <li>
                                Supported team workflow by assisting tellers and ensuring transactions were completed correctly
                            </li>
                            <li>
                                Participated in and led team meetings to share ideas and improve overall customer experience
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="space-40"></div>
            {/* SKILLS */}
            <div id="skills">
                <h2>Skills</h2>
                <div className="skill-container">
                    {skills.map((skill) => (
                        <div
                            className={`skill-card ${selectedSkill?.title === skill.title ? "flipped" : ""}`}
                            key={skill.title}
                            onClick={() =>
                                setSelectedSkill(selectedSkill?.title === skill.title ? null : skill)
                            }
                        >
                            <div className="skill-card-inner">
                                <div className="skill-card-front">
                                    <h3>{skill.title}</h3>
                                </div>

                                <div className="skill-card-back">
                                    <h3>{skill.title}</h3>
                                    <p>{skill.details}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-40"></div>

            {/* PROJECTS */}
            <div id="projects">
                <h2>Projects</h2>
                <div className="proj-container">
                    <div className="proj-card">
                        <h3>PetHelpFinder</h3>
                        <h4><a href="https://www.pethelpfinder.org/m/phf" target="_blank">PetHelpFinder.org</a></h4>
                        <p>
                            Pet Help Finder is a resource-based web platform designed to connect pet owners with affordable and accessible pet care services across the United States. The site provides users with an easy-to-navigate directory of low-cost veterinary clinics, emergency assistance, pet food support, temporary boarding, spay and neuter programs, and financial aid resources. Built with accessibility and usability in mind, the platform helps individuals and families quickly locate essential pet care services during times of financial hardship or emergency.
                        </p>
                        <p>
                            PetHelpFinder was launched by the Open Door Veterinary Collective, a nonprofit 501(c)(3) organization. PetHelpFinder serves as a national database that promotes financially friendly pet services and resources while connecting pet families and social service agencies with the support they need.
                        </p>
                    </div>
                    <div className="proj-pic">
                        <img
                            src={phf}
                            alt="PetHelpFinder project preview"></img>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-card">
                        <h3>Together for Wellness</h3>
                        <h4><a href="https://www.togetherca.org/m/tfw-2/56" target="_blank">TogetherCA.org</a></h4>
                        <p>
                            Together for Wellness is a digital resource platform that connects individuals and communities with accessible mental health and wellness support tools, including apps, websites, videos, articles, and other helpful resources. Built to support emotional wellbeing and improve access to care, the platform helps users quickly find reliable mental health resources tailored to a variety of needs.
                        </p>
                        <p>
                            Together for Wellness is a collaborative group of partners across California representing mental health services, nonprofits, academic institutions, and community leaders working together to improve mental health and wellbeing through accessible digital support resources.
                        </p>
                    </div>
                    <div className="proj-pic">
                        <img
                            src={togetherCA}
                            alt="Together for Wellness project preview"></img>
                    </div>
                </div>
                <div className="proj-container">
                    <div className="proj-card">
                        <h3>OC Navigator</h3>
                        <h4><a href="https://ocnavigator.org/m/ocn" target="_blank">OCNavigator.org</a></h4>
                        <p>
                            OC Navigator is a community resource platform designed to connect individuals and families throughout Orange County with accessible health, wellness, housing, and social support services. The website serves as a centralized hub where users can discover local programs, community resources, and digital tools related to mental health, healthcare, food assistance, crisis support, and overall wellbeing.
                        </p>
                        <p>
                            Built with accessibility and ease of navigation in mind, the platform helps users quickly locate reliable support services while promoting stronger connections between community organizations and the individuals they serve.
                        </p>
                    </div>
                    <div className="proj-pic">
                        <img
                            src={ocnav}
                            alt="OC Navigator project preview"></img>
                    </div>
                </div>
            </div>
            {/* CONTACT */}
            <div id="contact">
                <h2>Contact</h2>
                <div className="contact-container">
                    <div className="contact-text">
                        <h3>MarMar Tahery</h3>
                        <p>
                            Email: mtahery20@hotmail.com
                        </p>
                        <p>
                            <a href="https://github.com/marmartahery">Github</a>
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/marmar-tahery/">LinkedIn</a>
                        </p>
                        <p>
                            <a href="/MarMarTahery_Resume2026.pdf" download className="download-link">
                                Download Resume
                            </a>
                        </p>
                    </div>
                    <div className="contact-pic">
                        <img
                            src={headshot}
                            alt="Headshot Picture"></img>
                    </div>
                </div>
            </div>


        </main>
    );
}

export default Home;
