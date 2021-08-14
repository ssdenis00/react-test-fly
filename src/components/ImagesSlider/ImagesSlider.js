import './ImagesSlider.css';
import { connect } from 'react-redux';
import Image from '../Image/Image';

function ImagesSlider({ images }) {
  return (
    <div className="container-shadow">
      <ul className="departure__images">
        {images.map((image, i) => {
          return (<Image link={image} key={i} />)
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return { images: state.images.images };
}

export default connect(mapStateToProps, null)(ImagesSlider);