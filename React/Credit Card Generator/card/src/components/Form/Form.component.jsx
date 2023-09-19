import { useState } from 'react'
import './From.style.css'



const Form = ({getCardDetail}) => {
  const [value, setvalue] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc:''
    
  })
  const [error, setError] = useState('');

  const validation = (val) => {
   
    // if (val.name.) {
          
    //     }
    getCardDetail(value)
  }
  
  return (
    <form >
      <div className="form-container">
      <div>
        <label htmlFor="name">CARDHOLDER NAME</label><br/>
        <input type="text" className='l-input' placeholder='e.g. Jane Appleseed' onChange={(e) => {
          setvalue({...value,name:e.target.value})
          
        }}/>
      </div>
      <div>
       <label htmlFor="number">CARD NUMBER</label><br/>
        <input type="text" className='l-input' placeholder='e.g. 1234 5678 9123 0000' onChange={(e) => {
          setvalue({...value,number:e.target.value})}}/>
      </div>
      <div className='cvc-expiray'>
        <div className='expiry' >
          <label htmlFor="">EXP. DATE (MM/YY)</label><br />
          <input type="number" className='month' placeholder='MM' onChange={(e) => {
          setvalue({...value,month:e.target.value})
          
        }} />
          <input type="number" className='year'  placeholder='YY'  onChange={(e) => {
          setvalue({...value,year:e.target.value})
          
        }}/>
        </div>
        <div>
          <label htmlFor="name">CVC</label><br/>
          <input type="number" className='s-input' placeholder='CVC' onChange={(e) => {
          setvalue({...value,cvc:e.target.value})
          
        }}/>
        </div>
        
      </div>
      
        <div className='confirm-btn' >
          <button onClick={(e) => {
             e.preventDefault()
          validation(value)
        }}>
          Confirm</button>
        </div>
      
    </div>
    </form>
  )
}

export default Form