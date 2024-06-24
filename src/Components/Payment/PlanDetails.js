


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
      <div className="flex text-xl font-bold">
        <div className="w-1/2">Monthly price</div>
        <div className="w-1/2 text-right">{MonthlyPrice}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
      
          <div className="flex text-xl font-bold">

        <div className="w-1/2 ">Video and sound quality</div>
        <div className="w-1/2 text-right">{VideoAudio}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          
          <div className="flex text-xl font-bold">

        <div className="w-1/2">Resolution</div>
        <div className="w-1/2 text-right">{Resolution}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          <div className="flex text-xl font-bold">

        <div className="w-1/2">Spatial audio (immersive sound) </div>
        <div className="w-1/2 text-right">{SpatialAudio}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          
          <div className="flex text-xl font-bold">

        <div className="w-1/2">Supported Devices</div>
        <div className="w-1/2 text-right">{SupportedDevice}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          <div className="flex text-xl font-bold">

        <div className="w-1/2">Devices your household can watch at the same time</div>
        <div className="w-1/2 text-right">{DevicesHousehold}</div>
      </div>
      <div className="pt-[1%] pb-[1%] ">
            <div className="h-1 bg-slate-700 opacity-20"></div>
          </div>
          <div className="flex text-xl font-bold">

        <div className="w-1/2">Download devices</div>
        <div className="w-1/2 text-right">{DownloadDevices}</div>
      </div>
    </div>
  );
};
export default PlanDetails;
