import Head from "next/head";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

function Temsilcilik() {
    return (
        <section className="bg-white pt-20   min-h-screen">
            <Head>
                <title>Ambassador</title>
            </Head>
            <div
                className="mx-auto text-black   max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                        className="relative  h-64 overflow-hidden rounded-xl sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                            alt="Ambassador"
                            src="/joshua-mayo-KboMbhlRgGY-unsplash.jpg"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div className="lg:py-24 space-y-4 ">
                        <h2 className="text-3xl">Sat ve Kazan</h2>

                        <p className="mt-4  ">
                            Siz değerli kullanıcılarımıza harika bir fırsat sunuyoruz! TakvimOS Ambassador Programı, işletmeler ve profesyoneller için randevu yönetimindeki en iyi çözümü tanıtarak ve başkalarına önererek %25'e kadar komisyon kazanmanıza olanak tanır.

                        </p>
                        <Link href="/mailto:ambassador@takvimos.com" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40 bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                            İletişime Geç
                        </Link>

                    </div>
                </div>
            </div>



        </section>
    );
}
export default Temsilcilik;