import Link from "next/link";

function CTA() {
    return (<section>
        <div className="mx-auto max-w-screen-2xl bg-blue-600     ">
            <div className=" bg-blue-600 p-10 md:p-12 lg:px-16 lg:py-30">
                <div className="mx-auto space-y-4 max-w-xl text-center">
                    <h2 className="text-4xl font-bold text-white md:text-3xl">
                        Demo&apos;yu hemen deneyin!                    </h2>

                    <p className="hidden text-white/90  sm:block">
                        Takvimos&apos;u denemek için demo sayfamızı ziyaret edebilirsiniz.
                    </p>

                    <Link href="http://demo.takvimos.com" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40 bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                        Hemen Dene </Link>
                </div>


            </div>
        </div>
    </section>);
}

export default CTA;