import React, { Component } from "react";
import Button from "../Button/Button";
import s from "./ImageGallery.module.css";
import { getImagesApi } from "../../utils/Api";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
class ImageGallery extends Component {
  state = {
    imgs: [],
    page: 1,
    isTarget: false,
    isModalOpen: false,
    loading: false,
  };

  onModalOpen = (e) => {
    // console.log(e.target);
    this.setState((prev) => ({
      isModalOpen: !prev.isModalOpen,
    }));
  };

  onHandelClick = () => {
    // console.log("+");
    this.setState({ isTarget: true });
  };

  getImages = ({ query, page }) => {
    this.setState({ loading: true });
    // console.log(1);
    // console.log(query);
    getImagesApi({ query, page })
      .then((images) =>
        this.setState((prev) => ({
          imgs: [...prev.imgs, ...images],
        }))
      )
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.query);
    const { query } = this.props;
    // const { page } = this.state;
    // const key = "22768638-b34a0dc747ee3cff056840f2a";

    if (prevProps.query !== query) {
      //   console.log(this.props.query);
      this.getImages({ query: query });
      this.setState({ page: 2, imgs: [] });

      //   this.setState({
      //     page: 1,
      //   });
      //   fetch(
      //     `https://pixabay.com/api/?q=${query}&page=1&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      //   )
      //     .then((res) => res.json())
      //     .then((res) => res.hits)
      //     .then((res) => this.setState({ imgs: res }));
      //   // .then((page = 1));
      //   this.setState({
      //     page: 2,
      //   });
    }
    if (this.state.isTarget) {
      this.setState((prev) => ({
        page: prev.page + 1,
      }));
      this.getImages({ query: this.props.query, page: this.state.page });
      // this.setState({ page: 1, imgs: [] });
      //   this.setState({
      //     page: prevState.page + 1,
      //   });
      //   fetch(
      //     `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      //   )
      //     .then((res) => res.json())
      //     .then((res) => res.hits)
      //     .then((res) =>
      //       this.setState((prevState) => ({
      //         imgs: [...prevState.imgs, ...res],
      //       }))
      //     )
      //     .then(this.state.imgs);
      this.setState({ isTarget: false });
    }
  }

  closeModal = () => this.setState({ isModalOpen: false, setImagePath: "" });

  render() {
    const { imgs, isModalOpen } = this.state;

    return (
      <div className={s.div}>
        <ul className={s.ImageGallery}>
          {/* {imgs.map((item) => (
            <li className={s.ImageGalleryItem}>
              <img
                onClick={this.onModalOpen}
                src={item.webformatURL}
                alt=""
                className={s.ImageGalleryItemImage}
              />
            </li>
          ))} */}
          <ImageGalleryItem
            isModalOpen={isModalOpen}
            images={imgs}
            fn={this.onModalOpen}
          />
        </ul>
        {isModalOpen ? <Modal closeModal={this.closeModal} /> : ""}
        {imgs.length > 0 && <Button click={this.onHandelClick} />}
      </div>
    );
  }
}

export default ImageGallery;
