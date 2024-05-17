import vd1 from "../video/ar-vr-video.mp4"
import vd2 from "../video/ar-vr-video-a.mp4"

const History = () => {
    return (
        <div className="pt-20 px-6 bg-fcol " id="history">
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl text-center tracking-wide text-headfont">
                     A Brief History of AR/VR
                </h1>
                 <p className="mt-10 text-lg text-center text-netural-500 max-w-4xl text-fontcol paragrap">
                While primitive virtual reality systems got their start in the 1950s and 1960s, the concepts of VR and AR began to gain momentum in military applications during the early 1980s. Motion pictures such as Tron, The Matrix and Minority Report all offered futuristic riffs on how these technologies would evolve in the years to come.
                The first mainstream attempt at releasing a VR headset was the Sega VR in 1993, an add-on to the Sega Genesis gaming system. While it never made it to market, it did stoke consumer interest in the technology. It would not be until the Oculus Rift in 2010 that a VR headset would be successful with a consumer audience — though today these devices remain expensive and largely of interest to niche, gaming-focused users.
                Augmented reality splintered from virtual reality around 1990, and was brought to the public’s attention in 1998, when TV broadcasters began overlaying a yellow line on the football field to better indicate the distance to a first down. Over the next decade, various apps around AR technology were designed for both military use (such as in fighter jet cockpits) and consumer use, when print magazines and packaged goods began embedding QR codes that could be scanned with a consumer’s cell phone, making the product “come alive” with a short 3D video.
                In 2014, Google rolled out Google Glass, with an eye toward equipping everyone with a head-mounted display AR device. The AR headset, which was controlled via voice and touch gestures, was met with skepticism and criticism, attributed to the new reality that people were recording video 24/7 in public. Privacy suddenly became a major talking point in consumer AR. Google ultimately suspended the project and relaunched it a few years later with enterprise users in mind.
                 </p>
                
                <div className="flex mt-10 justify-center">
        
                                <video autoPlay loop muted className="rounded-lg w-1/2 border-2 border-headfont mx-2 my-4">
                                    <source src={vd1} type="video/mp4" />
                                  Your browser does not support the video tag.
                                </video>
                            
                            
                                <video autoPlay loop muted className="rounded-lg w-1/2 border-2 border-headfont mx-2 my-4">
                                 <source src={vd2} type="video/mp4" />
                                 Your browser does not support the video tag.
                                </video>
                            
                    
                    
                </div>
            </div>
        </div>
        
    )
}

export default History;