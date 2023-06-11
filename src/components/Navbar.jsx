// Import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare, BsBriefcaseFill, BsChatDots } from 'react-icons/bs';

// Links
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="fixed bottom-2 lg-bottom-8 w-full overflow-hidden z-50">
            <div className="container mx-auto">
                {/* Nav inner */}
                <div className="w-full bg-black/20 h-[100px] backdrop-blur-2xl rounded-full max-w-[360px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
                    <Link
                        to="home"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Link
                        to="about"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
                    >
                        <BiUser />
                    </Link>
                    <Link
                        to="work"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
                    >
                        <BsBriefcase />
                    </Link>
                    <Link
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="cursor-pointer w-[50px] h-[50px] flex justify-center items-center"
                    >
                        <BsChatDots />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
