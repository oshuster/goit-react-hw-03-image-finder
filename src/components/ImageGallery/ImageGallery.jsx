import { Component } from 'react';
import getPost from 'components/api/fetchPictures';
// import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import style from './imageGallery.module.css';
// import data from '../../temp/items.json';

class ImageGallery extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    getPost('dog', 2);
  }
  render() {
    return (
      <ul className={style.ImageGallery}>
        {/* <ImageGalleryItem data={data} /> */}
      </ul>
    );
  }
}

export default ImageGallery;
