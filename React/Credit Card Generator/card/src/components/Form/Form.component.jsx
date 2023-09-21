import { useState } from 'react'
import './From.style.css'

const Form = ({ getCardDetail }) => {
  const [value, setvalue] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    number: '',
    expiry: '',
    cvc: ''
  });

  const validation = (val) => {
    const currentYear = new Date().getFullYear() % 100;

    // Remove spaces for validation purposes
    const cardNumberWithoutSpaces = val.number.replace(/\s+/g, '');

    const newErrors = {
      name: /\d/.test(val.name) ? 'Name should not contain a numeric value' : '',
      number:
        /^\d{16}$/.test(cardNumberWithoutSpaces) && !/\D/.test(cardNumberWithoutSpaces)
          ? ''
          : 'Invalid card number',
      expiry:
        /^(0[1-9]|1[0-2])$/.test(val.month) && /^\d{2}$/.test(val.year) && parseInt(val.year, 10) >= currentYear
          ? ''
          : 'Invalid expiry date',
      cvc: /^\d{3}$/.test(val.cvc) ? '' : 'Invalid CVC',
    };

    // Additional validation for "MM" input
      if (parseInt(val.month, 10) > 12 || parseInt(val.month, 10) < 1) {
      newErrors.expiry = 'Month (MM) should be between 1 and 12';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every(error => error === '')) {
      getCardDetail({ ...value, number: val.number }); // Keep the spaces in the card number
    } else {
      console.log("BYE")
    }
    
  }

  return (
    <form>
      <div className="form-container">
        <div>
          <label htmlFor="name">CARDHOLDER NAME</label><br />
          <input type="text" className='l-input' placeholder='e.g. Jane Appleseed' onChange={(e) => {
            setvalue({ ...value, name: e.target.value })
          }} />
          <div className='error-message'>{errors.name}</div>
        </div>
        <div>
          <label htmlFor="number">CARD NUMBER</label><br />
          <input type="text" className='l-input' placeholder='e.g. 1234 5678 9123 0000' onChange={(e) => {
            setvalue({ ...value, number: e.target.value })
          }} />
          <div className='error-message'>{errors.number}</div>
        </div>
        <div className='cvc-expiray'>
          <div className='expiry' >
            <label htmlFor="">EXP. DATE (MM/YY)</label><br />
            <input type="number" className='month' placeholder='MM' onChange={(e) => {
              setvalue({ ...value, month: e.target.value })
            }} />
            <input type="number" className='year' placeholder='YY' onChange={(e) => {
              setvalue({ ...value, year: e.target.value })
            }} />
            <div className='error-message'>{errors.expiry}</div>
          </div>
          <div>
            <label htmlFor="name">CVC</label><br />
            <input type="number" className='s-input' placeholder='CVC' onChange={(e) => {
              setvalue({ ...value, cvc: e.target.value })
            }} />
            <div className='error-message'>{errors.cvc}</div>
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
