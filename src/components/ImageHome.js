import React from 'react';
import './ImageHome.css';
import argentina from '../images/argentina.jpg';
import chile1 from '../images/chile1.jpg';
import chile2 from '../images/chile2.jpg';
import chile3 from '../images/chile3.jpg';
import chile4 from '../images/chile4.jpg';
import bolivia1 from '../images/bolivia1.jpg';
import bolivia2 from '../images/bolivia2.jpg';
import bolivia3 from '../images/bolivia3.jpg';
import bolivia4 from '../images/bolivia4.jpg';
import bolivia5 from '../images/bolivia5.jpg';

const images = [{
  src: argentina, title: 'El calafate/nGlacier', link: 'https://www.instagram.com/p/B_aYNk-JdTZ/'
}, {
  src: chile1, title: 'San pedro de atacama', link: 'https://www.instagram.com/p/CGrRHvoJhhC/'
}, {
  src: chile2, title: 'San pedro de atacama', link: 'https://www.instagram.com/p/CGgxIt8J1xw/'
}, {
  src: chile3, title: 'Laguna Verde', link: 'https://www.instagram.com/p/CRaxoRapTRb/'
}, {
  src: chile4, title: 'Laguna Colorada', link: 'https://www.instagram.com/p/CS9hLQupZRo/'
}, {
  src: bolivia1, title: 'Salar de Uyuni'
}, {
  src: bolivia2, title: 'Salar de Uyuni'
}, {
  src: bolivia3, title: 'Salar de Uyuni'
}, {
  src: bolivia4, title: 'Machu Picchu'
}, {
  src: bolivia5, title: 'Aguas Calientes'
}
]

function ImageHome() {
  return (
    <div className='images'>
      {images.map(image => {
        return (
          <a href={image.link} target='_blank' rel='noreferrer'>
            <div className='image-container'>
              <img src={image.src} alt={image.title} />
              <div className='image-title'>{image.title}</div>
            </div>
          </a>
        )
      })}
    </div>
  );
}

export default ImageHome;