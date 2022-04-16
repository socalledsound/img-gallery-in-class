import './GalleryItem.css'


const GalleryItem = ({img}) => {
    return (
        <div className="gallery-item-container">
            <img className="gallery-img" src={img} alt='null'/>
        </div>
    )
}

export default GalleryItem