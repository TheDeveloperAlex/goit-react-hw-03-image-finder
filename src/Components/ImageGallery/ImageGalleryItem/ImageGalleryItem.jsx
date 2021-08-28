import s from './ImageGalleryItem.module.css';
import React, { Component } from 'react'
import Modal from "../../Modal/Modal";

class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
        id: '',

    }

    onModalOpen = (e) => {
    console.log(e.target);
    
        this.setState({ id: e.target.id });
    this.setState((prev) => ({
    
      isModalOpen: true,
        
    }));
    
    };

        closeModal = () => this.setState({ isModalOpen: false, setImagePath: "" });
    
    render() {
        const { id } = this.state;
        
        return (
           <>
            {
              this.props.images.map((item) => (
            <li className={s.ImageGalleryItem}>
              <img
                onClick={this.onModalOpen}
                          src={item.webformatURL}
                          id={item.id}
                alt=""
                className={s.ImageGalleryItemImage}
                          
                      />
                      {/* {console.log(item.largeImageURL) } */}
                      
                  </li>
                   
              ))
                    
            } 
            {this.state.isModalOpen && <Modal closeModal={this.closeModal} id={id} imgs={this.props.images} /> }
        </> 
        );
    }
}

export default ImageGalleryItem;