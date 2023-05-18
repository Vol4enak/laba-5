import { carsItems } from '../data/cars';
import BMW from './img/Audi-A8-Edition-21.jpg';
import Audi from './img/BMW-M2-Coupe.jpg';
import Bentley from './img/bentley-continental-gt-speed-black-edition.jpg';
import Mercedes from './img/mercedes-benz-coupe.jpg';
export const App = () => {
  const cars = [
    { name: 'BMW M2 Coupe', price: '40000', img: BMW },
    { name: 'Audi-A8-Edition ', price: '39000', img: Audi },
    { name: 'bentley-continental-gt ', price: '52000', img: Bentley },
    {
      name: 'mercedes-benz-coupe',
      price: '42000',
      img: Mercedes,
    },
  ];

  return (
    <div>
      {cars.map(({ name, price, img }) => {
        return (
          <div className="card" key={name}>
            <div className="card-img">
              <img src={img} alt={name} />
            </div>
            <h3>{name}</h3>
            <p>{price}</p>
          </div>
        );
      })}
    </div>
  );
};
