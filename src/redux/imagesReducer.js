import image1 from '../images/photo1.png';
import image2 from '../images/photo2.png';
import image3 from '../images/photo3.png';

const initialState = {
  images: [
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
  ]
}

export const imagesReduser = (state = initialState, action) => {
  return state;
}