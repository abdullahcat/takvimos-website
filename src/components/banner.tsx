import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

function Banner() {
    return (
        <div className="relative flex flex-col-reverse px-4 py-20 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
            <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
                <img
                    src="/takvimosmac.png"
                    className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
                    alt=""
                />
            </div>
            <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
                <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div className="pb-5">
                            <img src="/favicon_package_v0.16/android-chrome-192x192.png" alt="Logo" height={50} width={50} />
                        </div>
                        <h2 className="max-w-lg mb-5 text-4xl font-bold tracking-tight text-black   sm:leading-none">
                            Randevuları Kolayca Planlayın, Hızlıca Yönetin!
                        </h2>
                        <p className="  leading-relaxed text-black text-2xl">
                            Randevuları Kolayca Planlayın, Müşterilerinizi Etkileyin.
                            <br />   <span className="mr-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                                <span className="  relative font-light   text-white">takvim<span className="font-bold">OS</span></span>
                            </span>
                            İle İşinizi Büyütün!</p>                    </div>
                    <form>

                        <div className="flex items-center space-x-2 mt-4">
                            <Link href="/sales" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40 bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                                Hemen Başvur
                            </Link>
                            <a href="http://console.takvimos.com" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40   border   font-semibold text-blue-500 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                                Konsol
                            </a>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Banner;