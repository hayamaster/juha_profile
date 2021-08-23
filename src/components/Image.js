import React from 'react';
import './Image.css';
import japan1 from '../images/japan1.jpg';
import japan2 from '../images/japan2.jpg';
import japan3 from '../images/japan3.jpg';
import japan4 from '../images/japan4.jpg';
import japan5 from '../images/japan5.jpg';
import japan6 from '../images/japan6.jpg';
import japan7 from '../images/japan7.jpg';
import japan8 from '../images/japan8.jpg';
import japan9 from '../images/japan9.jpg';
import japan10 from '../images/japan10.jpg';
import japan11 from '../images/japan11.jpg';
import italy2 from '../images/italy2.jpg';

const images = [{
  src: japan1, title: '伏見稲荷大社', link: 'https://www.instagram.com/p/CLQ5KSMlpii82OmvHfSVgN9tSBZxB7uY599hc80/'
}, {
  src: japan2, title: '吉祥寺', link: 'https://www.instagram.com/p/CKDsmzWlnMTpzo2Eyq8Wtls5xwda-Feo7zeprU0/'
}, {
  src: japan3, title: '箱根温泉', link: 'https://www.instagram.com/p/CJgeGxTlKLSGMb9sKeZQYA-ST9Lo2EMfOGo48Q0/'
}, {
  src: japan4, title: 'スシロー', link: 'https://www.instagram.com/p/Bv3GGzcli-3DN7fn0VbYcKmk_76s6yORAQyO4U0/'
}, {
  src: japan5, title: 'いきなりステーキ',
}, {
  src: japan6, title: '伝串　新時代'
}, {
  src: japan7, title: '祇園四条'
}, {
  src: japan8, title: '河口湖'
},
{
  src: japan9, title: '浅草寺'
},
{
  src: japan10, title: '大江戸温泉'
},
{
  src: japan11, title: '赤墓ビーチ'
},
{
  src: italy2, title: 'colosseum'
}
]



function Image() {
  return (
    <div className="images">
      {images.map(image => {
        return (
          <a href={image.link} target='_blank'>
            <div className="image-container">
              <img src={image.src} alt={image.title} />
              <div className="image-title">{image.title}</div>
            </div>
          </a>
        )
      })}
    </div>
  )
};


export default Image;