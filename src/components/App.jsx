import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import style from './app.module.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className={style.App}>
        <Searchbar />
        <ImageGallery />
        <Button title="Load more" type="button" />
      </div>
    );
  }
}

export default App;
