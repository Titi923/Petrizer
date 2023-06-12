// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
// import Project_1 from '../assets/project_1.jpg';
import Project_1 from '../assets/Project_1.png';
import Project_2 from '../assets/Project_2.png';
import Project_3 from '../assets/Project_3.png';
import Project_4 from '../assets/Project_4.png';
import Project_5 from '../assets/Project_5.png';
//
import { Link } from 'react-scroll';

const Work = () => {
    return (
        <section id="work">
            <div className="container mx-auto mt-10 pt-10">
                <div className="flex-1 flex-col gap-x-10 lg:flex-row">
                    <div className="mb-10 text-center lg:mb-4 ">
                        {/* text */}
                        <div>
                            <h2 className="h2 font-semibold leading-tight text-accent mb-1">
                                My Latest Work.
                            </h2>
                            <p className="mb-8">
                                Here are some of the projects I can show here, some are personal projects while others were build while learning an bew technology, I cannot post here the websites I built for my clients, if you want to know more than contact me.
                            </p>
                        </div>
                        {/* image */}
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* Project_1 */}
                        <div className="group relative overflow-hidden rounded-xl border-4 border-white/70 ">
                            {/* Overlay */}
                            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                            {/* Image */}
                            <img
                                src={Project_1}
                                className="transition-all duration-500 group-hover:scale-125"
                            />
                            {/* Pretitle */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-300 group-hover:bottom-44 md:group-hover:bottom-52" >
                                <span className="text-gradient text-[22px]">
                                    Presentation Website
                                </span>
                            </div>
                            {/* Title */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 lg:group-hover:bottom-40">
                                <span className="text-3xl text-white">
                                    Web Designer Website
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-11 z-50 transition-all duration-700 group-hover:bottom-14">
                                <a href="#" className="btn btn-sm py-5 px-12">
                                    Go to Project
                                </a>
                            </div>
                        </div>
                        {/* Project_2 */}
                        <div className="group relative overflow-hidden rounded-xl border-4 border-white/70 ">
                            {/* Overlay */}
                            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                            {/* Image */}
                            <img
                                src={Project_2}
                                className="transition-all duration-500 group-hover:scale-125"
                            />
                            {/* Pretitle */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-300 group-hover:bottom-44 md:group-hover:bottom-52" >
                                <span className="text-gradient text-[22px]">
                                    Presentation Website
                                </span>
                            </div>
                            {/* Title */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 lg:group-hover:bottom-40">
                                <span className="text-3xl text-white">
                                    Real Estate Website
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-11 z-50 transition-all duration-700 group-hover:bottom-14">
                                <a href="#" className="btn btn-sm py-5 px-12">
                                    Go to Project
                                </a>
                            </div>
                        </div>
                        {/* Project_3 */}
                        <div className="group relative overflow-hidden rounded-xl border-4 border-white/70 ">
                            {/* Overlay */}
                            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                            {/* Image */}
                            <img
                                src={Project_3}
                                className="transition-all duration-500 group-hover:scale-125"
                            />
                            {/* Pretitle */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-300 group-hover:bottom-44 md:group-hover:bottom-52" >
                                <span className="text-gradient text-[22px]">
                                    Contact Website
                                </span>
                            </div>
                            {/* Title */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 lg:group-hover:bottom-40">
                                <span className="text-3xl text-white">
                                    Built with Flask
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-11 z-50 transition-all duration-700 group-hover:bottom-14">
                                <a href="#" className="btn btn-sm py-5 px-12">
                                    Go to Project
                                </a>
                            </div>
                        </div>
                        {/* Project_4 */}
                        <div className="group relative overflow-hidden rounded-xl border-4 border-white/70 ">
                            {/* Overlay */}
                            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                            {/* Image */}
                            <img
                                src={Project_4}
                                className="transition-all duration-500 group-hover:scale-125"
                            />
                            {/* Pretitle */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-300 group-hover:bottom-44 md:group-hover:bottom-52" >
                                <span className="text-gradient text-[22px]">
                                    Ticket Booking Website
                                </span>
                            </div>
                            {/* Title */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 lg:group-hover:bottom-40">
                                <span className="text-3xl text-white">
                                    Built with PHP
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-11 z-50 transition-all duration-700 group-hover:bottom-14">
                                <a href="#" className="btn btn-sm py-5 px-12">
                                    Go to Project
                                </a>
                            </div>
                        </div>
                        {/* Project_5 */}
                        <div className="group relative overflow-hidden rounded-xl border-4 border-white/70 ">
                            {/* Overlay */}
                            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                            {/* Image */}
                            <img
                                src={Project_5}
                                className="transition-all duration-500 group-hover:scale-125"
                            />
                            {/* Pretitle */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-300 group-hover:bottom-44 md:group-hover:bottom-52" >
                                <span className="text-gradient text-[22px]">
                                    Weather Town API
                                </span>
                            </div>
                            {/* Title */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32 lg:group-hover:bottom-40">
                                <span className="text-3xl text-white">
                                    Using Html, Css, Js
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-11 z-50 transition-all duration-700 group-hover:bottom-14">
                                <a href="#" className="btn btn-sm py-5 px-12">
                                    Go to Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
