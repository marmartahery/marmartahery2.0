import React, { useState } from 'react';
import './App.css';
import {
    togetherCA, phf, ocnav, headshot, github, linkedin, twitch, clip, ar, c, css, csharp, cpp, canva, confluence, figma, ithubskills, html, java, jira, js, microsoft, mysql, ysqlfull, nodejs, php, ps, react,
    aar,
    mysqlfull,
    githubskills
} from './Assets';

function Home() {
    return (
        <main className="split">
            <div className="left-sidebar">
                {/* CONTACT */}
                <div id="contact">
                    <div className="contact-container">
                        <div className="contact-pic">
                            <img
                                src={headshot}
                                alt="Headshot Picture"></img>
                        </div>
                        <div className="contact-text">
                            <h2>MarMar Tahery</h2>
                            <p className="prof-tag">Software Engineer • Web Developer</p>
                            <h4>Building thoughtful digital experiences and solving technical problems</h4>
                            <div className="contact-links">
                                <a href="#about" className="nav-link">About</a>
                                <a href="#experience" className="nav-link">Experience</a>
                                <a href="#skills" className="nav-link">Skills</a>
                                <a href="#projects" className="nav-link">Projects</a>
                                <a href="#contact" className="nav-link">Contact</a>
                            </div>
                            <div className='contact-buttons'>
                                <a href="https://www.linkedin.com/in/marmar-tahery" target="_blank">
                                    <img src={linkedin}></img>
                                </a>
                                <a href="https://github.com/marmartahery" target="_blank"> <img src={github}></img>
                                </a>
                                <a href="https://www.twitch.tv/marmargaritaa" target="_blank"> <img src={twitch}></img>
                                </a>
                                <a href="/MarMarTahery_Resume2026.pdf"> <img src={clip}></img>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="right-sidebar">
                {/* ABOUT */}
                <div id="about">
                    <h2>About</h2>
                    <div>
                        Hey there! Welcome to my online portfolio! Here you will get the opportunity to learn about who I am, what I have accomplished, and my attained skills.
                        <br></br><br></br>
                        I am a software engineer and web developer residing in Los Angeles, CA. I specialize in building web applications and sites with both front and back end functionality, efficiently maintain and troubleshoot various system, software, hardware, and applications, and enjoy assisting in web page styling while keeping UX/UI as the main priority.
                    </div>
                </div>
                <div className="fade-line"></div>
                {/* EXPERIENCE */}
                <div id="experience">
                    <h2>Experience</h2>
                    <div className="exp-container">
                        <h3>Abbott Laboratories</h3>
                        <h4>Product Support Engineer II – August 2025 - Present</h4>
                        <h4>Associate Systems Engineer – March 2024 - August 2025</h4>
                        <p>
                            I provide technical support for implantable cardiac devices, patient transmitters, and related web and mobile applications, helping investigate complex issues and ensure reliable patient care. My work includes deployment and regression testing, software investigations, and supporting large-scale cloud migration initiatives across international teams and clinics.
                            <br></br><br></br>
                            Alongside my engineering responsibilities, I help lead active migration support efforts, analyze data using SQL, and serve as a technical resource for cross-functional teams. I also develop and lead training programs for new hires, combining technical problem-solving with collaboration, mentorship, and user-focused thinking.
                        </p>
                    </div>
                    <div className="exp-container">
                        <h3>Chores Innovations</h3>
                        <h4>Solutions Architect II – July 2022 - November 2023</h4>
                        <p>
                            I designed and developed responsive web and mobile applications, turning client ideas and requirements into functional, user-friendly digital solutions. My work involved collaborating closely with QA, Product, and UI/UX teams while also communicating technical concepts to clients and non-technical stakeholders in a clear and approachable way.
                            <br></br><br></br>
                            I also worked within HIPAA and IRB guidelines, applying research and data-driven practices to support thoughtful development, usability, and innovation.
                        </p>
                    </div>
                    <div className="exp-container">
                        <h3>GameStar+</h3>
                        <h4>QA Contract Engineer – December 2021 - November 2023</h4>
                        <p>
                            I conducted black box testing for web applications using structured testing methodologies to identify bugs, usability issues, and unexpected behavior. My work included debugging with browser developer tools and documenting defects in Jira to support efficient resolution and collaboration across development teams.
                        </p>
                    </div>
                    <div className="exp-container">
                        <h3>California State University, Northridge</h3>
                        <h4>Bachelor's of Science in Computer Science, Minor in Computational Mathematics – May 2022</h4>
                    </div>
                    <div className="exp-container">
                        <h3>Wells Fargo Bank</h3>
                        <h4>Operations Supervisor – November 2015 - February 2022</h4>
                        <p>
                            I provided customer support across a wide range of interactions, helping resolve concerns and complaints efficiently while maintaining a positive and professional experience. My responsibilities included processing transactions accurately, following established procedures to minimize errors and reduce fraud risk, and assisting team members to help ensure daily operations ran smoothly.
                            <br></br><br></br>
                            In addition to supporting workflow and customer relations, I regularly participated in and led team meetings focused on improving processes, strengthening collaboration, and finding new ways to enhance the overall customer experience.
                        </p>
                    </div>

                </div>
                <div className="fade-line"></div>
                {/* SKILLS */}
                <div id="skills">
                    <h2>Skills</h2>
                    <div className="skill-container">
                        <div className="skill-card">
                            <img src={html}></img>
                            <p>HTML</p>
                        </div>
                        <div className="skill-card">
                            <img src={css}></img>
                            <p>CSS</p>
                        </div>
                        <div className="skill-card">
                            <img src={js}></img>
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-card">
                            <img src={figma}></img>
                            <p>Figma</p>
                        </div>
                        <div className="skill-card">
                            <img src={java}></img>
                            <p>Java</p>
                        </div>
                        <div className="skill-card">
                            <img src={c}></img>
                            <p>C</p>
                        </div>
                        <div className="skill-card">
                            <img src={cpp}></img>
                            <p>C++</p>
                        </div>
                        <div className="skill-card">
                            <img src={csharp}></img>
                            <p>C#</p>
                        </div>
                        <div className="skill-card">
                            <img src={nodejs}></img>
                            <p>Node.js</p>
                        </div>
                        <div className="skill-card">
                            <img src={react}></img>
                            <p>React</p>
                        </div>
                        <div className="skill-card">
                            <img src={mysql}></img>
                            <p>MySQL</p>
                        </div>
                        <div className="skill-card">
                            <img src={php}></img>
                            <p>PHP</p>
                        </div>
                        <div className="skill-card">
                            <img src={jira}></img>
                            <p>Jira</p>
                        </div>
                        <div className="skill-card">
                            <img src={confluence}></img>
                            <p>Confluence</p>
                        </div>
                        <div className="skill-card">
                            <img src={microsoft}></img>
                            <p>Microsoft Office</p>
                        </div>
                        <div className="skill-card">
                            <img src={ps}></img>
                            <p>Adobe Photoshop</p>
                        </div>
                        <div className="skill-card">
                            <img src={aar}></img>
                            <p>Adobe Acrobat</p>
                        </div>

                        <div className="skill-card">
                            <img src={githubskills}></img>
                            <p>Github</p>
                        </div>
                        <div className="skill-card">
                            <img src={canva}></img>
                            <p>Canva</p>
                        </div>


                    </div>
                </div>
                <div className="fade-line"></div>
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
            </div>
        </main>
    );
}

export default Home;
