import React from 'react';

export default function About() {
    return (
        <div className="about-wrapper">
            <div>
                <h1>{'Hi, I\'m Devesh! 👋'}</h1>
                <blockquote>
                    <p>💻 Mathematics and Computing Undergrad at IIT ISM Dhanbad</p>
                </blockquote>
                <p className="about-links-container">
                    <a href="https://twitter.com/DeveshG96670319" target='blank'>
                        <img
                            src="https://img.shields.io/twitter/follow/Devesh?style=social"
                            alt="Twitter: @devesh"
                        />
                    </a>
                    <a href="https://github.com/dev-the-coder" target='blank' >
                        <img
                            src="https://img.shields.io/github/followers/dev-the-coder?label=follow&style=social"
                            alt="GitHub: @devesh"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/devesh-gupta-464260218/" target='blank'>
                        <img
                           
                            src="https://img.shields.io/badge/-Devesh-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/devesh-gupta-464260218/"
                            alt="Linkedin: @devesh"
                        />
                    </a>
                    <a href="mailto:guptadevesh2002@gmail.com" target='blank'>
                        <img
                            src="https://img.shields.io/badge/Gmail-@devesh-red"
                            alt="Gmail: @devesh"
                        />
                    </a>
    
                </p>
                <p>
                    My passion lies in solving challenging problems, designing algorithms, and
                    communicating complex ideas to non-technical stakeholders.
                </p>
                <p>
                    I always look to exceed expectations and am effective both working as an
                    individual and as part of a team.
                </p>
                <p>
                    In my spare time, I like to travel 🚶, read books 📚, listen to music 🎧 and
                    watch anime 📺.
                </p>
                <p>
                    I enjoy learning new things and connecting with people across a range of
                    industries. If you ever want to bounce ideas off of me, please feel free to
                    reach out on twitter or email. 😄
                </p>
                <hr className="about-separator" />
                <h2>⚡ Technical Skills ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Area</th>
                        <th>Proficiencies</th>
                    </tr>
                    <tr>
                        <td>Langauge</td>
                        <td>C, C++, Golang</td>
                    </tr>
                    <tr>
                        <td>Frontend</td>
                        <td>HTML,CSS, JavaScript, Tailwind, React JS, Bootstrap</td>
                    </tr>
                    <tr>
                        <td>BackEnd</td>
                        <td>Node.js, Express, Gin</td>
                    </tr>
                    <tr>
                        <td>Databases</td>
                        <td>MongoDB (Mongoose), MySQL</td>
                    </tr>
                    <tr>
                        <td>Misc</td>
                        <td>Git, Github, VS Code</td>
                    </tr>
                </table>
                <hr className="about-separator" />
                <h2>⚡ Competitive Programming ⚡</h2>
                <table className="about-skills-table">
                    <tr>
                        <th>Platform</th>
                        <th>Rating</th>
                        <th>Profile</th>
                    </tr>
                    <tr>
                        <td>Codechef</td>
                        <td>3* (1729)</td>
                        <td><a href="https://www.codechef.com/users/devesh_coder" target='_blank'>devesh_coder</a></td>
                    </tr>
                    <tr>
                        <td>Codeforces</td>
                        <td>Pupil(1249)</td>
                        <td><a href="https://codeforces.com/profile/dev2023" target='_blank'>dev2023</a></td>
                    </tr>
                    <tr>
                        <td>GeeksforGeeks</td>
                        <td>Points: 600</td>
                        <td><a href="https://auth.geeksforgeeks.org/user/guptadevesh2002" target='_blank'>guptadevesh2002</a></td>
                    </tr>
                    <tr>
                        <td>Leetcode</td>
                        <td>Rating: 1529</td>
                        <td><a href="https://leetcode.com/deveshgupta/" target='_blank'>deveshgupta</a></td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
