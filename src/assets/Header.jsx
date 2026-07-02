import { Link } from "react-router-dom"


function Header() {
   return (
     <section className=" h-25 w-full fixed z-50 p-3 flex justify-around bg-neutral-100 border-b-2 border-orange-main items-center">
       <div>
         <img src="/images/icon .png" className="w-40 h-full" alt="" />
       </div>
       <div className="flex gap-4">
         <Link
           to="/"
           className="flex hover:bg-orange-main hover:text-white duration-500 font-poppins font-semibold h-10 justify-center rounded-4xl pr-6 pl-6 items-center w-25 hover:font-light"
         >
           Home
         </Link>
         <Link
           to="/cardapio"
           className="flex hover:bg-orange-main hover:text-white duration-500 font-poppins font-semibold h-10 justify-center rounded-4xl pr-6 pl-6 items-center w-25 hover:font-light"
         >
           Cardapio
         </Link>
       </div>
     </section>
   );
}

export default Header
