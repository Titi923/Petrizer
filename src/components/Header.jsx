// Images
import Logo from '../assets/Logo.svg';

const Header = () => {
    return (
        <header className="py-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#">
                        <img src={Logo} alt="" width={100} height="300px"/>
                    </a>
                    {/* Button */}
                    <button className="btn btn-sm">Resume</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
