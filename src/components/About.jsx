// Image
import Image from '../assets/picture.jpg';

// Variant
import { fadeIn } from '../variants';

const About = () => {

    return (
        <section id="about" className="section mt-5">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    {/* Image */}
                    <div className="h-[440px] flex bg-contain items-center justify-center bg-no-repeat mix-blend-lighten">
                        <img className='rounded-full' src={Image} alt="" />
                    </div>
                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="h2 font-bold text-accent">About me.</h2>
                        <h3 className="h3 mb-4">
                            I'm a Freelance Web Developer with experience among
                            multiple web services
                        </h3>
                        <p className="mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eum recusandae ullam facilis distinctio
                            expedita non quo temporibus deserunt iure omnis.
                        </p>
                        {/* Buttons */}
                        <div className="flex items-center gap-x-8">
                            <button className="btn btn-lg">Contact me</button>
                            <a href="#" className="text-gradient btn-link">
                                My Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
