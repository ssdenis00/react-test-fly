import './Image.css';
import image from '../../images/photo1.png';

function Image() {
  return (
    <li className="departure__image-item">
      <img className="departure__image" src={image} alt="departure place" />
    </li>
  )
}

export default Image;