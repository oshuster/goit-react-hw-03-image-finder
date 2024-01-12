import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import style from './imageGallery.module.css';
import data from '../../temp/items.json';

class ImageGallery extends Component {
  state = {
    data: [],
  };
  render() {
    return (
      <ul className={style.ImageGallery}>
        <ImageGalleryItem data={data} />
      </ul>
    );
  }
}

export default ImageGallery;
