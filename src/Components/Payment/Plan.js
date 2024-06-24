//import { useEffect, useState } from "react";
import { useState } from "react";
import PlanDetails from "./PlanDetails";
import { Link, useNavigate } from "react-router-dom";
//import { Link, useNavigate } from "react-router-dom";
const Plan = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const handleSelect = (plan) => {  
  if (selectedPlan === plan) {
      setSelectedPlan(null); // Deselect the plan if it's already selected
    } else {
      setSelectedPlan(plan); // Select the clicked plan
    }
  };
  const NextButtonClick = () => {
    navigate("/payment");
  };
  const TermsOfUse = () => {
    navigate("/termsuse");
  };
  const showPlans = {
    planDetails1: {
      MonthlyPrice: "49",
      VideoAudio: "Best",
      Resolution: "4K(Ultra HD) + HDR",
      SpatialAudio: "Included",
      SupportedDevice: "TV,computer,mobile phone,tablet",
      DevicesHousehold: 4,
      DownloadDevices: 6,
    },
    planDetails2: {
      MonthlyPrice: "39",
      VideoAudio: "Good",
      Resolution: "1080p (Full HD)",
      SpatialAudio: "Not Included",
      SupportedDevice: "TV, computer, mobile phone, tablet",
      DevicesHousehold: 2,
      DownloadDevices: 4,
    },
    planDetails3: {
      MonthlyPrice: "29",
      VideoAudio: "Standard",
      Resolution: "720p (HD)",
      SpatialAudio: "Not Included",
      SupportedDevice: "TV, computer, mobile phone, tablet",
      DevicesHousehold: 1,
      DownloadDevices: 2,
    },
    planDetails4: {
      MonthlyPrice: "19",
      VideoAudio: "Basic",
      Resolution: "480p (SD)",
      SpatialAudio: "Not Included",
      SupportedDevice: "TV, computer, mobile phone, tablet",
      DevicesHousehold: 1,
      DownloadDevices: 1,
    },
  };

  return (
    <div className="pt-[6%] pl-5 pr-10   ">
      <div className="w-10/12 m-auto">
        <div className="">
          <div className="text-lg ">
            STEP <b>2</b> OF <b>4</b>
          </div>
          <br />
          <div className="text-base md:text-xl lg:text-3xl xl:text-5xl font-bold ">
            Choose the plan that's right for you.
          </div>
          <br />
          <br />
          <br />

          <div className=" flex gap-3 justify-between ">
            <div className="rounded-3xl border-2 border-slate-400 m-auto hover:shadow-2xl " 
                 onClick={() => handleSelect("planDetails1")}
                 >
              <div className=" p-[2%]">
                <button
                  className="rounded-3xl border-2 md:border-4 border-gray-500 w-full text-white bg-gradient-to-br from-blue-950 via-sky-600 to-teal-600"
                >
                  <b className="text-sm md:text-xl p-0 md:mr-10 ">Premium</b>
                  <p className="text-xs md:text-lg md:mr-10 md:mb-10">
                    4K + HDR
                  </p>
                    {selectedPlan === "planDetails1" && (
                        <img width="50" className="float-right pr-[2%] pb-[2%]" height="50" src="https://img.icons8.com/ios/50/FFFFFF/ok--v1.png" alt="ok--v1"/>
                    )}
                </button>
              </div>
              <div className="p-[4%]">
                {<PlanDetails data={showPlans.planDetails1} />}
              </div>
            </div>
            <div className="rounded-3xl border-2 border-slate-400   m-auto hover:shadow-2xl " 
                 onClick={() => handleSelect("planDetails2")}
                 >
              <div className="p-[2%]">
                <button
                  className="rounded-3xl border-2 md:border-4 border-gray-500 w-full text-white bg-gradient-to-br from-blue-900 via-indigo-700 to-teal-900"
                >
                  <b className="text-sm md:text-xl p-0 md:mr-10 ">Standard</b>
                  <p className="text-xs md:text-lg md:mr-10 md:mb-10">
                  1080p
                  </p>
                    {selectedPlan === "planDetails2" && (
                        <img width="50" className="float-right pr-[2%] pb-[2%]" height="50" src="https://img.icons8.com/ios/50/FFFFFF/ok--v1.png" alt="ok--v1"/>
                    )}
                </button>
              </div>
              <div className="p-[4%]">
                {<PlanDetails data={showPlans.planDetails2} />}
              </div>
            </div>

            <div className="rounded-3xl border-2 border-slate-400   m-auto hover:shadow-2xl "  onClick={() => handleSelect("planDetails3")}>
              <div className="p-[2%]">
              <div className=" text-xs  flex justify-center  md:text-base rounded-t-3xl border-2 md:border-4 border-gray-500 text-white bg-gradient-to-br from-cyan-800 to-emerald-500">
                  Most Popular
                </div>
                <button className="rounded-b-3xl rounded-t-md border-2 md:border-4 border-gray-500 w-full text-white bg-gradient-to-br from-sky-800 via-blue-900 to-emerald-500">
                  <b className="text-sm md:text-xl p-4 md:p-6 md:mr-10">
                    Basic
                  </b>
                  <p className="text-xs md:text-lg md:mr-10 md:mb-10">720p</p>
                  {selectedPlan === "planDetails3" && (
                        <img width="50" className="float-right pr-[2%] pb-[2%]" height="50" src="https://img.icons8.com/ios/50/FFFFFF/ok--v1.png" alt="ok--v1"/>
                    )}
                </button>
              </div>
              <div className="p-[4%]">
                {<PlanDetails data={showPlans.planDetails3} />}
              </div>
            </div>
            <div className="rounded-3xl border-2 border-slate-400   m-auto hover:shadow-2xl " 
                 onClick={() => handleSelect("planDetails4")}
                 >
              <div className="p-[2%]">
                <button
                  className="rounded-3xl border-2 md:border-4 border-gray-500 w-full text-white bg-gradient-to-br from-sky-950 via-blue-900 to-cyan-600"
                >
                  <b className="text-sm md:text-xl p-0 md:mr-10 ">Mobile</b>
                  <p className="text-xs md:text-lg md:mr-10 md:mb-10">
                  480p
                  </p>
                    {selectedPlan === "planDetails4" && (
                        <img width="50" className="float-right pr-[2%] pb-[2%]" height="50" src="https://img.icons8.com/ios/50/FFFFFF/ok--v1.png" alt="ok--v1"/>
                    )}
                </button>
              </div>
              <div className="p-[4%]">
                {<PlanDetails data={showPlans.planDetails4} />}
              </div>
            </div>
          
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="texl-sm md:text-xl text-zinc-500">
          <div>
            HD(720p),Full HD(1080p),Ultra HD(4K),and HDR availability subject to
            your internet service and device capabilities. Not all content is
            available in all resolutions. See our{" "}
            <Link className="underline text-blue-500" onClick={TermsOfUse}>
              Terms of Use
            </Link>{" "}
            for more details.
          </div>
          <br />
          <div>
            Only people who live with you may use your account.Watch on 4
            defferent devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile
          </div>
        </div>
        <br />
        <br />
        <div className="flex justify-center">
          <button
            className="bg-red-600  rounded-md text-white w-11/12 text-xl md:text-2xl lg:text-4xl p-[1%] pt-[1%] pb-[1%] md:pt-5 md:pb-5"
            onClick={NextButtonClick}
          >
            Next
          </button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Plan;
