import ArVr from "../image/ar-vr.png"

const Footer = () => {

    const top = () => {
        window.scrollTo(0, 0)
    };

    return (
        <footer className="relative text-white ">
            <div className="absolute w-full overflow-hidden">
                <div className="custom-shape-divider-top-1715591847">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                     <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="relative block fill-fcol"></path>
                    </svg>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 p-20">
                        <div className="flex flex-col gap-5">
                            
                            <img src={ArVr} alt="ar-vr" className="size-60" />
                            
                        </div>
                        <div className="flex flex-col gap-5">
                            <h2 className="text-3xl text-fcol font-bold">Resources</h2>
                            <ul>
                                
                                <li><a href="https://www.techtarget.com/">TechTarget</a></li>
                                <li><a href="https://sopa.tulane.edu/">SOPA</a></li>
                                <li><a href="https://www.wikipedia.org/">Wikipedia</a></li>
                                <li><a href="https://gemini.google.com/">Gemini</a></li>
                            </ul>
                        </div>
                        
                        <div className="flex flex-col max-sm:mt-3 mt-0 gap-5">
                            <h2 className="text-3xl text-fcol font-bold">Section</h2>
                            <ul>
                                
                                <li><a href="#home">Home</a></li>
                                <li><a href="#history">History</a></li>
                                <li><a href="#arvr">AR/VR</a></li>
                                <li><a href="#teammates">Teammates</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col max-sm:mt-3 mt-0 gap-5">
                            
                            <ol>
                                
                                <li className="font-bold text-xl max-sm:mt-3">ACFS G-12 Room-4, Group-1, ICT Project</li>
                                <li>
                                    <p className="pt-2">This is my first project written in react. Thanks to 2023000082 and 2023000010 for helping the project.
                                         Error free and completed on 17.5.2024 at 9:04 AM. Please forgive me if there are any mistakes.
                                    </p>
                                    <span className="font-bold">#2023000037</span>
                                </li>
                            </ol>
                        </div>

                        
                        
                        
                    </div>
                    <button onClick={top} className="absolute right-0 mt-[-5rem] p-[10px] sm:p-[20px] border-none rounded-md m-5 bg-white text-headfont cursor-pointer">Top</button>
                </div>
                <div className="text-center sm:text-3md text-headfont bg-fcol p-1">ACFS G-12 Room-4 Grop-1 ICT Project</div>
            </div>
        </footer>
    )
}

export default Footer;



