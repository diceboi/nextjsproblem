import { AiOutlineCreditCard } from 'react-icons/ai'
import { IoIosSearch, IoIosMenu } from 'react-icons/io'


export default function MainNav() {
    return (
        <>
        <div className="flex flex-wrap justify-center px-4 w-full h-24 mx-auto">
            <div className='flex items-center gap-8 w-10/12 h-16'>
                <div id="logo" className="flex shrink-0 items-center w-40 h-14">
                    <a href="#">
                        <img src="https://teszt.arpusz.hu/wp-content/uploads/2023/01/ph-logo.svg" alt="logo" className="w-40" />
                    </a>
                </div>
                <div id="search" className="flex shrink items-center w-full h-14">
                    <div className='relative flex items-center justify-center w-full bg-neutral-100 h-10 rounded-full hover:bg-neutral-300'>
                        <input type="text" className="border-0 rounded-full w-full h-10 bg-neutral-100 px-4 hover:bg-neutral-300 focus:outline-none focus:bg-neutral-300 ease-in-out duration-300"/>
                        <IoIosSearch className='absolute right-3 h-6 w-auto'/>                        
                    </div>                   
                </div>
                <div id="proficlub" className="flex items-center h-14 self-end">
                    <button className="flex flex-nowrap items-center gap-3 bg-rose-600 hover:bg-rose-700 ease-in-out duration-300 h-10 px-2.5 rounded-full text-white"><AiOutlineCreditCard /> ProfiClub</button>
                </div>
            </div>
            <div className='flex items-center w-10/12 h-14 border-b border-slate-200'>
                <ul id="menu" className='flex items-center gap-8 text-base font-bold h-14'>
                    <li>
                        <a href="#" className='flex items-center gap-2'><IoIosMenu />Termékek</a>
                    </li>
                    <li>
                        <a href="#">Akciók</a>
                    </li>
                    <li>
                        <a href="#">Szolgáltatások</a>
                    </li>
                    <li>
                        <a href="#">Inspiráció</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
                <div id="userbuttons" className=''></div>
            </div>
        </div>
        </>
    )
  }