import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import WelcomeUser from './WelcomeUser';

function Documents() {
  return (
    <div className='container'>
      <Navbar />
      <Outlet />
      <Footer />
     <WelcomeUser name="Alice"age={14} />
    </div>
  );
}

export default Documents;
