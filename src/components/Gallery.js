import { Component } from 'react';
import GalleryItem from './GalleryItem'
import './Gallery.css';

class Gallery extends Component {

    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
    }

    clickHandler = () => {
        console.log(this)
        const { counter } = this.state;
        const { images } = this.props;
        let newVal = counter + 1;
        if(newVal > images.length - 1){
            newVal = 0
        }
        this.setState({counter: newVal})
    }

    render(){
        const { images } = this.props;
        const { counter } = this.state;
        return (
            <div className='gallery-container'>
                <GalleryItem  img={images[counter]} />
                <button onClick={this.clickHandler}> increment </button>
            </div>
        )

    }
}


export default Gallery