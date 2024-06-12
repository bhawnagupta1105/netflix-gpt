import { IMG_CDN_URL } from "../Utils/constants";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return "Poster not availabale"; 
    return (
        <div className="w-36 md:w-48 pr-4">
            <img alt="MovieCard" src = {IMG_CDN_URL + posterPath}></img>
        </div>
    )
}
export default MovieCard;