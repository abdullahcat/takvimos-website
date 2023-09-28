function FAQ() {
    return (
        <div className="space-y-4">
            <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-black"
                >
                    <h2 className="font-medium">
                        Randevularımı nasıl görüntüleyebilirim?
                    </h2>

                    <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Randevularınızı görüntülemek için hesabınıza giriş yapın ve randevu takviminize gidin. Tüm randevularınızı orada görebilirsiniz.


                </p>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900"
                >
                    <h2 className="font-medium">
                        Randevu sistemini nasıl kullanabilirim?
                    </h2>

                    <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Randevu sistemimizi kullanmaya başlamak için hemen web sitemize kaydolun veya satış ekibimizle iletişime geçin. Hızlı ve kolay bir kayıt işlemi sonrası, giriş yapın ve istediğiniz tarihi ve saati seçerek randevunuzu alın veya düzenleyin.

                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900"
                >
                    <h2 className="font-medium">
                        Randevu sistemini hangi işletmeler kullanabilir?
                    </h2>

                    <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Randevu sistemi, birçok farklı sektördeki işletmeler için uygundur. Kuaförlerden, restoranlara ve sağlık hizmetlerine kadar geniş bir yelpazede kullanılabilir. İşletmenizin ihtiyaçlarına uygun olarak özelleştirilebilir.


                </p>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900"
                >
                    <h2 className="font-medium">
                        Randevu takvimi herkese açık hale getirilebilir mi?
                    </h2>

                    <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Evet, isterseniz randevu takviminizi herkese açık hale getirebilirsiniz. Bu, randevularınızı daha görünür hale getirir ve müşterilerinizin sizinle iletişime geçmeden önce uygun saatleri görmelerine yardımcı olur.



                </p>
            </details> <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900"
                >
                    <h2 className="font-medium">
                        Randevu sistemini nasıl özelleştirebilirim?
                    </h2>

                    <svg
                        className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Randevu sistemi kişiselleştirilebilir ve ihtiyaçlarınıza göre ayarlanabilir. İşte size nasıl özelleştireceğinizi gösterecek bir rehber sunabiliriz.

                </p>
            </details>
        </div>
    );
}
export default FAQ;