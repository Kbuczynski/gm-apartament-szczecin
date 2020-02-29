import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import GalleryData from "./GalleryData";

 
class Gallery extends Component {
  render() {
    return (
        <section className="gallery" id="galeria">
            <h2 className="gallery__title">Galeria</h2>

            <ImageGallery 
                items={GalleryData} 
                thumbnailPosition='left'
                lazyLoad={true}
                showFullscreenButton={false}
                showPlayButton={false}
                autoPlay={true}
                showIndex={true}
                slideInterval={3000}
            />
        </section>
    );
  }
}

export default Gallery;