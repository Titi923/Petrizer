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
                    <button className="btn btn-lg"><a href="#contact">Get in Touch</a></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
