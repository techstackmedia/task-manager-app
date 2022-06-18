import { MdDelete } from 'react-icons/md';
import footer from './Footer.module.css';

const Footer = ({ handleTaskDelete, handleSubmit }) => {
  return (
    <footer className={footer.footer}>
      <div>
        <div>
          <MdDelete onClick={handleTaskDelete} />
        </div>
        <div>
          <div>Cancel</div>
          <div>
            <button onClick={handleSubmit} type="submit">
              Save
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
