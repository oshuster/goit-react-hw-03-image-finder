import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import style from './app.module.css';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {};
  render() {
    return (
      <div className={style.App}>
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
