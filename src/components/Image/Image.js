import './Image.css';

function Image({ link }) {
  return (
    <li className="departure__image-item">
      <img className="departure__image" src={link} alt="departure place" />
    </li>
  )
}

export default Image;