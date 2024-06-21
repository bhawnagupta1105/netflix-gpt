import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardPayment = () => {
  const [checkedIn, setCheckedIn] = useState(false);
  const [showCheckboxAlert, setShowCheckboxAlert] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [showFormAlert, setShowFormAlert] = useState(false);

  const handleCheckboxChange = () => {
    setCheckedIn(!checkedIn);
    if (showCheckboxAlert) setShowCheckboxAlert(false); // Hide checkbox alert when checkbox is toggled
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Check if the checkbox is checked
    if (!checkedIn) {
      setShowCheckboxAlert(true);
      return; // Exit function if checkbox is not checked
    }

    // Check if any of the required fields are empty
    if (!cardNumber || !expirationDate || !cvv || !nameOnCard) {
      setShowFormAlert(true);
      return; // Exit function if any required field is empty
    }

    // Proceed with form submission if all validations pass
    alert('Form submitted successfully!');
  };

  return (
    <div className="flex justify-center pt-[6%] pl-5 pr-10 md:pl-[20%] md:pr-[20%] pb-[6%]">
      <div>
        <div className="text-lg md:text-xl lg:text-2xl">
          STEP <b>4</b> OF <b>4</b>
        </div>
        <br />
        <div className="text-xl md:text-3xl lg:text-7xl font-bold">
          Choose the plan that's right for you.
        </div>
        <br />
        <br />
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <img className="h-20 w-20" src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png" alt="visa" />
            <img className="h-20 w-20" src="https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Master_Card-256.png" alt="mastercard" />
            <img className="h-20 w-29 rounded-2xl" src="https://w7.pngwing.com/pngs/181/728/png-transparent-diners-club-international-credit-card-discover-card-logo-payment-credit-card-blue-text-plus.png" alt="dinnersClub" />
          </div>
          <div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 flex justify-between items-center text-2xl rounded-md mt-4">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="w-full p-2"
            />
          </div>
          <div className="flex space-x-4 mt-4">
            <div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 rounded-md w-full">
              <input
                type="text"
                placeholder="Expiration Date (MM/YY)"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
                className="w-full p-2"
              />
            </div>
            <div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 rounded-md w-full">
              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                className="w-full p-2"
              />
            </div>
          </div>
          <div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 flex justify-between items-center text-2xl rounded-md mt-4">
            <input
              type="text"
              placeholder="Name on card"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              required
              className="w-full p-2"
            />
          </div>
          {showFormAlert && (
            <div className="text-red-500 text-lg mt-2">
              Please fill in all required fields.
            </div>
          )}
          <br/>
          <div className="border-4 border-neutral-300 bg-gray-300 hover:bg-gray-400 rounded-lg p-3 text-2xl flex">
            <div className="w-1/2 font-bold">
              <span>₹199/month</span>
              <br/>
              Basic
            </div>
            <div className="w-1/2">
              <div className="flex justify-end pt-3 underline text-blue-500">
                <Link to="#">Change</Link>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <div>
            <span className='text-xl text-slate-600'>
              Any payment above ₹ 2000 shall need additional authentication.
              By checking the checkbox below, you agree to our Terms of Use, Privacy Statement, and that you are over 18. 
            </span>
            <br/>
            <br/>
            <span className='text-xl text-slate-600'>
              Netflix will automatically continue your membership and charge the membership fee (currently ₹199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.
            </span>
            <div className="mt-4">
              <label className="text-2xl flex items-center">
                <input 
                  type="checkbox" 
                  className="hidden peer" 
                  checked={checkedIn} 
                  onChange={handleCheckboxChange} 
                />
                <span className="w-8 h-8 bg-white border-2 border-gray-400 rounded-md flex justify-center items-center m-2 peer-checked:bg-slate-500 peer-checked:m-2 peer-checked:border-blue-500 peer-checked:after:content-[''] peer-checked:after:block peer-checked:after:border-solid peer-checked:after:border-white peer-checked:after:border-r-2 peer-checked:after:border-b-2 peer-checked:after:w-3 peer-checked:after:h-6 peer-checked:after:rotate-45"></span>
                <span className="ml-2 text-gray-500">I agree</span>
              </label>
              {showCheckboxAlert && (
                <div className="text-red-500 text-lg mt-2">
                  You must acknowledge that you have read and agree to the Terms of Use to continue.
                </div>
              )}
            </div>
            <br/>
          </div>
          <div className='text-center'>
            <button 
              type="submit" 
              className="bg-red-600 rounded-md text-white w-11/12 text-xl md:text-2xl lg:text-4xl p-[1%] pt-[1%] pb-[1%] md:pt-5 md:pb-5"
            >
              Start Membership
            </button>
          </div>
        </form>
        <br/>
        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
        <Link className='flex underline text-blue-400' to="#">Learn More</Link>
      </div>
    </div>
  );
}

export default CardPayment;
