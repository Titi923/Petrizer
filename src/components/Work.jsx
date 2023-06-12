// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// img
import Project_1 from '../assets/project_1.jpg';
//
import { Link } from 'react-scroll';

const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container mx-auto mt-10">
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
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="group relative mx-[20px] overflow-hidden rounded-xl border-2 border-white/50">
                            {/* overlay */}
                            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>
                            {/* img */}
                            <img
                                src={Project_1}
                                className="transition-all duration-500 group-hover:scale-125"
                            />
                            {/* pretitle */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-300 group-hover:bottom-40">
                                <span className="text-gradient">
                                    Presentation Website
                                </span>
                            </div>
                            {/* Title */}
                            <div className="absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-32">
                                <span className="text-3xl text-white">
                                    Web Designer Website
                                </span>
                            </div>
                            <div className=" absolute -bottom-full left-12 z-50 transition-all duration-700 group-hover:bottom-10">
                                <a href="#" className="btn btn-sm py-5 px-12">
                                    See more
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
