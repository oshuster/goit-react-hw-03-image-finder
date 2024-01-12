import style from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ data }) => {
  const content = data.hits.map(({ id, largeImageURL, webformatURL, tags }) => (
    <li key={id} className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={style.ImageGalleryItem_image}
      />
    </li>
  ));
  return content;
};

export default ImageGalleryItem;
