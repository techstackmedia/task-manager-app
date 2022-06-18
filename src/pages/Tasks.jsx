import { useState } from 'react';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import Outcome from '../components/Outcome/Outcome';

const Tasks = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => {
      return !prev;
    });
  };

  const toggleBodyFooterStyle = {
    display: show ? 'block' : 'none',
  };

  const elem = show ? (
    <>
      <div style={toggleBodyFooterStyle}>
        <Body />
        <Footer />
      </div>
    </>
  ) : (
    <div style={{ marginTop: '20px' }}>
      <Header text="opportunities" />
      <Outcome />
    </div>
  );

  return (
    <>
      <Header handleTaskClick={handleClick} />
      {elem}
    </>
  );
};

export default Tasks;
