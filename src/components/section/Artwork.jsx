import { RevealOnScroll } from "../RevealOnScroll"

export const Artwork = () => {
    return <>
        <section id="Artwork" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent text-center">Artworks</h2>
                    <div>
                        {/* Artworks card */}
                        {/* Digital Art group */}
                        <div className="carousel w-screen max-w-full flex mx-auto overflow-x-auto scroll-hide gap-2">
                            <div className="group animate-loop-right flex items-center justify-center gap-2">
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">
                                    <img src="\Artworks\DigitalArt01\00.PNG" alt="DigitalArt 1" className="h-full w-full object-cover rounded-lg" />
                                </div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">2</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">3</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">4</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">5</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">6</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">7</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">8</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">9</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">10</div>
                            </div>
                            <div aria-hidden className="group animate-loop-right flex items-center justify-center gap-2">
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">1</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">2</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">3</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">4</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">5</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">6</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">7</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">8</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">9</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">10</div>
                            </div>
                        </div>

                        {/* Digital Art group */}
                        <div className="carousel flex w-screen max-w-full mx-auto overflow-x-auto scroll-hide gap-2 mt-10">
                            <div className="group animate-loop-left flex items-center justify-center gap-2">
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">1</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">2</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">3</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">4</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">5</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">6</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">7</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">8</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">9</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">10</div>
                            </div>
                            <div aria-hidden className="group animate-loop-left flex items-center justify-center gap-2">
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">1</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">2</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">3</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">4</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">5</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">6</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">7</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">8</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">9</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">10</div>
                            </div>
                        </div>

                        {/* 3D Art group */}
                        <div className="carousel flex w-screen max-w-full mx-auto overflow-x-auto scroll-hide gap-2 mt-10">
                            <div className="group animate-loop-right flex items-center justify-center gap-2">
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">1</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">2</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">3</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">4</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">5</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">6</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">7</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">8</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">9</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">10</div>
                            </div>
                            <div aria-hidden className="group animate-loop-right flex items-center justify-center gap-2">
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">1</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">2</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">3</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">4</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">5</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">6</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">7</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">8</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">9</div>
                                <div className="card h-[200px] w-[200px] p-1 bg-blue-500 rounded-lg text-center content-center">10</div>
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    </>

}