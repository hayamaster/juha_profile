import React from 'react';
import './Image.css';
import japan1 from './images/japan1.jpg';
import japan2 from './images/japan2.jpg';
import japan3 from './images/japan3.jpg';
import japan4 from './images/japan4.jpg';
import japan5 from './images/japan5.jpg';
import japan6 from './images/japan6.jpg';
import japan7 from './images/japan7.jpg';
import japan8 from './images/japan8.jpg';
import japan9 from './images/japan9.jpg';
import japan10 from './images/japan10.jpg';
import japan11 from './images/japan11.jpg';
import italy2 from './images/italy2.jpg';

const images = [{
  src: japan1, title: 'japan1'
}, {
  src: japan2, title: 'japan2'
}, {
  src: japan3, title: 'japan3'
}, {
  src: japan4, title: 'japan4'
}, {
  src: japan5, title: 'japan5'
}, {
  src: japan6, title: 'japan6'
}, {
  src: japan7, title: 'japan7'
}, {
  src: japan8, title: 'japan8'
},
{
  src: japan9, title: 'japan9'
},
{
  src: japan10, title: 'japan10'
},
{
  src: japan11, title: 'japan11'
},
{
  src: italy2, title: 'italy2'
}
]

function Image() {
  return (
    <div className="images">
      {images.map(image => {
        return (
          <div className="image-container">
            <img src={image.src} alt={image.title} />
            <div className="image-title">{image.title}</div>
          </div>
        )
      })}
    </div>
  )
};


export default Image;