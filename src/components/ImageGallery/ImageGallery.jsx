import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  state = {};
  render() {
    return (
      <ul className="gallery">{/* <!-- Набір <li> із зображеннями --> */}</ul>
    );
  }
}

export default ImageGallery;
