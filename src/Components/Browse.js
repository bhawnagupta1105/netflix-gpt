
import Footer from "./Footer";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
//import useNowPlayingMovies from "./hooks/useNowPlayingMovies";


const Browse = () => {


    // useNowPlayingMovies();


  return (
    <div>
      <Header />
      <MainContainer/>
       <SecondaryContainer/>
       <Footer/>
      {/* MainContainer
       - videoBackground
        - VideoTitle
      SecondaryContainer
       - Movie List * N
       - Cards * n */}

       
    </div>
  );
};

export default Browse;
