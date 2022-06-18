import { MdAdd } from 'react-icons/md';
import header from './Header.module.css';

const Header = ({ handleTaskClick, text, id }) => {
  return (
    <header className={header.header}>
      <nav>
        <div>
          <div>{text}</div>
          <div>{id}</div>
        </div>
        <div>
          <div>
            <MdAdd onClick={handleTaskClick} />
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  text: 'Tasks',
};

export default Header;
