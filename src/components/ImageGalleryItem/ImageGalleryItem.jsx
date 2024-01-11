import { Component } from 'react';
import items from '../../temp/items.json';

class ImageGalleryItem extends Component {
  state = {};
  render() {
    console.log(items);
    return (
      <li className="gallery-item">
        <img src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
