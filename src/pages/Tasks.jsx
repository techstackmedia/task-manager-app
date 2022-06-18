import { useState } from 'react';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import Outcome from '../components/Outcome/Outcome';

const Tasks = ({ task }) => {
  const [show, setShow] = useState(true);

  if (!task || task.length === 0) {
    return <p>No List Yet</p>;
  }

  const handleClick = () => {
    setShow((prev) => {
      return !prev;
    });
  };

  const outcome = task.map((item) => {
    return (
      <div key={item.time} style={{ marginTop: 10 }}>
        <Header text={item.text} id={item.id} />
        <Outcome name={item.name} description={item.description} />
      </div>
    );
  });

  const elem = show ? (
    <div>
      <Body />
      <Footer />
    </div>
  ) : (
    <div style={{ marginTop: '20px' }}>{outcome}</div>
  );

  return (
    <>
      <Header handleTaskClick={handleClick} />
      {elem}
    </>
  );
};

export default Tasks;
