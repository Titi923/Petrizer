// Images
import Image from '../assets/picture.jpg';
// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// Typing animation
import { TypeAnimation } from 'react-type-animation';
// Motion
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';

const Banner = () => {
    return (
        <section
            id="about"
            className="flex min-h-[85vh] items-center lg:min-h-[78vh]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    {/* Image */}
                    <div className="hidden max-w-[320px] flex-1 items-center justify-center lg:flex lg:max-w-[480px]">
                        <motion.img
                            variants={fadeIn('left', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            className="rounded-full"
                            src={Image}
                        />
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-4 text-[50px] font-bold leading-[0.8] lg:text-[80px]"
                        >
                            About Me
                        </motion.h1>
                        
                        <p className="mx-auto mb-8 max-w-lg lg:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio quas ullam laboriosam quam sequi
                            eligendi, enim fugiat repellendus nostrum veritatis!
                        </p>
                        <div className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0">
                            <button className="btn btn-lg"><a href="#contact">Contact Me</a></button>
                            <a href="#work" className="text-gradient btn-link">
                                My Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
