import Navbar from './Navbar/Navbar'
import './Header.css';


const Header = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <>
    <header>
        <h1 className='nameTitle' onClick={scrollTop}>JORGE</h1>
        <Navbar />
    </header>
    </>
  );
};

export default Header;
