import { useNavigate } from "react-router-dom";
//import CardPayment from "./CardPayment";
//import UpiPayment from "./UpiPayment";

const Payment = () => {
  const navigate = useNavigate();
const CardPaymentPay = () => {
navigate("/cardPayment")
}

const UpiPayment = () => {
  navigate("/upiPayment")
}

  return (
    <div className="flex justify-center pt-[6%] pl-5 pr-10 md:pl-[20%] md:pr-[20%] text-center ">
      <div className="pt-[1%] pb-[1%] ">
        <div className="h-1 bg-slate-700 opacity-20"></div>
      </div>
      <div className="w-full">
        <br />
        <div className="flex justify-center">
          <img
            width="80"
            height="80"
            src="https://img.icons8.com/ios/50/DB4C4C/private2.png"
            alt="private2"
          />
        </div>
        <br />
        <br />
        <div className="text-lg ">
          STEP <b>3</b> OF <b>4</b>
        </div>
        <br />
        <br />
        <div className="text-base md:text-xl lg:text-3xl xl:text-5xl  font-bold">Choose how to pay</div>
        <br />
        <br />
        <div className=" text-neutral-800 text-base md:texl-lg md:text-xl">
          <p>
            Your payment is encrypted and you can change your payment method at
            anytime.
          </p>
          <br />
          <p>Secure for peace of mind.</p>
          <p>Cancel easily online.</p>
        </div>
        <br></br>
        <br></br>
        <div className="flex justify-end">End-to-end encrypted &nbsp;  <img width="27" height="27" className="pb-2" src="https://img.icons8.com/ios-filled/50/e28743/lock.png" alt="lock"/></div>
        <div className="w-full">
        <div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 flex justify-between items-center text-2xl rounded-md" onClick={CardPaymentPay}>
  <div className="flex items-center space-x-4" >
    <span className="text-xl md:text-2xl">Credit or Debit Card</span>
    <img className="h-20 w-20" src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/visa-512.png" alt="visa"/>
    <img className="h-20 w-20" src="https://cdn0.iconfinder.com/data/icons/shift-ecommerce/32/Master_Card-256.png" alt="mastercard"/>
  </div>
  <img className="h-8 w-8" src="https://img.icons8.com/ios-glyphs/30/6e7a88/more-than.png" alt="more-than"/>
</div>

<br/>
<div className="border-4 border-neutral-300 hover:bg-neutral-300 p-4 flex justify-between items-center text-2xl rounded-md" onClick={UpiPayment}>
  <div className="flex items-center space-x-4">
    <span className="text-xl md:text-2xl">Upi Auto Pay</span>
    <img className="h-20 w-20" src="https://cdn2.iconfinder.com/data/icons/social-icons-color/512/paytm-64.png" alt="paytm"/>
    <img className="h-20 w-20" src="https://cdn4.iconfinder.com/data/icons/payment-methods-8/87/amazon_4-256.png" alt="amazonpay"/>
    <img className="h-20 w-20" src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-256.png" alt="gpay"/>
    <img className="h-20 w-20" src="https://cdn3.iconfinder.com/data/icons/social-media-2253/60/Paypal-256.png" alt="paypal"/>
  </div>
  <img className="h-8 w-8" src="https://img.icons8.com/ios-glyphs/30/6e7a88/more-than.png" alt="more-than"/>
</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
