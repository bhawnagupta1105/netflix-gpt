import { useEffect, useState } from "react";
import PlanDetails from "./PlanDetails";
import { Link, useNavigate } from "react-router-dom";
const Plan = () => {

    const [showDetails,setshowDetails] = useState(false);
    const[planDetails,setplanDetails] = useState(null);
    const[activePlan,setactivePlan] = useState(null);
    const navigate = useNavigate();
    const NextButtonClick = () => {
        navigate("/payment");

    }
    const TermsOfUse = () => {
        navigate("/termsuse")
    }
    const showPlans = (plantype) => {
        let planDetails;
       
   
        if(plantype === "plan1"){

            planDetails = {
                  MonthlyPrice:"49",
                  VideoAudio:"Best",
                  Resolution:"4K(Ultra HD) + HDR",
                  SpatialAudio:"Included",
                  SupportedDevice:"TV,computer,mobile phone,tablet",
                  DevicesHousehold:4,
                  DownloadDevices:6
              };
            } else if (plantype === "plan2") {
                planDetails = {
                    MonthlyPrice: "39",
                    VideoAudio: "Good",
                    Resolution: "1080p (Full HD)",
                    SpatialAudio: "Not Included",
                    SupportedDevice: "TV, computer, mobile phone, tablet",
                    DevicesHousehold: 2,
                    DownloadDevices: 4
                };
            } else if (plantype === "plan3") {
                planDetails = {
                    MonthlyPrice: "29",
                    VideoAudio: "Standard",
                    Resolution: "720p (HD)",
                    SpatialAudio: "Not Included",
                    SupportedDevice: "TV, computer, mobile phone, tablet",
                    DevicesHousehold: 1,
                    DownloadDevices: 2
                };
            } else if (plantype === "plan4") {
                planDetails = {
                    MonthlyPrice: "19",
                    VideoAudio: "Basic",
                    Resolution: "480p (SD)",
                    SpatialAudio: "Not Included",
                    SupportedDevice: "TV, computer, mobile phone, tablet",
                    DevicesHousehold: 1,
                    DownloadDevices: 1
                };
            }
            setplanDetails(planDetails);
            setshowDetails(true);
            setactivePlan(plantype);
        };
        useEffect(() => {
            showPlans("plan3");
        },[])
return (
    <div className="pt-[6%] pl-5 pr-10 md:pl-[20%] md:pr-[20%]  "> 
        <div className="">
          <div className="text-lg " >STEP <b>2</b> OF <b>4</b></div>
          <br/>
          <div className="text-xl md:text-3xl lg:text-5xl xl:text-7xl font-bold ">
            Choose the plan that's right for you.
          </div>
          <br/>
          <br/>
          <br/>
         <div className="flex justify-between">
          <div className="pr-[4%]">

          <button
                    onClick={() => showPlans("plan1")}
                    className={`rounded-3xl border-2 md:border-4 border-gray-500 p-1 pb-11 md:p-3 lg:p-6 xl:p-10   ${
                        activePlan === "plan1" ? "text-white bg-gradient-to-br from-blue-950 via-sky-600 to-teal-600" : ""
                    }`}
                >
                    <b className="text-lg md:text-2xl md:mr-10 ">Premium</b>
                    <p className="text-base md:mr-10 md:mb-10">4K + HDR</p>
                </button>
          </div>
          <div className="pr-[4%]">


          <button
                    onClick={() => showPlans("plan2")}
                    className={` rounded-3xl border-2 md:border-4 border-gray-500 p-1 pb-11 md:p-3 lg:p-6 xl:p-10 ${
                        activePlan === "plan2" ? "text-white bg-gradient-to-br from-blue-900 via-indigo-700 to-teal-900" : ""
                    }`}
                >
                    <b className="text-lg md:text-2xl p-0 md:mr-10">Standard</b>
                    <p className="text-base md:mr-10 md:mb-10">1080p</p>
                </button>
          </div>
          <div className="pr-[4%]">

<div className=" pb-0 -mt-9">
<div className="lg:p-1 md:p-0 p-0 text-sm flex justify-center  md:text-xl rounded-t-lg border-2 md:border-4 border-gray-500 text-white bg-gradient-to-br from-cyan-800 to-emerald-500">Most Popular</div>
<button
                    onClick={() => showPlans("plan3")}
                    className={` rounded-b-3xl rounded-t-md border-2 md:border-4 border-gray-500 p-1 pb-11 md:p-3 lg:p-6 xl:p-10 ${
                        activePlan === "plan3" ? "text-white bg-gradient-to-br from-sky-800 via-blue-900 to-emerald-500" : ""
                    }`}
                >
                    <b className="text-lg md:text-2xl p-4 md:p-6 md:mr-10">Basic</b>
                    <p className="text-base md:mr-10 md:mb-10">720p</p>
                </button>
</div>
</div>

<div className="">


             <button
                    onClick={() => showPlans("plan4")}
                    className={` rounded-3xl border-2 md:border-4 border-gray-500 p-1 pb-11 md:p-3 lg:p-6 xl:p-10 ${
                        activePlan === "plan4" ? "text-white bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-600" : ""
                    }`}
                >
                    <b className="text-lg md:text-2xl p-2 md:p-3 md:mr-10">Mobile</b>
                    <p className="text-base md:mr-10 md:mb-10">480p</p>
                </button>
                </div>   
                </div>
            
  




        </div>
        <br/>
        <br/>
        <div className="">

        {showDetails && planDetails && <PlanDetails data={planDetails}/>}
        </div>
        <br/>
        <br/>
        <br/>
        <div className="texl-sm md:text-xl text-zinc-500">
            <div>
            HD(720p),Full HD(1080p),Ultra HD(4K),and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions.
            See our <Link className="underline text-blue-500" onClick={TermsOfUse}>Terms of Use</Link> for more details.
            </div>
            <br/>
            <div>
                Only people who live with you may use your account.Watch on 4 defferent devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile
            </div>
            
        </div>
        <br/>
            <br/>
            <div className="flex justify-center">
            <button className="bg-red-600  rounded-md text-white w-11/12 text-xl md:text-2xl lg:text-4xl p-[1%] pt-[1%] pb-[1%] md:pt-5 md:pb-5" onClick={NextButtonClick}>
                Next
            </button>
        </div>
        <br/>
        <br/>
    </div>
)
}

export default Plan;