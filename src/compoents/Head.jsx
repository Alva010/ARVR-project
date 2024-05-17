
import { ReactTyped } from "react-typed";



const Head = () => {
    return (
        <div className="text-white header" id="home">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[yellow] font-bold p-2">Hello World</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">ACFS ICT Project</h1>
                <div className="">
                    <p className="md:text-[25px] sm:text-[20px] text-[15px] font-medium">You're about to dive into the exciting world of </p>
                    <ReactTyped className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 mt-3"
                        strings={['Augmented Reality', 'Virtual Reality', 'AR/VR']} 
                        typeSpeed={100} 
                        baskSpeed={140} 
                        loop
                    />
                </div>
                <a href="#history"><button className="bg-headfont w-[200px] rounded-md font-medium my-6 mx-auto py-3" >Let's Learn</button></a>
            </div>
        </div>
    )
}



export default Head