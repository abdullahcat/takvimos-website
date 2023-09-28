function CTA() {
    return (<section>
        <div className="mx-auto max-w-screen-2xl bg-blue-600     ">
            <div className=" bg-blue-600 p-20 md:p-12 lg:px-16 lg:py-30">
                <div className="mx-auto space-y-4 max-w-xl text-center">
                    <h2 className="text-4xl font-bold text-white md:text-3xl">
                        Bize Katılın ve İşinizi Kolaylaştırın!                    </h2>

                    <p className="hidden text-white/90  sm:block">
                        Randevu sistemi ile işlerinizi düzenlemek ve daha fazla verimlilik sağlamak için hemen kayıt olun. İşletmenizi daha iyi yönetmeye başlamak için buradayız!
                    </p>

                    <a href="/sales" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40 bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                        Hemen Başvur
                    </a>
                </div>


            </div>
        </div>
    </section>);
}

export default CTA;