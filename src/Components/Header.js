
const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-[1000] h-[80px]">
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
       
      <img
      className=" w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
    </div>
    <div>
        <input type="dropdown"></input>
    </div>
    <div className="m-4">
        <button className="text-white bg-red-600  float-right text-xl px-4 py-2 m-2 rounded-lg ">SignIn</button>
    </div>
    </div>
  );
};
export default Header;
