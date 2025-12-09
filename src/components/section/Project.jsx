import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return <>
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Words Guessing Game */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] transition-all">
                            {/* Name's Project */}
                            <h3 className="text-xl text-bold mb-2"> Words Guessing Game</h3>
                            {/* Description */}
                            <p className="text-white/90 mb-4">
                                A word guessing game written in Python. It's a simple project for my final exam. The player has 3 chances to guess the word by suggesting letters and its meaning.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Thaksinarat/Words-Guessing-Game" target="_blank" className="text-purple-400 hover:text-purple-300 transition-color my-4">View Project →</a>
                            </div>
                        </div>

                        {/* Java OOP */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] transition-all">
                            {/* Name's Project */}
                            <h3 className="text-xl text-bold mb-2"> Project Melody</h3>
                            {/* Description */}
                            <p className="text-white/90 mb-4">
                                Melody is a simple game developed using Java as part of an Object-Oriented Programming (OOP) project. This is story-driven game where player can explore another planets. Player has to decidde their own path and solve the mystery of the disks.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Thaksinarat/Melody" target="_blank" className="text-purple-400 hover:text-purple-300 transition-color my-4">View Project →</a>
                            </div>
                        </div>

                        {/* EZ-Selfsync */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] transition-all">
                            {/* Name's Project */}
                            <h3 className="text-xl text-bold mb-2"> EZ-Selfsync</h3>
                            {/* Description */}
                            <p className="text-white/90 mb-4">
                                EZ-Selfsync is a notification system with Backend API and Frontend Dashboard, developed and extended during my internship at SCG (Thung song) to manage alerts and user access efficiently.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Typscript", "TailwindCSS", "Vue", "Express.js", "Node.js"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="http://137.116.132.150/SelfSync/frontend/login" target="_blank" className="text-purple-400 hover:text-purple-300 transition-color my-4">View Project →</a>
                            </div>
                        </div>

                        {/* Thaksi.portfolio */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] transition-all">
                            {/* Name's Project */}
                            <h3 className="text-xl text-bold mb-2"> THAKSI.portfolio</h3>
                            {/* Description */}
                            <p className="text-white/90 mb-4">
                                This is my personal portfolio website, designed to showcase my projects, skills, and experience during I'm studying.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "Javascript", "HTML", "CSS", "TailwindCSS"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://thaksinarat.github.io/Portfolio/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-color my-4">View Project →</a>
                            </div>
                        </div>

                        
                        {/* WaterPrice */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] transition-all">
                            {/* Name's Project */}
                            <h3 className="text-xl text-bold mb-2"> Water Price</h3>
                            {/* Description */}
                            <p className="text-white/90 mb-4">
                                Water Price is a project created for my mother and local village water fee collectors who currently have no system to help calculate monthly water charges. In the future, I plan to expand it to store monthly water usage data for each household. 
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Javascript", "CSS", "HTML"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Thaksinarat/BookingMeetingRoom" target="_blank" className="text-purple-400 hover:text-purple-300 transition-color my-4">View Project →</a>
                            </div>
                        </div>

                        {/* BookingMeetingRoom */}
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_2px_8px_rgbs(59,130,246,0.2)] transition-all">
                            {/* Name's Project */}
                            <h3 className="text-xl text-bold mb-2"> Booking-Meeting-Room</h3>
                            {/* Description */}
                            <p className="text-white/90 mb-4">
                               This is a collaborative project developed for an AI course, designed to optimize meeting room allocation in the CoC building.  The system uses AI to process user inputs, extract key details, and calculate heuristic values to improve efficiency in room booking.  
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "PyThaiNLP", "RandomForest"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-amber-500/10 text-amber-500 py-1 px-3 rounded-full text-sm hover:bg-amber-500/20 hover:shadow-[0_2px_8px_rgbs(139,92,246,0.2)] transition-all">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/Thaksinarat/BookingMeetingRoom" target="_blank" className="text-purple-400 hover:text-purple-300 transition-color my-4">View Project →</a>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    </>
}