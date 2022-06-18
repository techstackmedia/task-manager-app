import { MdDelete } from 'react-icons/md';
import footer from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div>
        <div>
          <MdDelete />
        </div>
        <div>
          <div>Cancel</div>
          <div>
            <button type="submit">Save</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
