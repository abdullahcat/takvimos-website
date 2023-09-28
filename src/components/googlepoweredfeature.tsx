/* eslint-disable @next/next/no-img-element */


function GooglePoweredFeature() {
    return (
        <section>
            <div className="mx-auto    px-4 py-16  ">
                <div className="grid  grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className=" rounded-2xl relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt="House"
                                src="/firmbee-com-eMemmpUojlw-unsplash.jpg"
                                className="rounded-2xl absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className=" text-black md:rounded-r-2xl relative flex items-center md:bg-gray-100">
                        <span
                            className="hidden md:rounded-l-2xl lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
                        ></span>

                        <div className="md:px-8 py-4  sm:p-16 lg:p-24">
                            <h2 className=" text-3xl   font-bold leading-10  ">
                                Randevuları Düzenlemenin Gücünü İster misiniz?
                                <div className="block    font-bold text-3xl"  >
                                    <span className=" before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block">
                                        <span className="  relative font-light   text-white">takvim<span className="font-bold">OS</span></span>
                                    </span> ile Tanışın! </div></h2>
                            <p className="mt-5  ">
                                Randevu programı, müsaitlik durumunuzu yönetmenizi sağlar. Müşterileriniz, iş ortaklarınız veya arkadaşlarınız, özel bir rezervasyon sayfası aracılığıyla sizinle randevu ayarlayabilir. Firebase teknolojisi ile güvende kalın ve verilerinizi koruyun, Flutter ile kullanıcı dostu bir deneyim yaşayın. Toplantılarınızı düzenlemenin basit ve güvenli yolu burada!                            </p>

                            <a href="http://tanıtım.takvimos.com" className="py-3 mt-5  px-4 inline-flex justify-center items-center gap-2 rounded-md w-40 bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                                Tanıtımı İzle
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default GooglePoweredFeature;