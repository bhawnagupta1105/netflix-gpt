import { useState } from "react"
import Modal from 'react-modal';
import MainContainer from "./MainContainer";
//import { useNavigate } from "react-router-dom";

const MovieCardPupup = () => {

    const [isOpen,setIsOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Open modal</button>
<Modal
className="absolute p-[2%] bg-black w-full md:w-4/12 text-white my-36 mx-auto right-0 left-0 bg-opacity-70"
isOpen ={isOpen}
contentLable = "jbcbhchjzx"
onRequestClose = {() => setIsOpen(false)}
>
    <div className="bg-purple-500 w-1/2">
<MainContainer/>
    </div>
</Modal>
        </div>
    );
}

export default MovieCardPupup;