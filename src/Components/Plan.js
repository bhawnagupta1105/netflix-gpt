import { useNavigate } from "react-router-dom";

const Plan = () => {
    const navigate = useNavigate();
    const showPlans = () => {
      const planDetails1 = {
            MonthlyPrice:"49",
            VideoAudio:"Best",
            Resolution:"4K(Ultra HD) + HDR",
            SpatialAudio:"Included",
            SupportedDevice:"TV,computer,mobile phone,tablet",
            DevicesHousehold:4,
            DownloadDevices:6
        }
        navigate("/planDetails",{state:planDetails1});
    };
return (
    <div className="pt-[6%] pl-[8%] pr-[8%]"> 
        <div>
          <div className="text-lg " >STEP <b>2</b> OF <b>4</b></div>
          <br/>
          <div className="text-4xl font-bold ">
            Choose the plan that's right for you.
          </div>
          <br/>
          <br/>
          <button onClick={showPlans} > Click Me</button>




        </div>
    </div>
)
}

export default Plan;