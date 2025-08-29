import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    // Education
    const myEducation = [
        {
            institution: "Prince of Songkla University (Phuket campus)",
            faculty: "College of Computing,",
            major: "B.S in Computing",
            program: "",
            gpa: "3.98",
            firstYear: "2024",
            graduateYear: "Now",
            graduated: false
        },
        {
            institution: "Bangsawanwittayakom School",
            faculty: "",
            major: "",
            program: "Sci-Math (Introduction to Computer Engineering)",
            gpa: "3.90",
            firstYear: "2021",
            graduateYear: "2023",
            graduated: true
        },

    ];

    // Experiences
    const myIntern = [
        {
            company: "THE SIAM CEMENT (THUNG SONG) COMPANY LIMITED",
            department: "Digital Transformation",
            position: "Front-end Developer",
            firstDate: "25 May 2025",
            finalDate: "5 Aug 2025"
        }
    ]

    // skills
    const frontendSkills = ["HTML", "CSS", "Javascript", "Typescript", "React", "TailwindCSS", "Vue"]
    const backendSkills = ["Node.js", "Express.js", "SQL", "Prisma"]
    const programLangs = ["C", "Python", "Java"]
    const designSkills = ["Procreate", "Figma", "Canva", "Adobe Illustrtor", "IbisPaint", "Blender"]

    return <>
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    {/* Topie */}
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent text-center">About Me</h2>
                    {/* Details to introdue */}
                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">

                        <div className="flex flex-col mb-6 gap-4">
                            {/* Educations */}
                            <div>
                                <h3 className="text-xl font-bold mb-2">🏫 Education</h3>
                                <div className="flex flex-col gap-3">
                                    {myEducation.map((edu, key) => (
                                        <div key={key} className="py-1 px-3">
                                            <div className="flex items-between justify-between border-b border-white/10">
                                                <span className="text-bold md:text-lg text-purple-500">{edu.institution}</span>
                                                <span className="relative inline-flex h-3 w-3">
                                                    <span
                                                        className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${edu.graduated ? "" : "animate-ping bg-pink-500"
                                                            }`}
                                                    ></span>
                                                    <span
                                                        className={`relative inline-flex h-3 w-3 rounded-full ${edu.graduated ? "" : "bg-pink-500"
                                                            }`}
                                                    ></span>
                                                </span>
                                            </div>

                                            <div className="flex items-between justify-between gap-2 pt-2">
                                                {/* Faculty & Major */}
                                                <div>
                                                    <span className="text-white/90">{edu.program}{edu.faculty} {edu.major} ({edu.firstYear}-{edu.graduateYear})</span>
                                                </div>
                                                {/* Grade */}
                                                <div>
                                                    <span className="bg-white/10 text-white/90 rounded-full text-sm py-1 px-2">{edu.gpa}</span>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/*Intern Experiences */}
                            <div>
                                <h3 className="text-xl font-bold mb-2">💻 Internship Experience</h3>
                                <div className="flex flex-col gap-6">
                                    {myIntern.map((intern, key) => (
                                        <div key={key} className="py-1 px-3">
                                            <div className="border-b border-white/10">
                                                <span className="text-bold md:text-lg text-purple-500">{intern.company}</span>
                                            </div>
                                            <div className="flex items-between justify-between gap-2 pt-2">
                                                {/* Position & Department */}
                                                <div>
                                                    <p className="text-white/90">{intern.position}<span> ({intern.firstDate} - {intern.finalDate})</span></p>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2">👾 Skills</h3>
                        {/* Skills */}
                        <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 rounded-xl bg-black/10">
                            {/* Frontend skills */}
                            <div className="rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* สร้าง list ของ skills ที่เรามีในส่วน Frontend */}
                                    {frontendSkills.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend skills */}
                            <div className="rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* สร้าง list ของ skills ที่เรามีในส่วน Backend */}
                                    {backendSkills.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Programming language skills */}
                            <div className="rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4"> Programming</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* สร้าง list ของ skills ที่เรามีในส่วน Design */}
                                    {programLangs.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Design skills */}
                            <div className="rounded-xl p-6">
                                <h3 className="text-xl font-bold mb-4"> Design</h3>
                                <div className="flex flex-wrap gap-2">
                                    {/* สร้าง list ของ skills ที่เรามีในส่วน Design */}
                                    {designSkills.map((skill, key) => (
                                        <span
                                            key={key}
                                            className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    </>
}