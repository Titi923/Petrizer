// Components
import Header from './components/Header';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';

function App() {
    return (
        <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
            <Header />
            <Banner />
            <Navbar />
            <About />
            <Work />
            <div className="h-[4000px]"></div>
        </div>
    );
}

export default App;
