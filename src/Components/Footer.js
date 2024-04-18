const Footer = () => {
    return (
        <div className="bg-black p-4 flex-col fixed z-50 bottom-0 w-[100%] opacity-85 *:">

        <p className="text-white text-xl italic p-4">Questions? Call <span className="underline ">6377536398</span></p>
     

        <div className=" flex justify-evenly">
            <div className="mx-10 p-6">
                <a className="text-white text-xl underline mt-2 p-2 font-serif" href="">FAQ</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Investor Relation</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Privacy</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Speed Test</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Netflix India</a>
                <br/>
            </div>
            <div className="mx-10 p-6 ">
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Help Centre</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Jobs</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Cookie Preferences</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Legal Notices</a>
                <br/>
            </div>
            <div className="mx-10 p-6">
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Account</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Ways to Watch</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Co-operate information</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Only On Netflix</a>
                <br/>
            </div>
            <div className=" mx-10 p-6">
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Media Center</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Terms of use</a>
                <br/>
                <a className="text-white text-xl underline mt-2 p-2 font-serif"href="">Contact Us</a>
                <br/>
            </div>
        </div>
        </div>
    )
}

export default Footer;