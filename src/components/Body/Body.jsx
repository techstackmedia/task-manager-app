import { MdKeyboardArrowDown } from 'react-icons/md';
import body from './Body.module.css';

const Body = () => {
  return (
    <section className={body.body}>
      <div>
        <div>
          <div>Task Description</div>
          <div>
            <MdKeyboardArrowDown />
            <input type="text" name="" id="" />
          </div>
        </div>
        <div>
          <div>Date</div>
          <div>
            <input type="date" name="" id="" />
            <input type="time" name="" id="" />
          </div>
        </div>
        <div>
          <div>Assign User</div>
          <div>
            <select>
              <option>Bello Osagie</option>
              <option>Jerry</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
