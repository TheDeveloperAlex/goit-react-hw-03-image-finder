import s from './ImageGalleryItem.module.css';
import React, { Component } from 'react'

class ImageGalleryItem extends Component {
    
    render() {
        return (
           <>
            {
              this.props.images.map((item) => (
            <li className={s.ImageGalleryItem}>
              <img
                onClick={this.props.fn}
                src={item.webformatURL}
                alt=""
                className={s.ImageGalleryItemImage}
            />
                      
            </li>
            ))  
            } 
            
        </> 
        );
    }
}

export default ImageGalleryItem;
// const ImageGalleryItem = ({ images, isModalOpen, fn }) => {
//     console.log(images);
//     return (
        
        
        
        
        
//     );
// }

// export default ImageGalleryItem;