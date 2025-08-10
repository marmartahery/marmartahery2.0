import React from 'react';
import './App.css';

function Home() {
    return (
        <main>
            {/* SECTION 1 */}
            <div className="home-container">
                <div className="home-text">
                    <h3 className="home-wel">Hey there, thanks for stopping by-</h3>
                    <h1 className="home-intro">I'm MarMar!</h1>
                    {/* <h2 className="home-pos">Associate Systems Engineer and Web Developer</h2> */}
                    <p className="home-summary">Welcome to my online portfolio! I'm an Associate Systems Engineer with a background in Web Development. I enjoy researching and leading health-innovative technology while also building webapps and online resources.</p>
                </div>
                <div className="home-img">
                    <p>picture</p>
                </div>
            </div>
            {/* SECTION 2 */}
            <div className="home-proj-container">
                <h2>My Latest Projects</h2>
                <div className="home-proj-blocks-container">
                    <div className="home-proj-block">
                        <p>project</p>
                    </div>
                    <div className="home-proj-block">
                        <p>project</p>
                    </div>
                    <div className="home-proj-block">
                        <p>project</p>
                    </div>
                    <div className="home-proj-block">
                        <p>project</p>
                    </div>
                    <div className="home-proj-block">
                        <p>project</p>
                    </div>
                    <div className="home-proj-block">
                        <p>project</p>
                    </div>
                </div>
                <button>Learn More</button>
            </div>

        </main>
    );
}

export default Home;
