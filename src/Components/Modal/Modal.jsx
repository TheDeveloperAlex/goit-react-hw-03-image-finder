import React, { Component } from "react";
import s from './Modal.module.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Modal extends Component {
    state = {
        imgs: [],
        id: '',
        imgModal: '',
        loading: false,
    }

     getImage = () => {
        // this.setState({ loading: true });
        
        return this.props.imgs.find(item => (
            item.id.toString() === this.props.id.toString()
        ))
            
            //  this.setState({ loading: false })
            
       
        }


    componentDidMount() {
        window.addEventListener("keydown", this.handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        
        console.log(this.getImage().largeImageURL);

        this.setState({ imgModal: this.getImage().largeImageURL });

    }       
            

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    }

    handleEscape = (e) => e.code === "Escape" && this.props.closeModal();

    onOverlayClick = ({ target, currentTarget }) => {
        target === currentTarget &&
            this.props.closeModal();
    };

    render() {
        const { imgs, imgModal, id, loading } = this.state;
        

        

        return (
            <>
                <div className={s.Overlay} onClick={this.onOverlayClick}>
                    <div className={s.Modal} id="Modal">
                        {loading && <Loader
            type="Circles"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          /> }
                        <img src={this.state.imgModal} alt="" className={s.img} />
                    </div>
                </div>
            </>    
            
        );
    }
}

export default Modal;