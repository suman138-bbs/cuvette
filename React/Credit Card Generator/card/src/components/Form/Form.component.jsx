import './From.style.css'

const Form = () => {
  return (
    <div className="form-container">
      <div>
        <label htmlFor="name">CARDHOLDER NAME</label><br/>
        <input type="text" />
      </div>
      <div>
       <label htmlFor="name">EXP.DATE(MM/YY)</label><br/>
        <input type="number"/>
      </div>
      <div className='cvc-expiray'>
        <div >
         <label htmlFor="name">CVC</label><br/>
        <input type="number"/>
        </div>
        <div>
           <label htmlFor="name">EXP.DATE(MM/YY)</label><br/>
          <input type="number"/>
        </div>
        
      </div>
      
     <div>
          <button>Confirm</button>
        </div>
      
    </div>
  )
}

export default Form