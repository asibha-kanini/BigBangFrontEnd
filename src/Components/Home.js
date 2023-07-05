
// import React from 'react';
// import './Home.css';




// const Home = () => {
//   return (
//    <div className="home-container">
//    <h1 className="home-title">Welcome to our HealthCare</h1>
//    <p className='title'>We Are Here to Make You Feel Good</p>
 
//    <footer className="footer">
//      <div className="footer-container">
//        <div className="footer-section">
//          <h2>Hospital Address</h2>
//          <p>123 OMR, CHENNAI</p>
//          <p>Tamil Nadu, India -636001</p>
//        </div>
//        <div className="footer-section">
//          <h2>Phone Number</h2>
//          <p className='hel'>+1 123 456 7890</p>
//        </div>
//        <div className="footer-section">
//          <h2>Email</h2>
//          <p>info@hospital.com</p>
//        </div>
       
      
//      </div>
//    </footer>
//  </div>
 
//   );
// };

// export default Home;





import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Animation effect on component mount
    setAnimationClass('animate-fade-in');

    // Clean up animation class on component unmount
    return () => {
      setAnimationClass('');
    };
  }, []);

  return (
    <div className={`home-container ${animationClass}`}>
      <h1 className="home-title">Welcome to our HealthCare</h1>
      <p className='title'>We Are Here to Make You Feel Good
      <li>
      The hospital that cares.</li><br/>
      <li>
          We are here to hear and heal your health problems.</li><br/>
<li>It is not only about the money.</li><br/>
<li>More than just treating patients.</li><br/>
<li>The best doctors on the planet.</li><br/>
<li>We collaborate for better healthcare.</li><br/>
<li>Healthcare at its finest.</li><br/>
<li>We work for complete healing.
      </li><br/>
      </p>
      

      <footer className={`footer ${animationClass}`}>
        <div className="footer-container">
          <div className="footer-section">
            <h2>Hospital Address</h2>
            <p>123 OMR, CHENNAI</p>
            <p>Tamil Nadu, India -636001</p>
          </div>
          <div className="footer-section">
            <h2>Phone Number</h2>
            <p className='hel'>+1 123 456 7890</p>
          </div>
          <div className="footer-section">
            <h2>Email</h2>
            <p>info@hospital.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;


