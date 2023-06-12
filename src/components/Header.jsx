// Images
import Logo from '../assets/Logo.svg';

const Header = () => {
    return (
        <header className="py-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#">
                        <img src={Logo} alt='Logo' className='w-[200px]'/>
                    </a>
                    {/* Button */}
                    <a href="#contact"><button className='btn btn-lg'>Get in Touch</button></a>
                </div>
            </div>
        </header>
    );
};

export default Header;
