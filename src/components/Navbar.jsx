// Import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import {
    BsClipboardData,
    BsBriefcase,
    BsChatSquare,
    BsBriefcaseFill,
    BsChatDots,
} from 'react-icons/bs';

// Links
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="lg-bottom-8 fixed bottom-4 z-50 w-full overflow-hidden">
            <div className="container mx-auto">
                {/* Nav inner */}
                <div className="mx-auto flex h-[80px] w-full max-w-[280px] items-center justify-between rounded-full bg-black/20 px-5 text-2xl text-white/50 backdrop-blur">
                    <Link
                        to="home"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-120}
                        className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full"
                    >
                        <BiHomeAlt />
                    </Link>
                    <Link
                        to="about"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full"
                    >
                        <BiUser />
                    </Link>
                    <Link
                        to="work"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full"
                    >
                        <BsBriefcase />
                    </Link>
                    <Link
                        to="contact"
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={200}
                        className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full"
                    >
                        <BsChatDots />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
