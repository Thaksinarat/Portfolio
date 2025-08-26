export const Home = () => {
    return <>
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                {/* Topic */}
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent leading-right">
                    Hi, I'm Thaksinarat
                </h1>

                {/* Description */}
                <p className="text-lg mb-8 max-w-4xl mx-auto">
                    I'm a second-year student at the College of Computing, Prince of Songkla University (Phuket campus).
                    I enjoy creating digital art and have a strong interest in front-end development.
                    I'm always curious to explore new things and do my best at them! 🧡
                </p>

                <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
                    <a href="#projects" className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)]">View Projects 📄</a>
                    <a href="#contact" className="border border-purple-500/50 text-purple-500 py-3 px-6 rounded-lg font-medium transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-purple-500/10">Contact Me 💌</a>
                </div>
            </div>
        </section>
    </>
}