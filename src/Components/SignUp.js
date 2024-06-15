import Header from "./Header";
import { useState } from "react";

const SignUp = () => {
  const [isOpen, setisOpen] = useState(null);
  const openDescription = (section) => {

    setisOpen((prevSection) => (prevSection === section ? null : section));
  };
  return (
    <div>
      <Header />
      <div>
        <div
          className="fixed -z-10 bg-black"
        >
          <img
            className="h-screen w-screen object-cover md:w-screen  "
            src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background-img1"
          ></img>
          {/* <img
          className="min-[100%] w-[100%] object-cover bg-repeat-x md:absolute inset-0 opacity-60 md:w-full"
          src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-black-solid-color-background.jpg"
          alt="background-img2"
        ></img> */}
        </div>
        <div className="absolute pt-[1%] md:pt-[10%] w-11/12 md:w-11/12 text-white my-[55%] md:my-36   mx-auto md:right-0 md:left-0">
          <h2 className="flex justify-center text-2xl md:text-4xl">
            Welcome Back!
          </h2>
          <br />
          <h1 className="flex justify-center text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
            Unlimited movies,TV shows and more
          </h1>
          <br />
          <h2 className="flex justify-center text-2xl md:text-4xl">
            Watch anywhere. Cancel anytime.
          </h2>
          <br />
          <div className="flex justify-center">
            <button className="py-2 px-2 bg-red-700 rounded-sm flex text-2xl">
              Finish Sign Up{" "}
              <img
                width="40"
                height="40"
                className=""
                src="https://img.icons8.com/ios-filled/50/FFFFFF/more-than.png"
                alt="more-than"
              />
            </button>
          </div>
        </div>
        <div className="pt-[150%] pb-[10%] md:pt-[45%] md:pb-[7%]">
          <div className="h-1 bg-slate-700 opacity-50"></div>
        </div>
        <div>
          <div className="flex">
            <div className="md:w-5/12 w-7/12 pl-[10%]">
              <div className="text-2xl text-white md:text-6xl">
                Enjoy on your TV
              </div>

              <br />
              <div className="text-xl text-white md:text-3xl ">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, AppleTV,
                Blu-ray players and more.
              </div>
            </div>
            <div className="w-6/12 pl-[10%] pr-[10%]">
              <img
                src="https://64.media.tumblr.com/b60d35dd651725f4ca2699994842f879/17a0a893c1328b93-6a/s540x810/c6e224512a576b997f0fd1c644a3e1e062b05fec.gifv"
                alt=""
              ></img>
            </div>
          </div>
          <div className="pt-[10%] pb-[10%] md:pt-[7%] md:pb-[7%]">
            <div className="h-1 bg-slate-700 opacity-50"></div>
          </div>
          <div className="flex">
            <div className="w-6/12 pl-[10%] pr-[10%]">
              <img
                src="https://media2.giphy.com/media/DEEZMc91aOpnTRyBuz/giphy.webp?cid=790b7611bes67vxl2bvlxd00gbfzp9iqx53fzh70skmexhuf&ep=v1_gifs_search&rid=giphy.webp&ct=g"
                alt=""
              ></img>
            </div>
            <div className="md:w-5/12 w-7/12 pl-[10%]">
              <div className="text-2xl text-white md:text-6xl">
                Download your shows to watch offline
              </div>

              <br />
              <div className="text-xl text-white md:text-3xl ">
                Save your favourites easily and always have something to watch.
              </div>
            </div>
          </div>
          <div className="pt-[10%] pb-[10%] md:pt-[7%] md:pb-[7%]">
            <div className="h-1 bg-slate-700 opacity-50"></div>
          </div>
          <div className="flex">
            <div className="md:w-5/12 w-7/12 pl-[10%]">
              <div className="text-2xl text-white md:text-6xl">
                Watch Everywhere
              </div>

              <br />
              <div className="text-xl text-white md:text-3xl ">
                Stream unlimited movies and TV shows on your phone,tablet,laptop
                and TV.
              </div>
            </div>
            <div className="w-6/12 pl-[10%] pr-[10%]">
              <img
                src="https://media1.giphy.com/media/zudini5kRNz0dTbV7M/200.webp?cid=ecf05e47vnd96vbgquck5w7yita57ia4v2nyziie3pzhep1f&ep=v1_gifs_search&rid=200.webp&ct=g"
                alt=""
              ></img>
            </div>
          </div>
          <div className="pt-[10%] pb-[10%] md:pt-[7%] md:pb-[7%]">
            <div className="h-1 bg-slate-700 opacity-50"></div>
          </div>
          <div className="flex">
            <div className="w-6/12 pl-[10%] pr-[10%]">
              <img
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzR1dDludmMzajVmZDE1a3N3NHBpNG14bnpyZzVkZ3c1M3p1NjYybCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l0MYsFDv1EzJzgvYI/giphy.webp"
                alt=""
              ></img>
            </div>
            <div className="md:w-5/12 w-7/12 pl-[10%]">
              <div className="text-2xl text-white md:text-6xl">
                Creat profiles for kids
              </div>

              <br />
              <div className="text-xl text-white md:text-3xl ">
                Send children on adventure with their favourite characters in a
                space just made for them -- free with your membership.
              </div>
            </div>
          </div>
          <div className="pt-[10%] pb-[10%] md:pt-[7%] md:pb-[7%]">
            <div className="h-1 bg-slate-700 opacity-50"></div>
          </div>
        </div>

        <div className="w-12/12">
          <div className="flex justify-center font-bold text-4xl text-white">
            Frequently Asked Questions
          </div>
          <br />
          <div className=" pl-[6%] pr-[6%]">
            <div>

            
            <div
              className="bg-gray-600 bg-opacity-65 hover:bg-opacity-80 hover:bg-gray-500 text-white p-[1%] flex justify-between text-2xl rounded-md "
              onClick={() => openDescription('netflix1')}
            >
              What is Netflix?{" "}
              {isOpen === 'netflix1' && (<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/multiply.png" alt="multiply"/>) || (
                <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"
                alt="plus-math--v1"
              />)}
            </div>
            {isOpen === 'netflix1' && (
                     <div className="bg-gray-600 bg-opacity-65 text-white p-4 mt-1 rounded-md text-xl">

                       

          Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
        </div>
      )}
            </div>
            <br />
            <div>
            <div className="bg-gray-600 bg-opacity-65 hover:bg-opacity-80 hover:bg-gray-500 text-white p-[1%] flex justify-between text-2xl rounded-md"
             onClick={() => openDescription('netflix2')}>
              How much does Netflix Cost?{" "}
              {isOpen === 'netflix2' && (<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/multiply.png" alt="multiply"/>) || (
                <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"
                alt="plus-math--v1"
              />)}
            </div>
            {isOpen === 'netflix2' && (
                                <div className="bg-gray-600 bg-opacity-65 text-white p-4 mt-1 rounded-md text-xl">

                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                </div>
               )}
            </div>
            <br />
            <div>

            <div className="bg-gray-600 bg-opacity-65 hover:bg-opacity-80 hover:bg-gray-500 text-white p-[1%] flex justify-between text-2xl rounded-md"  onClick={() => openDescription('netflix3')}>
              Where can i Watch?
              {isOpen === 'netflix3' && (<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/multiply.png" alt="multiply"/>) || (
                <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"
                alt="plus-math--v1"
              />)}
            </div>
            {isOpen === 'netflix3' && (
                                 <div className="bg-gray-600 bg-opacity-65 text-white p-4 mt-1 rounded-md text-xl">

            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
</div>
               )}
                </div>
            <br />
            <div>

            <div className="bg-gray-600 bg-opacity-65 hover:bg-opacity-80 hover:bg-gray-500 text-white p-[1%] flex justify-between text-2xl rounded-md"  onClick={() => openDescription('netflix4')}>
              How do i Cancel?
              {isOpen === 'netflix4' && (<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/multiply.png" alt="multiply"/>) || (
                <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"
                alt="plus-math--v1"
              />)}
            </div>
            {isOpen === 'netflix4' && ( 

<div className="bg-gray-600 bg-opacity-65 text-white p-4 mt-1 rounded-md text-xl">

  Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</div>
          )}
                </div>
            <br />
            <div>
            <div className="bg-gray-600 bg-opacity-65 hover:bg-opacity-80 hover:bg-gray-500 text-white p-[1%] flex justify-between text-2xl rounded-md"  onClick={() => openDescription('netflix5')}>
              What can i watch on Netflix?
              {isOpen === 'netflix5' && (<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/multiply.png" alt="multiply"/>) || (
                <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"
                alt="plus-math--v1"
              />)}
            </div>
            {isOpen === 'netflix5' && ( 

<div className="bg-gray-600 bg-opacity-65 text-white p-4 mt-1 rounded-md text-xl">

Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
)}
            </div>
            <br />
           <div>
           <div className="bg-gray-600 bg-opacity-65 hover:bg-opacity-80 hover:bg-gray-500 text-white p-[1%] flex justify-between text-2xl rounded-md"  onClick={() => openDescription('netflix6')}>
              Is Netflix good for kids?
              {isOpen === 'netflix6' && (<img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/multiply.png" alt="multiply"/>) || (
                <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/FFFFFF/plus-math--v1.png"
                alt="plus-math--v1"
              />)}
            </div>
             {isOpen === 'netflix6' && ( 
             <div className="bg-gray-600 bg-opacity-65 text-white p-4 mt-1 rounded-md text-xl">
              The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</div>
            )}
           </div>
            <br />
            <div className="flex justify-center ">
              <button className="py-2 px-3 bg-red-700 rounded-sm flex text-2xl text-white p-[1%]">
                Finish Sign Up{" "}
                <img
                  width="40"
                  height="40"
                  className=""
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/more-than.png"
                  alt="more-than"
                />
              </button>
            </div>
          </div>
          <div className="pt-[10%] pb-[10%] md:pt-[7%] md:pb-[7%]">
            <div className="h-1 bg-slate-700 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
