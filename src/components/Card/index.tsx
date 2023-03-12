import './index.css';

import { Props } from './models';

const Card = ({ data: { name, description, img, breed } }: Props) => (
  <div
    className="card"
    role="card"
  >
    <img
      className="card-img"
      src={img}
    />
    <h4>{name}</h4>
    <p className="breed">{breed}</p>
    <p>{description}</p>
  </div>
);

export default Card;
