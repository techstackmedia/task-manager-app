import { MdAdd } from 'react-icons/md';
import header from './Header.module.css';

const Header = () => {
  return (
    <header className={header.header}>
      <nav>
        <div>
          <div>Tasks</div>
          <div>0</div>
        </div>
        <div>
          <div>
            <MdAdd />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
