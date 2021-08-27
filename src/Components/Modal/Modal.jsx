import React, { Component } from "react";
import s from './Modal.modal.css';

class Modal extends Component {


    componentDidMount() {
        window.addEventListener("keydown", this.handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "hidden";
        
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleEscape);
        const body = document.querySelector("body");
        body.style.overflow = "auto";
    }

    handleEscape = (e) => e.code === "Escape" && this.props.closeModal();

    onOverlayClick = ({ target, currentTarget }) => {
        target === currentTarget && this.props.closeModal();
    };

    render() {
        return (
            <>
                <div className={s.Overlay} onClick={this.onOverlayClick}>
                    <div className={s.Modal} id="Modal">
                        <img src={this.props.img} alt="" />
                    </div>
                </div>
            </>    
            
        );
    }
}

export default Modal;