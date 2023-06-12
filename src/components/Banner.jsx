// Images
import Image from '../assets/banner.png';
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
            id="home"
            className="flex min-h-[85vh] items-center lg:min-h-[78vh]"
        >
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    {/* Text */}
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-2 text-[50px] font-bold leading-[0.8] lg:text-[80px]"
                        >
                            Petrizer
                        </motion.h1>
                        <motion.div
                            variants={fadeIn('right', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-6 font-secondary text-[36px] font-semibold uppercase leading-[1] lg:text-[48px]"
                        >
                            <span className="text-white">I am a </span>
                            <TypeAnimation
                                sequence={[
                                    'Developer',
                                    2000,
                                    'Designer',
                                    2000,
                                    'Programmer',
                                    2000,
                                ]}
                                speed={50}
                                className="text-accent"
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <p className="mx-auto mb-8 max-w-lg lg:mx-0">
                            Passionate developer with a love for turning ideas into digital realities. From building robust web applications to creating intuitive user interfaces, I bring a diverse skill set to every project. My goal is to create impactful solutions that shape lives and transform industries.
                        </p>
                        <div className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0">
                            <button className="btn btn-lg"><a href="#contact">Contact Me</a></button>
                            <a href="#work" className="text-gradient btn-link">
                                My Portfolio
                            </a>
                        </div>
                        {/* Socials */}
                        <div className="mx-auto flex max-w-max gap-x-6 text-[40px] lg:mx-0">
                            <a href="https://github.com/titi923" className='transition-color duration-300 ease hover:scale-125'>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/petrisor-buciuta-9078a6223/" className='transition-color duration-300 ease hover:scale-125'>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="hidden max-w-[320px] flex-1 items-center justify-center lg:flex lg:max-w-[480px]">
                        <motion.img
                            variants={fadeIn('left', 0.3)}
                            initial="hidden"
                            whileInView={'show'}
                            src={Image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
