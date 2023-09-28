/* eslint-disable @next/next/no-img-element */

function Features() {
    return (
        <section className=" min-h-screen flex flex-col space-y-4  md:space-y-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">

                <div className="rounded-xl text-center bg-blue-500 text-white lg:col-span-2 m-4 ">
                    <div className="md:p-10 p-4 space-y-5">

                        <h3 className="text-3xl font-bold ">Randevu Takvimini Paylaşma Özgürlüğü</h3>
                        <p className="mt-4">Randevu sistemi ile isterseniz takviminizi herkese açık hale getirin. Müşterileriniz randevularınızı aramadan önce kolayca görebilsin.</p>
                        <img src="/takvimosmac.png" alt="flutter-firebase" />

                    </div>
                </div>
                <div className="rounded-xl bg-black-500 m-4 flex items-center justify-center">
                    <div className="md:p-10 p-4  text-black text-start space-y-5   ">
                        <img src="/flutter-firebase.png" className="h-32" alt="flutter-firebase" />

                        <h3 className="text-3xl      ">Google İle Daha İleri Gidin</h3>
                        <p  >Sistemimiz, Google'ın servislerini kullanarak size daha hızlı ve güvenilir bir hizmet sunar. Bu da size ekstra güvenlik ve performans sağlar.</p>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3  lg:gap-8">
                <div className="rounded-xl bg-white m-4 flex items-center justify-center">
                    <div className="md:p-10 p-4 text-black flex-col flex space-y-5 text-end">
                        <img src="/newcustomer.png" alt="New Customer Button" />
                        <h3 className="text-3xl  ">Kişiler Sizin Kontrolünüzde</h3>
                        <p className="mt-4  ">Kişileri düzenleyerek belirli müşterilerinizin randevularını kolayca takip edin.</p>

                    </div>
                </div>
                <div className=" rounded-xl bg-blue-500 lg:col-span-2 m-4 ">
                    <div className="md:p-10 flex flex-col text-white text-center p-4 space-y-5">
                        <h3 className="text-3xl font-bold   ">Her An Her Yerden Erişim</h3>
                        <p className="mt-4  ">Telefon, tablet veya bilgisayarınızdan kolayca randevularınıza erişin ve düzenleyin. İşletmenizi her yerden yönetmek artık daha kolay.</p>
                        <img src="/allplatforms.webp" alt="All Platforms" />

                    </div>
                </div>

            </div>

        </section>
    );
}
export default Features;