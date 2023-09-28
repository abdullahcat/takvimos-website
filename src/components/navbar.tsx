"use client"; // This is a client component 👈🏽
import Link from 'next/link';

function Navbar() {


    return (

        <div className=" fixed w-full z-20 bg-white border-b border-gray-200">
            <div
                className="mx-auto flex h-16 items-center gap-8 px-4 "
            >
                <Link className="block text-blue-500 font-bold text-2xl" href="/">
                    <span className='font-light text-black'>takvim</span>OS
                </Link>

                <div className="flex flex-1 items-center justify-end ">
                    <div className="flex items-center gap-2">
                        <div className="sm:flex sm:gap-2">
                            <Link href="/sales" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40 bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                                Hemen Başvur
                            </Link>
                            <Link href="http://console.takvimos.com" className="sm:block text-center transition  hidden py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40   border   font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                                Konsol
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;