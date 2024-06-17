
import { useNavigate } from "react-router-dom";
import Plan from "./Plan";

const SignUpClick = () => {
    const navigate = useNavigate();
    const onNextClick = () => {
        navigate("/plan");
    }
  return (
    <div className=" pt-[6%] flex justify-center tracking-wide">
      <div className="p-[0.5%] m-2">
        <div>
          <div className="flex justify-center">
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/parakeet-line/96/DB4C4C/ok.png"
              alt="ok"
            />
          </div>
          <br />
          <br />
          <div className="text-lg flex justify-center">STEP 1 OF 4</div>
          <div className="text-4xl font-bold flex justify-center">
            Choose Your plan.
          </div>
          <br />
          <br />
          <div>
            <div className="flex">
              <img
                width="50"
                height="50"
                className="pr-1"
                src="https://img.icons8.com/ios/50/DB4C4C/checkmark--v1.png"
                alt="checkmark--v1"
              />
              <span className="text-xl p-1">
                {" "}
                No commitments, cancel anytime.
              </span>{" "}
            </div>
            <div className="flex">
              <img
                width="50"
                height="50"
                className="pr-1 h-[50]"
                src="https://img.icons8.com/ios/50/DB4C4C/checkmark--v1.png"
                alt="checkmark--v1"
              />
              <div className="text-xl p-1 ">
                Everything on Neflix for one low price.
              </div>
            </div>
            <div className="flex">
              <img
                width="50"
                height="50"
                className="pr-1"
                src="https://img.icons8.com/ios/50/DB4C4C/checkmark--v1.png"
                alt="checkmark--v1"
              />

              <span className="text-xl p-1">
                {" "}
                No ads and no extra fees. Ever.
              </span>
            </div>
          </div>
        </div>
        <br />
        <br />
        
          <button className="text-3xl rounded-md bg-red-500 p-4 w-full text-white m-2" onClick={onNextClick}>
            Next
          </button>
        
      </div>
    </div>
  );
};
export default SignUpClick;
