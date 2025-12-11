import { useEffect } from "react"
export const Navbar = ({menuOpen, setMenuOpen}) => {
    // ตรวจสอบว่า menuOpen ไหมจาก keyword "hidden" ใน className และจะตรวจสอบทุกครั้งที่มีการเปลี่ยนแปลงค่า menuOpen
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen])

    return <>
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-md">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="#home" className="text-xl font-bold">
                        <span className="text-purple-500">THAKSI</span>.portfolio
                    </a>

                    {/* mobile menu : จะแสดงเมื่อหน้าจอมีขนาดเล็กกว่า md */}
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        {/* hambargur list icon */}
                        &#9776;
                    </div>

                    {/* desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-amber-500 transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-amber-500 transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-amber-500 transition-colors">Projects</a>
                        <a href="#Artwork" className="text-gray-300 hover:text-amber-500 transition-colors">Artworks</a>
                        <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
}