import styles from './Navbar.module.css';
import { Link } from 'react-scroll'
import { useState } from 'react';


export function Navbar() {
    const [barDisplay, setBarDisplay] = useState("flex");
    const [crossDisplay, setCrossDisplay] = useState("none")

    return (
        <div className={styles.container}>
            <nav className={styles.navBar}>
                <ul>
                    <li><Link
                        onClick={() => { setBarDisplay("flex"); setCrossDisplay("none") }}
                        activeClass="active"
                        to="#about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >{"</>"}</Link></li>
                </ul>
                <ul>
                    <li><Link
                        activeClass="active"
                        to="#about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></li>
                    <li><Link
                        activeClass="active"
                        to="#skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Skills</Link></li>
                    <li><Link
                        activeClass="active"
                        to="#coding"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Coding Handles</Link></li>
                    <li><Link
                        activeClass="active"
                        to="#projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link></li>
                    <li><a
                        href="https://drive.google.com/file/d/1oSTiiqp6JpV1ioq0lyVMx0jH3b5vSndw/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >Resume</a></li>
                    <li><Link
                        activeClass="active"
                        to="#contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link></li>
                </ul>
                <ul>
                    <li style={{ display: `${barDisplay}` }} onClick={() => { setCrossDisplay("flex"); setBarDisplay("none") }}><i className="fas fa-bars"></i></li>
                    <li style={{ display: `${crossDisplay}` }} onClick={() => { setBarDisplay("flex"); setCrossDisplay("none") }}><i className="fas fa-times"></i></li>
                </ul>
            </nav>
            <div className={styles.dropdown} style={{display: `${(crossDisplay === "flex") ? "inherit" : "none"}`}}>
                <ul>
                    <li><Link
                        onClick={() => { setBarDisplay("flex"); setCrossDisplay("none") }}
                        activeClass="active"
                        to="#about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></li>
                    <li><Link
                        onClick={() => { setBarDisplay("flex"); setCrossDisplay("none") }}
                        activeClass="active"
                        to="#skills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Skills</Link></li>
                    <li><Link
                        onClick={() => { setBarDisplay("flex"); setCrossDisplay("none") }}
                        activeClass="active"
                        to="#coding"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Coding Handles</Link></li>
                    <li><Link
                        onClick={() => { setBarDisplay("flex"); setCrossDisplay("none") }}
                        activeClass="active"
                        to="#projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Projects</Link></li>
                    <li><a
                        href="https://drive.google.com/file/d/1wl1XICXHKQKdUUpTLFL4mjtENQt6tJqc/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >Resume</a></li>
                    <li><Link
                        onClick={() => { setBarDisplay("flex"); setCrossDisplay("none") }}
                        activeClass="active"
                        to="#contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}