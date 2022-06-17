import footer from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div>
        <div>Cancel</div>
        <div>
          <button>Save</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
