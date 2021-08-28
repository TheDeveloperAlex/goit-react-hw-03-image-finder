import React, { Component } from "react";
import Button from "../Button/Button";
import s from "./ImageGallery.module.css";
import { getImagesApi } from "../../utils/Api";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import st from "../Modal/Modal.modal.css";
class ImageGallery extends Component {
  state = {
    imgs: [],
    page: 1,
    isTarget: false,
    loading: false,
  };

  getImages = ({ query, page }) => {
    this.setState({ loading: true });
    getImagesApi({ query, page })
      .then((images) =>
        this.setState((prev) => ({
          imgs: [...prev.imgs, ...images],
        }))
      )
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;

    if (prevProps.query !== query) {
      this.getImages({ query: query });
      this.setState({ page: 2, imgs: [] });
    }
    if (this.state.isTarget) {
      this.setState((prev) => ({
        page: prev.page + 1,
      }));
      this.getImages({ query: this.props.query, page: this.state.page });
      this.setState({ isTarget: false });
    }
  }

  onHandelClick = () => {
    this.setState({ isTarget: true });
  };

  render() {
    const { imgs, loading } = this.state;
    return (
      <>
        {loading && (
          <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        <div className={s.div}>
          <ul className={s.ImageGallery}>
            <ImageGalleryItem images={imgs} />
          </ul>

          {imgs.length > 0 && (
            <Button click={this.onHandelClick} page={this.state.page} />
          )}
        </div>
      </>
    );
  }
}

export default ImageGallery;
