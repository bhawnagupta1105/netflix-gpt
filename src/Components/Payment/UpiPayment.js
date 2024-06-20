import { Link } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";

const data = [
  { label: 'BHIM', value: 'BHIM',image: 'https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-64.png' },
  { label: 'Paytm', value: 'Paytm',image: 'https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-64.png' },
  { label: 'PhonePe', value: 'PayPal',image: 'https://cdn3.iconfinder.com/data/icons/social-media-2253/60/Paypal-256.png' },
  { label: 'Amazon Pay', value: 'Amazon',image: 'https://cdn4.iconfinder.com/data/icons/payment-methods-8/87/amazon_4-256.png' },
  { label: 'Google Pay', value: 'Google Pay',image: 'https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-256.png' },
  { label: 'Other', value: 'Other',image: '' },
];
const CustomOption = (props) => {
    const { innerRef, innerProps, data } = props;
    return (
      <div ref={innerRef} {...innerProps} className="flex items-center p-2">
        <img src={data.image} alt={data.label} className="w-10 h-10 mr-2" />
        {data.label}
      </div>
    );
  };
  
  const CustomSingleValue = (props) => {
    const { data } = props;
    return (
      <div className="flex items-center">
        <img src={data.image} alt={data.label} className="w-10 h-10 mr-2" />
        {data.label}
      </div>
    );
  };

const UpiPayment = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="flex justify-center pt-[6%] pl-5 pr-10 md:pl-[20%] md:pr-[20%]">
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
        <span>You can change this recurring payment any time in your settings.</span>

          <div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 flex justify-between items-center text-2xl rounded-md mt-4">
          <Select
            placeholder={!isFocus ? "Select your UPI app" : '...'}
            options={data}
            value={data.find(option => option.value === value)}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={option => {
              setValue(option.value);
              setIsFocus(false);
            }}
            className="w-full"
            components={{ Option: CustomOption, SingleValue: CustomSingleValue }}
          />
        </div>
        <div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 flex justify-between items-center text-2xl rounded-md mt-4">
          <input type="text" placeholder="UPI ID" className="w-full p-4" />
        </div>
        <br/>
        <br/>
        <div className='text-center'>
            <button 
              type="submit" 
              className="bg-red-600 rounded-md text-white w-full text-xl md:text-2xl lg:text-4xl p-[1%] pt-[1%] pb-[1%] md:pt-5 md:pb-5"
            >
              Next
            </button>
          </div>
        <br/>

        <Link to="#" className="underline text-blue-500">How do I find my UPI ID</Link>
      </div>
    </div>
  );
}

export default UpiPayment;
