import Head from "next/head";
/* eslint-disable @next/next/no-img-element */

function Hakkimizda() {
    return (
        <section className="bg-white pt-4  px-4 min-h-screen">
            <Head>
                <title>Hakkmızda</title>
            </Head>
            <section>
                <div className="  text-black max-w-screen-xl  py-16   sm:py-24  ">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl  ">
                            TakvimOS: Randevu Yönetimindeki Lider Çözüm ve Müşteri Dostu Platform                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative rounded-xl h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt="Team"
                                src="/annie-spratt-QckxruozjRg-unsplash.jpg"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-16 space-y-4">
                            <h2 className="text-2xl">
                                Biz Kimiz?
                            </h2>
                            <article className="space-y-4 text-gray-600">
                                <p>
                                    TakvimOS, randevu yönetimi konusundaki ihtiyaçları karşılamak ve işletmelerin daha verimli çalışmalarına yardımcı olmak için tasarlanmış bir platformdur. TakvimOS&apos;un amacı, işletmelerin ve profesyonellerin işlerini daha iyi yönetmelerine, müşterileriyle daha etkili bir şekilde iletişim kurmalarına ve büyümelerine katkıda bulunmaktır.


                                </p>

                                <p>
                                    Bizi diğerlerinden ayıran şey, kullanıcı odaklı bir yaklaşım ve sürekli yeniliklerle dolu bir platform sunmamızdır. TakvimOS olarak, işletmelerin ve profesyonellerin iş süreçlerini kolaylaştırmayı ve daha verimli hale getirmeyi hedefliyoruz. Müşteri memnuniyetini en üst düzeye çıkarmak ve işletmelerin başarısına katkıda bulunmak için buradayız.

                                </p>
                                <p>
                                    TakvimOS ekibi olarak, deneyimli uzmanlarımızla işletmelerin iş süreçlerini optimize etmelerine yardımcı oluyoruz. Kullanıcı dostu bir arayüzle, randevu yönetimini daha kolay hale getiriyoruz. Müşterilerimizin işlerini büyütmesine, müşterileriyle daha yakın bir ilişki kurmasına ve rekabet avantajı elde etmesine yardımcı olmak için buradayız.


                                </p>
                                <p>
                                    TakvimOS ile işinizi daha iyi yönetin, randevularınızı planlayın ve müşterilerinizle daha yakın bir ilişki kurun. Hedefimiz, işletmelerin ve profesyonellerin başarılı olmalarına yardımcı olmaktır. TakvimOS&apos;a hoş geldiniz!

                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>        </section>
    );
}
export default Hakkimizda;