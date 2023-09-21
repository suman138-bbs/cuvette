import React, { useState } from 'react'
import Form from './components/Form/Form.component'
import GradientSvg from './assets/gradientbg.svg'
import Ellipse1 from './assets/Ellipse1.png'
import Ellipse2 from './assets/Ellipse2.png'
import Rectangle from './assets/Rectangle.png'
import RectangleSm from './assets/RectangleSm.png'
const App = () => {
  const [name,setName] =useState('JANE APPLESEED')
  const [number,setNumber] =useState('0000 0000 0000 0000')
  const [month,setMonth] =useState('00')
  const [year,setYear] =useState('00')
  const [cvc,setCvc] =useState('000')
  const getCardDetail = ({name,number,month,year,cvc}) => {
    setName(name)
    setNumber(number)
    setMonth(month)
    setYear(year)
    setCvc(cvc)
    
  }
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
                <p className='card-number'>{ number}</p>
                <ul>
                  <li>{ name}</li>
                  <li>{month}/{ year}</li>
                </ul>
              </div>
            </article>
            <article className='back-card'>
              <img src={Rectangle} alt="" srcset="" />
              <img src={RectangleSm} alt="" srcset="" />
              <p>{ cvc}</p>
            </article>
          </div>
          <div>
            <Form getCardDetail={ getCardDetail} />
          </div>
        </div>
        
      </section>
    </>
  )
}

export default App
