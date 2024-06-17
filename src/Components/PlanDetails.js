

const PlanDetails = (props) => {

        const {data} =props;
        const {
            MonthlyPrice,
            VideoAudio,
            Resolution,
            SpatialAudio,
            SupportedDevice,
            DevicesHousehold,
            DownloadDevices
        } = data?.info;

  return (
    <div>
      <div>
        <div>Monthly price</div>
        <div>{MonthlyPrice}</div>
      </div>
      <div>
        <div>Video and sound quality</div>
        <div>{VideoAudio}</div>
      </div>
      <div>
        <div>Resolution</div>
        <div>{Resolution}</div>
      </div>
      <div>
        <div>Spatial audio (immersive sound) </div>
        <div>{SpatialAudio}</div>
      </div>
      <div>
        <div>Supported Devices</div>
        <div>{SupportedDevice}</div>
      </div>
      <div>
        <div>Devices your household can watch at the same time</div>
        <div>{DevicesHousehold}</div>
      </div>
      <div>
        <div>Download devices</div>
        <div>{DownloadDevices}</div>
      </div>
    </div>
  );
};
export default PlanDetails;
