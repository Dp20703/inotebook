import React from 'react'

const About = ({ mode }) => {

    return (
        <div className='container mb-5' style={{ color: mode === "dark" ? "white" : "#042743" }} >
            <h3 className='text-center'>About iNotebook</h3>
            <br />
            <h4> Welcome to iNotebook!</h4>
            <p>At iNotebook, we believe in the power of organized thoughts and seamless note-taking. Our mission is to provide a user-friendly, efficient, and secure platform for all your note-taking needs.</p>
            <br />
            <h4>Our Story</h4>
            <p>iNotebook was born out of a simple idea: to create a digital space where ideas can flourish. Whether you’re a student, a professional, or someone who loves jotting down thoughts, iNotebook is designed to cater to your needs. We started with a small team of passionate developers and designers who wanted to make note-taking more intuitive and accessible.</p>
            <br />
            <h4>What We Offer</h4>
            <ul>
                <li> User-Friendly Interface: Our platform is designed with simplicity in mind, making it easy for anyone to start taking notes right away.
                    Secure Storage: Your notes are important, and we ensure they are stored securely with top-notch encryption.</li>
                <li>Cross-Platform Access: Access your notes from any device, anywhere, anytime. Whether you’re on your computer, tablet, or smartphone, iNotebook is always within reach.
                    Organizational Tools: Tag, categorize, and search your notes effortlessly. Our powerful organizational tools help you keep track of everything.</li>
                <li>  Collaboration Features: Share your notes with friends, colleagues, or classmates. Collaborate in real-time and make teamwork more efficient.</li>
            </ul>
            <br />
            <h4>Our Vision</h4>
            <p>We envision a world where everyone can capture their thoughts and ideas without any barriers. iNotebook aims to be the go-to platform for note-taking, helping you stay organized and productive.</p>
            <br />
            <h4>Join Us</h4>
            Join the iNotebook community today and experience the future of note-taking. Whether you’re brainstorming, planning, or just jotting down daily thoughts, iNotebook is here to support you every step of the way.
            <br />
            Feel free to customize this draft to better fit your brand’s voice and specific features. If you need any more help or have specific elements you’d like to include, let me know!

        </div>
    )
}

export default About
