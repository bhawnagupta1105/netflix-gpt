


//const PlanDetails = ({data}) => {
  const PlanDetails = ({data}) => {

        const {
            MonthlyPrice,
            VideoAudio,
            Resolution,
            SpatialAudio,
            SupportedDevice,
            DevicesHousehold,
            DownloadDevices
        } = data;
console.log(data);
  return (
    <div className="text-zinc-500">
      <div className=" text-lg font-bold">
        <div className="">Monthly price</div>
        <div className="">{MonthlyPrice}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
      
          <div className=" text-lg font-bold">

        <div className=" ">Video and sound quality</div>
        <div className="">{VideoAudio}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          
          <div className=" text-lg font-bold">

        <div className="">Resolution</div>
        <div className="">{Resolution}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          <div className=" text-lg font-bold">

        <div className="">Spatial audio (immersive sound) </div>
        <div className="">{SpatialAudio}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          
          <div className=" text-lg font-bold">

        <div className="">Supported Devices</div>
        <div className=" ">{SupportedDevice}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          <div className=" text-lg font-bold">

        <div className="">Devices your household can watch at the same time</div>
        <div className="">{DevicesHousehold}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          <div className=" text-lg font-bold">

        <div className="">Download devices</div>
        <div className="">{DownloadDevices}</div>
      </div>
    </div>
  );
};
export default PlanDetails;
