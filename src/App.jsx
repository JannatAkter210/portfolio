
import React, { useState } from "react";
import profilePic from "./assets/MyImage.png";

const skills = [
  "HTML", "CSS", "JavaScript",
  "React.js", "Tailwind CSS", "Git & GitHub"
];

const projects = [
  {
    title: "Cake Bake Tales",
    description: "A cake and bakery related web development project.",
    tech: "HTML, CSS, JavaScript",
    github: "https://github.com/JannatAkter210/Cake-Bake-Tales",
    number: "01",
    icon: "🎂"
  },
  {
    title: "Project 2",
    description: "A responsive website built with modern web technologies.",
    tech: "React, Tailwind CSS",
    github: "https://github.com/JannatAkter210/project-2",
    number: "02",
    icon: "💻"
  },
  {
    title: "Exam Project",
    description: "A web development project created as part of my exam.",
    tech: "React, JavaScript",
    github: "https://github.com/JannatAkter210/exam-project",
    number: "03",
    icon: "🚀"
  }
];

const education = [
  {
    degree: "Diploma in Engineering",
    institution: "Cumilla Govt. Polytechnic Institute",
    year: "Session: 2022 - 2023"
  },
  {
    degree: "Secondary School Certificate",
    institution: "Technical Training Centre",
    year: "2020 - 2022"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    "Intro", "Skills", "Education", "Projects", "Contact"
  ];

  return (
    <div className="bg-[#080F1F] text-white min-h-screen overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#080F1F]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <a href="#intro" className="text-2xl font-bold">
            Jannat<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-slate-300 hover:text-cyan-400 transition"
              >
                {item}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden md:block bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-cyan-300 transition"
          >
            Hire Me ↗
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-cyan-400"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#101B30] px-6 py-5 space-y-4 border-t border-white/10">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-300 hover:text-cyan-400"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Intro */}
      <section
        id="intro"
        className="scroll-mt-20 min-h-screen flex items-center px-6 pt-28 pb-20 relative"
      >
        <div className="absolute top-32 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative">

          <div>
            <div className="inline-flex items-center gap-2 border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm mb-7">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Available for opportunities
            </div>

            <p className="text-slate-400 text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5">
              Jannat Akter
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Bhuiyan
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-slate-300 mb-6">
              Frontend Developer
            </h2>

            <p className="text-slate-400 leading-8 max-w-xl mb-9">
              I am a passionate web developer who loves creating
              modern, responsive and user-friendly websites using
              React and Tailwind CSS. I enjoy learning new
              technologies and building creative web experiences.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Explore Projects ↗
              </a>

              <a
                href="#contact"
                className="border border-cyan-400/60 text-cyan-400 px-7 py-3 rounded-full hover:bg-cyan-400 hover:text-slate-950 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 mt-10 text-sm text-slate-400">
              <a
                href="https://github.com/JannatAkter210"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                GitHub ↗
              </a>
              <a
                href="mailto:jannat292005@gmail.com"
                className="hover:text-cyan-400 transition"
              >
                Email ↗
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-20" />

              <div className="relative p-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600">
                <img
                  src={profilePic}
                  alt="Jannat Akter Bhuiyan"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-[#080F1F]"
                />
              </div>

              <div className="absolute -bottom-3 -left-5 bg-[#142238] border border-cyan-400/30 px-5 py-3 rounded-xl shadow-xl">
                <p className="text-cyan-400 font-bold">Frontend</p>
                <p className="text-slate-400 text-xs">Web Developer</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-20 py-24 px-6 bg-[#0D1729]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
              My Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-slate-400 mt-4">
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group bg-[#142238] border border-white/5 p-7 rounded-2xl text-center hover:border-cyan-400/60 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-cyan-400 text-2xl mb-3">
                  {["🌐", "🎨", "⚡", "⚛️", "💨", "🔧"][index]}
                </div>
                <h3 className="font-semibold text-slate-200 group-hover:text-cyan-400 transition">
                  {skill}
                </h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="scroll-mt-20 py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
              My Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-cyan-400">Education</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-cyan-400/30 ml-3 md:ml-8 space-y-10">

            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-12">

                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />

                <div className="bg-[#142238] border border-white/5 p-6 md:p-8 rounded-2xl hover:border-cyan-400/50 transition">
                  <span className="text-cyan-400 text-sm font-medium">
                    {edu.year}
                  </span>

                  <h3 className="text-xl font-bold mt-3 mb-2">
                    {edu.degree}
                  </h3>

                  <p className="text-slate-400">
                    {edu.institution}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-20 py-24 px-6 bg-[#0D1729]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
              My Recent Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-cyan-400">Projects</span>
            </h2>
            <p className="text-slate-400 mt-4">
              Some projects I have built
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

            {projects.map((project) => (
              <div
                key={project.number}
                className="group bg-[#142238] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-400/50 hover:-translate-y-2 transition duration-300"
              >

                <div className="h-44 bg-gradient-to-br from-cyan-950 via-blue-950 to-[#142238] flex items-center justify-center relative">
                  <span className="text-6xl group-hover:scale-110 transition duration-300">
                    {project.icon}
                  </span>
                  <span className="absolute top-4 right-5 text-cyan-400/60 font-bold text-sm">
                    {project.number}
                  </span>
                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-7 mb-5">
                    {project.description}
                  </p>

                  <p className="text-cyan-400 text-xs font-medium mb-6">
                    {project.tech}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-400 text-slate-950 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-cyan-300 transition"
                  >
                    GitHub Code ↗
                  </a>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-20 py-24 px-6">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Contact <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-slate-400 mt-4">
              Have a project in mind? Let's work together!
            </p>
          </div>

          <div className="bg-[#142238] border border-white/5 rounded-3xl p-7 md:p-12">

            <div className="grid sm:grid-cols-2 gap-6 mb-9">

              <div className="bg-[#0D1729] p-5 rounded-2xl">
                <p className="text-cyan-400 text-sm mb-2">✉ Email</p>
                <a
                  href="mailto:jannat292005@gmail.com"
                  className="text-slate-200 hover:text-cyan-400 break-all"
                >
                  jannat292005@gmail.com
                </a>
              </div>

              <div className="bg-[#0D1729] p-5 rounded-2xl">
                <p className="text-cyan-400 text-sm mb-2">☎ Phone</p>
                <a
                  href="tel:+8801859991252"
                  className="text-slate-200 hover:text-cyan-400"
                >
                  +880 1859991252
                </a>
              </div>

              <div className="bg-[#0D1729] p-5 rounded-2xl">
                <p className="text-cyan-400 text-sm mb-2">📍 Location</p>
                <p className="text-slate-200">Dhaka, Bangladesh</p>
              </div>

              <div className="bg-[#0D1729] p-5 rounded-2xl">
                <p className="text-cyan-400 text-sm mb-2">💻 GitHub</p>
                <a
                  href="https://github.com/JannatAkter210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-cyan-400"
                >
                  JannatAkter210 ↗
                </a>
              </div>

            </div>

            <div className="text-center">
              <a
                href="mailto:jannat292005@gmail.com"
                className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 px-9 py-3 rounded-full font-bold hover:scale-105 transition"
              >
                Say Hello ↗
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">

          <h2 className="text-xl font-bold">
            Jannat<span className="text-cyan-400">.</span>
          </h2>

          <p className="text-slate-500 text-sm text-center">
            © 2026 Jannat Akter Bhuiyan. All Rights Reserved.
          </p>

          <a
            href="#intro"
            className="text-cyan-400 text-sm hover:text-cyan-300"
          >
            Back to Top ↑
          </a>

        </div>
      </footer>

    </div>
  );
}

export default App;
