import { MdEdit, MdMoreHoriz, MdEmail, MdLocalPhone, MdChat } from 'react-icons/md';
import outcome from './Outcome.module.css';

const Outcome = () => {
  return (
    <section className={outcome.outcome}>
      <div>
        <div>
          <div className={outcome.person}>
            <div>
              <img
                src="https://scontent.flos1-2.fna.fbcdn.net/v/t1.6435-9/49696314_785776965108318_9026785005690421248_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHTC0TQGvc5irOIfOfe2ApXdyBz6INqteB3IHPog2q14NWomOH5bClwv92jnx3Zr3e5Q7iYLNYfQRj0LvclG0Q-&_nc_ohc=r1tQHwyHQv4AX9diifq&_nc_ht=scontent.flos1-2.fna&oh=00_AT-ur8Z6gs4WYQdV71eEZ1J9Kx4HZNYegSqrEAK7GtRZUw&oe=62D454C5"
                width={50}
                height={50}
                alt="bello's avatar"
              />
            </div>
            <div>
              <div>$12</div>
              <div>20% on 1/16/2022</div>
            </div>
          </div>
          <div className={outcome.edit}>
            <div className={outcome.editButton}>
              <MdEdit />
            </div>
            <div className={outcome.menuButton}>
              <MdMoreHoriz />
            </div>
          </div>
        </div>
        <div className={outcome.description}>
          <div>Hello World</div>
        </div>
        <div className={outcome.end}>
          <div className={outcome.contact}>
            <div>Contact</div>
            <div>Bello Osagie</div>
          </div>
          <div className={outcome.icons}>
            <div>
              <MdEmail />
            </div>
            <div>
              <MdChat className={outcome.chat} />
            </div>
            <div>
              <MdLocalPhone />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcome;
