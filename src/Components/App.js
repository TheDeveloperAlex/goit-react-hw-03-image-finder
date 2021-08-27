import React, { Component } from 'react'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
    state = {
        name: '',
    }
    
    onSubmit = (query) => {
        this.setState({ name: query })
        console.log(query);
        
         console.log(this.state.name);
     }

    render() {
        return (
            <>
                <Searchbar onSubmit={this.onSubmit} />
                <ToastContainer />
                <ImageGallery query={this.state.name} />
                
            </>
        );
    }
}

export default App;