import { Component } from 'react';
import { getPost } from 'components/api/fetchPictures';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import style from './app.module.css';

class App extends Component {
  state = {
    query: '',
    page: 1,
    data: [],
    error: null,
    isLoading: false,
    modalOpen: false,
    showBtn: false,
    largeImg: {},
  };

  getSearchKey = searchKey => {
    const query = searchKey.trim().replace(/ /g, '+');
    this.setState({ query });
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    ) {
      this.handleRequest();
    }
  }

  async handleRequest() {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const response = await getPost(query, page);
      this.setState(({ data }) => ({
        data: [...data, ...response.data.hits],
        showBtn: this.state.page < Math.ceil(response.data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showModal = (img, alt) => {
    this.setState({ modalOpen: true, largeImg: { img, alt } });
  };

  changeStateModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { getSearchKey, loadMore, changeStateModal, showModal } = this;
    const { data, isLoading, modalOpen, largeImg, showBtn } = this.state;

    const isPosts = Boolean(data.length);

    return (
      <div className={style.App}>
        <Searchbar getSearchKey={getSearchKey} />
        {isPosts && <ImageGallery data={data} showModal={showModal} />}
        {modalOpen && (
          <Modal changeStateModal={changeStateModal} largeImg={largeImg} />
        )}

        {isLoading && <Loader />}
        {showBtn && (
          <Button title="Load more" type="button" loadMore={loadMore} />
        )}
      </div>
    );
  }
}

export default App;
