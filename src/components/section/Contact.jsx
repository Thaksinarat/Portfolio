import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from "emailjs-com"; // เพื่อส่งเมลหาเราในการติดต่องานผ่านทางหนน้าเว็บ

export const Contact = () => {

    // ฟอร์มข้อมูล
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
        ).then((res) => {
        alert("Message set successfully!"); // ส่งข้อความสำเร็จ
        setFormData({
            name: "",
            email: "",
            message: ""
        }) // เคลียร์ฟอร์ม
    }).catch ((err) => alert("Somthing went wrong. Please try again." + JSON.stringify(err))); // ส่งข้อความไม่สำเร็จ
};
return <>
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-75 md:w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent text-center">Get In Touch</h2>
                <form action="" className="space-y-6" onSubmit={handleSubmit}>

                    {/* Input name */}
                    <div className="relative">
                        <input type="text" id="name" name="name" placeholder="Name..." required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5" />
                    </div>

                    {/* Input email */}
                    <div className="relative">
                        <input type="text" id="email" name="email" placeholder="Email@contact.com" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5" />
                    </div>

                    {/* Input message */}
                    <div className="relative">
                        <textarea rows={5} id="message" name="message" placeholder="Leave your message..." required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5" />
                    </div>

                    <button type="submit" className="w-full bg-purple-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(128,90,213,0.2)]">
                        Send Message 📩
                    </button>
                </form>
            </div>

            <div className="border-t border-white/10 rounded mt-8 py-8">
                <h3 className="flex items-center justify-center text-lg">Other contact</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">

                    {/* Facebook */}
                    <a href="https://www.facebook.com/IPPKS1322/" target="_blank" rel="noreferrer" className="text-center p-4 rounded-lg transition relative overflow-hidden hover:bg-black/20 hover:border hover:border-purple-600 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)] flex flex-col items-center justify-center">
                        <i className="fa-brands fa-facebook text-2xl mb-2 text-blue-400"></i>
                        <span className="text-sm">Facebook</span>
                    </a>
                    {/* IG */}
                    <a href="https://www.instagram.com/ssa_tta_/" target="_blank" rel="noreferrer" className="text-center p-4 rounded-lg transition relative overflow-hidden hover:bg-black/20 hover:border hover:border-purple-600 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)] flex flex-col items-center justify-center">
                        <i className="fa-brands fa-instagram text-2xl mb-2 text-pink-400"></i>
                        <span className="text-sm">Instrgram</span>
                    </a>
                    {/* Github */}
                    <a href="https://github.com/Thaksinarat/" target="_blank" rel="noreferrer" className="text-center p-4 rounded-lg transition relative overflow-hidden hover:bg-black/20 hover:border hover:border-purple-600 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)] flex flex-col items-center justify-center">
                        <i className="fa-brands fa-github text-2xl mb-2 text-gray-400"></i>
                        <span className="text-sm">Github</span>
                    </a>
                    {/* Linkin */}
                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHXqSD19om6qgAAAZjsDSBgtP8rsPXEBB76lozxGxCdUhbcXLfpBm8ZeBk2rNyi3vamM3zboBPBByFnB_wnqM4MYmCENpF2Kv7NRfSCGSS3Iq0Qbx4a23SZj39uEHy13jyVGSo=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2F%25E0%25B8%2597%25E0%25B8%25B1%25E0%25B8%2581%25E0%25B8%25A9%25E0%25B8%25B4%25E0%25B8%2593%25E0%25B8%25B2%25E0%25B8%25A3%25E0%25B8%25B1%25E0%25B8%2595%25E0%25B8%25A2%25E0%25B9%258C-%25E0%25B8%259E%25E0%25B8%25B1%25E0%25B8%2592%25E0%25B8%25AA%25E0%25B8%2587%25E0%25B8%2584%25E0%25B9%258C-6a5413353%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target="_blank" rel="noreferrer" className="text-center p-4 rounded-lg transition relative overflow-hidden hover:bg-black/20 hover:border hover:border-purple-600 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.5)] flex flex-col items-center justify-center">
                        <i className="fa-brands fa-linkedin text-2xl mb-2 text-cyan-400"></i>
                        <span className="text-sm">LinkedIn</span>
                    </a>

                </div>
            </div>
        </RevealOnScroll>
    </section >
</>
}