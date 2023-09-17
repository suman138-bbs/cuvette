import React from 'react'
// import Card from './components/Card/Card.component';
// import Form from './components/Form/Form.component';
import Form from './components/Form/Form.component'
import GradientSvg from './assets/gradientbg.svg'
import Ellipse1 from './assets/Ellipse1.png'
import Ellipse2 from './assets/Ellipse2.png'
import Rectangle from './assets/Rectangle.png'
import RectangleSm from './assets/RectangleSm.png'
const App = () => {
  return (
    <>
      <section>
        <div className='gradient-bg-container'>
          <img src={GradientSvg} alt="" />
        </div>
        <div className='card-from-container'>
          <div className='card-container'>
            <article className='front-card'>
               <img src={Ellipse1} alt="" srcset="" className='ellipse1'/>
               <img src={Ellipse2} alt="" srcset="" className='ellipse2' />
              <div className='card-detal'>
                <p className='card-number'>9865 9757 4676 7645</p>
                <ul>
                  <li>Suman Bhandari</li>
                  <li>00/00</li>
                </ul>
              </div>
            </article>
            <article className='back-card'>
              <img src={Rectangle} alt="" srcset="" />
              <img src={RectangleSm} alt="" srcset="" />
              <p>233</p>
            </article>
          </div>
          <div>
            <Form/>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default App
