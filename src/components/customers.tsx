import Link from "next/link";
/* eslint-disable @next/next/no-img-element */

function Customers() {
    return (
        <section>
            <div className="  text-black px-4 py-8   sm:py-12   lg:py-16">
                <div
                    className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16"
                >
                    <div
                        className="mx-auto space-y-4   text-left lg:mx-0 ltr:lg:text-left rtl:lg:text-right"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">Birçok Farklı İş Alanına Hizmet Veriyoruz</h2>

                        <p className="  text-gray-600">
                            Müşteri memnuniyeti bizim için önceliklidir ve farklı iş türlerinden işletmelere hizmet sunuyoruz. İşte bazı örnekler:
                        </p>

                        <Link href="/hizmet-alanlari" className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md w-40 bg-blue-100 border border-transparent font-semibold text-blue-500 hover:text-white hover:bg-black focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm  ">
                            Daha Fazla
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>

                            </span>

                            <h2 className="mt-2 font-bold">Berberler ve Kuaförler</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Randevu sistemi, saç kesimi ve stilinde uzman işletmeleri verimli hale getirir.                        </p>
                        </a>
                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9,1A1,1,0,0,0,8,2v9H7a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H16V8A7.008,7.008,0,0,0,9,1Zm1,2.1A5.008,5.008,0,0,1,14,8v3H10ZM9,13h7v2H8V13ZM8,21V17h8v4Z" /></svg>
                            </span>

                            <h2 className="mt-2 font-bold">Güzellik Salonları</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Güzellik salonları için randevu sistemiyle daha düzenli müşteriler.                     </p>
                        </a>   <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g transform="translate(2 3)"><path d="M20 16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3l2-3h6l2 3h3a2 2 0 0 1 2 2v11z" /><circle cx="10" cy="10" r="4" /></g></svg>
                            </span>

                            <h2 className="mt-2 font-bold">Fotoğrafçılar</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Fotoğrafçılar için randevu planlama ve özel etkinlikler.                   </p>
                        </a>   <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg width="24" height="24" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" x="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"   >
                                    <style type="text/css">

                                    </style>
                                    <g>
                                        <path className="st0" d="M168.992,79.369v64.216c0,5.004,7.165,9.054,15.994,9.054c8.829,0,15.988-4.05,15.988-9.054V79.369
		c0-5.004-7.159-9.054-15.988-9.054C176.157,70.316,168.992,74.365,168.992,79.369z"/>
                                        <path className="st0" d="M184.214,65.719c18.788,0.4,26.178-14.556,25.792-26.206C209.592,27.034,205.43,8.738,178.396,0
		c-0.835,14.549-18.717,20.788-19.546,40.138C158.359,51.352,164.676,65.298,184.214,65.719z M183.793,26.62
		c11.236,7.481,12.731,15.076,12.928,21.083c0.189,5.615-3.362,12.802-12.395,12.612c-9.404-0.204-12.443-6.92-12.212-12.303
		C172.515,38.706,182.558,34.101,183.793,26.62z"/>
                                        <path className="st0" d="M240.57,79.369v64.216c0,5.004,7.158,9.054,16.002,9.054c8.822,0,15.988-4.05,15.988-9.054V79.369
		c0-5.004-7.166-9.054-15.988-9.054C247.729,70.316,240.57,74.365,240.57,79.369z"/>
                                        <path className="st0" d="M255.8,65.719c18.78,0.4,26.177-14.556,25.784-26.206c-0.42-12.479-4.576-30.774-31.61-39.513
		c-0.828,14.549-18.718,20.788-19.546,40.138C229.945,51.352,236.248,65.298,255.8,65.719z M255.379,26.62
		c11.229,7.481,12.724,15.076,12.927,21.083c0.182,5.615-3.369,12.802-12.401,12.612c-9.412-0.204-12.443-6.92-12.204-12.303
		C244.1,38.706,254.129,34.101,255.379,26.62z"/>
                                        <path className="st0" d="M209.171,110.994c7.432-1.165,15.188-2.063,23.202-2.667V91.876c-7.973,0.568-15.721,1.404-23.202,2.512
		V110.994z"/>
                                        <path className="st0" d="M280.749,108.396c8.029,0.639,15.784,1.572,23.21,2.765V94.57c-7.482-1.13-15.229-2.007-23.21-2.596V108.396z"
                                        />
                                        <path className="st0" d="M312.149,79.369v64.216c0,5.004,7.165,9.054,15.995,9.054c8.829,0,15.987-4.05,15.987-9.054V79.369
		c0-5.004-7.158-9.054-15.987-9.054C319.314,70.316,312.149,74.365,312.149,79.369z"/>
                                        <path className="st0" d="M327.371,65.719c18.788,0.4,26.178-14.556,25.792-26.206C352.75,27.034,348.588,8.738,321.56,0
		c-0.842,14.549-18.717,20.788-19.553,40.138C301.524,51.352,307.833,65.298,327.371,65.719z M326.964,26.62
		c11.222,7.481,12.724,15.076,12.921,21.083c0.196,5.615-3.369,12.802-12.409,12.612c-9.397-0.204-12.429-6.92-12.198-12.303
		C315.679,38.706,325.716,34.101,326.964,26.62z"/>
                                        <path className="st0" d="M456.52,270.917c-5.025-9.889-13.187-18.591-23.623-26.339c-8.842-6.542-19.447-12.374-31.378-17.567v-70.203
		c0-5.299-1.312-10.464-3.628-15.188c-4.07-8.31-10.997-15.321-19.791-21.42c-7.292-5.011-15.98-9.405-25.771-13.216v17.728
		c10.59,4.681,18.964,10.071,24.423,15.51c2.955,2.92,5.06,5.818,6.408,8.584c1.341,2.765,1.951,5.355,1.966,8.001v9.215
		c-1.614-0.484-3.32-0.751-5.088-0.751c-9.762,0.007-17.658,7.91-17.665,17.665v16.725v8.59c0,1.881-0.751,3.537-1.979,4.779
		c-1.235,1.228-2.899,1.972-4.772,1.972c-1.888,0-3.544-0.744-4.779-1.972c-1.228-1.242-1.972-2.898-1.972-4.779v-8.731
		c-0.014-11.397-9.244-20.626-20.634-20.634c-11.391,0.007-20.62,9.236-20.62,20.634v6.268v13.236c0,2.358-0.94,4.443-2.477,5.994
		c-1.558,1.544-3.636,2.477-5.994,2.477s-4.449-0.934-5.994-2.477c-1.544-1.551-2.484-3.636-2.484-5.994v-6.156
		c0-11.397-9.229-20.619-20.626-20.626c-11.391,0.007-20.613,9.229-20.613,20.626v14.697c-0.006,2.695-1.081,5.081-2.849,6.857
		c-1.769,1.762-4.156,2.835-6.85,2.842c-2.695-0.007-5.081-1.081-6.857-2.842c-1.762-1.776-2.835-4.162-2.835-6.857v-25.42v-4.274
		h-0.484c-1.951-8.66-9.671-15.131-18.921-15.131c-10.717,0-19.398,8.681-19.406,19.405v8.464c0,2.365-0.941,4.449-2.477,5.994
		c-1.551,1.544-3.636,2.477-5.994,2.484c-2.358-0.007-4.443-0.941-5.994-2.484c-1.537-1.544-2.477-3.629-2.484-5.994v-21.012
		c0-10.724-8.674-19.406-19.398-19.406c-10.724,0-19.398,8.682-19.405,19.406v5.965c-0.007,1.664-0.66,3.123-1.748,4.212
		c-1.094,1.087-2.554,1.747-4.218,1.747c-0.954,0-1.832-0.231-2.625-0.624v-44.088c0.007-2.646,0.61-5.236,1.958-8.001
		c2.331-4.822,7.131-10.113,14.38-15.104c4.85-3.355,10.801-6.54,17.567-9.46v-17.728c-1.712,0.66-3.404,1.334-5.054,2.022
		c-13.11,5.509-24.016,12.12-32.031,20.044c-4,3.966-7.285,8.289-9.601,13.04c-2.316,4.723-3.621,9.889-3.621,15.188v70.168
		c-17.265,7.524-31.624,16.395-42.152,26.774c-5.537,5.482-10.022,11.405-13.166,17.812c-3.13,6.394-4.885,13.307-4.878,20.395
		v129.016c-0.007,7.088,1.747,13.994,4.878,20.388c5.516,11.222,15.047,20.928,27.385,29.442
		c18.542,12.731,43.688,22.893,73.327,30.038C185.513,507.965,219.642,512,256.004,512c55.416-0.021,105.61-9.32,142.701-24.802
		c18.542-7.776,33.87-17.076,44.966-28.024c5.544-5.482,10.029-11.398,13.166-17.812c3.137-6.394,4.892-13.3,4.878-20.388V291.958
		C461.729,284.624,459.854,277.493,456.52,270.917z M126.882,212.231c0.856,0.133,1.734,0.224,2.625,0.224
		c9.327,0,16.893-7.558,16.9-16.893v-5.965c0-2.359,0.934-4.443,2.477-5.994c1.551-1.544,3.636-2.484,5.994-2.484
		s4.436,0.94,5.994,2.484c1.537,1.551,2.477,3.635,2.477,5.994v21.012c0.007,10.724,8.689,19.405,19.406,19.405
		c10.717,0,19.398-8.682,19.405-19.405v-8.464c0-2.365,0.94-4.443,2.478-6.001c1.558-1.544,3.636-2.477,5.994-2.477
		c2.358,0,4.436,0.934,5.994,2.477c1.537,1.558,2.477,3.636,2.477,6.001v25.42c0.007,11.39,9.236,20.619,20.626,20.619
		c11.398,0,20.62-9.229,20.62-20.619v-14.697c0.006-2.695,1.081-5.081,2.842-6.85c1.768-1.768,4.162-2.842,6.85-2.842
		c2.695,0,5.088,1.074,6.857,2.842c1.754,1.769,2.835,4.155,2.842,6.85v6.156c0,10.724,8.682,19.405,19.406,19.412
		c10.717-0.007,19.398-8.688,19.398-19.412v-13.236v-6.268c0.007-2.702,1.081-5.088,2.842-6.857c1.769-1.762,4.155-2.835,6.85-2.835
		c2.695,0,5.081,1.074,6.857,2.835c1.762,1.769,2.835,4.162,2.835,6.857v8.731c0.007,9.769,7.917,17.686,17.693,17.686
		c9.77,0,17.679-7.917,17.686-17.686v-8.59v-16.725c0-1.874,0.737-3.523,1.966-4.758c1.242-1.228,2.891-1.972,4.765-1.972
		c1.874,0,3.523,0.744,4.751,1.972l0.337,0.4v78.042c-0.014,2.646-0.625,5.236-1.966,8.008c-2.33,4.814-7.131,10.106-14.38,15.096
		c-10.843,7.51-26.936,14.212-46.349,18.872c-19.426,4.688-42.158,7.404-66.434,7.404c-36.972,0.022-70.428-6.352-93.918-16.226
		c-11.748-4.913-20.956-10.71-26.831-16.563c-2.947-2.926-5.06-5.825-6.408-8.583c-1.347-2.772-1.95-5.362-1.958-8.008V212.231z
		 M444.52,420.974c-0.014,4.295-1.018,8.492-3.13,12.829c-3.677,7.566-10.977,15.476-21.686,22.83
		c-16.022,11.047-39.45,20.732-67.6,27.483c-28.143,6.773-61.024,10.689-96.1,10.682c-53.444,0.022-101.813-9.124-136.062-23.476
		c-17.125-7.144-30.67-15.608-39.513-24.38c-4.436-4.38-7.699-8.808-9.811-13.139c-2.12-4.337-3.124-8.534-3.13-12.829v-32.052
		c1.004,1.102,2.021,2.21,3.109,3.291c16.022,15.777,41.716,28.536,73.741,37.611c32.017,9.039,70.385,14.276,111.667,14.282
		c55.044-0.014,104.894-9.285,141.452-24.557c18.282-7.657,33.274-16.802,43.948-27.336c1.096-1.081,2.113-2.19,3.116-3.298V420.974
		z M444.52,362.105c-2.309,4.898-5.839,9.762-10.674,14.556c-13.896,13.798-38.194,26.22-69.095,34.916
		c-30.901,8.737-68.385,13.882-108.747,13.874c-53.816,0.014-102.529-9.166-137.312-23.728
		c-17.391-7.264-31.266-15.882-40.537-25.062c-4.829-4.793-8.359-9.65-10.668-14.549v-37.54c1.004,1.109,2.021,2.218,3.109,3.291
		c16.022,15.784,41.716,28.536,73.741,37.618c32.017,9.039,70.385,14.275,111.667,14.275c55.044-0.014,104.894-9.285,141.452-24.557
		c18.282-7.65,33.274-16.802,43.948-27.336c1.096-1.074,2.113-2.182,3.116-3.298V362.105z M444.52,305.658
		c-2.309,4.906-5.839,9.762-10.674,14.556c-13.896,13.805-38.194,26.22-69.095,34.916c-30.901,8.737-68.385,13.882-108.747,13.874
		c-53.816,0.022-102.529-9.166-137.312-23.728c-17.391-7.257-31.266-15.876-40.537-25.062c-4.829-4.794-8.359-9.65-10.668-14.549
		v-13.707c0.007-4.295,1.011-8.499,3.13-12.836c3.158-6.484,8.948-13.216,17.307-19.644c6.204-4.773,13.798-9.362,22.557-13.609
		v10.752c0,5.299,1.305,10.472,3.621,15.195c4.077,8.303,11.004,15.307,19.805,21.413c13.236,9.11,30.978,16.268,51.823,21.314
		c20.837,5.018,44.776,7.854,70.266,7.854c38.867-0.014,74.064-6.534,100.269-17.504c13.104-5.51,24.016-12.113,32.032-20.037
		c4-3.972,7.285-8.295,9.594-13.04c2.316-4.723,3.628-9.896,3.628-15.195v-10.766c12.17,5.895,22.059,12.458,29.147,19.244
		c4.751,4.527,8.24,9.11,10.499,13.588c2.267,4.492,3.341,8.835,3.355,13.271V305.658z"/>
                                    </g>
                                </svg>
                            </span>

                            <h2 className="mt-2 font-bold">Düğün Salonları</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Düğün salonları için düzenli rezervasyonlar ve etkinlik planlama.</p>                        </a>
                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <title>sports-basketball</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="invisible_box" data-name="invisible box">
                                            <rect width="48" height="48" fill="none" />
                                        </g>
                                        <g id="Q3_icons" data-name="Q3 icons">
                                            <path d="M45.5,19.1A22.1,22.1,0,0,0,24,2a28.1,28.1,0,0,0-4.9.5A22,22,0,0,0,24,46a21.2,21.2,0,0,0,4.9-.6A21.9,21.9,0,0,0,45.5,19.1ZM41.3,19l-7.1,1.6A21.1,21.1,0,0,1,34,18a15.8,15.8,0,0,1,1.9-7.5A18.1,18.1,0,0,1,41.3,19ZM24,6a18.1,18.1,0,0,1,9.5,2.7A18.2,18.2,0,0,0,31,18a18.4,18.4,0,0,0,.3,3.3l-6.1,1.4L21.5,6.2Zm-5.4.9,3.7,16.5-6.1,1.3A18.9,18.9,0,0,0,8.8,14.4,17.5,17.5,0,0,1,18.6,6.9ZM7.4,17.1a15.6,15.6,0,0,1,5.9,8.3L6.3,27A17.6,17.6,0,0,1,7.4,17.1ZM7,29.9l6.9-1.6A9.7,9.7,0,0,1,14,30a15.8,15.8,0,0,1-1.9,7.5A17.4,17.4,0,0,1,7,29.9Zm7.5,9.4A18.2,18.2,0,0,0,17,30a8.6,8.6,0,0,0-.2-2.3L23,26.3l3.5,15.5L24,42A18.1,18.1,0,0,1,14.5,39.3Zm14.9,1.8L25.9,25.6,32,24.2a19.3,19.3,0,0,0,7.2,9.4A17.5,17.5,0,0,1,29.4,41.1ZM40.6,30.9A15.9,15.9,0,0,1,35,23.5L41.9,22A18.1,18.1,0,0,1,40.6,30.9Z" />
                                        </g>
                                    </g>
                                </svg>
                            </span>

                            <h2 className="mt-2 font-bold">Spor Tesisleri</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Spor merkezleri için randevu planlama ve hızlı organizasyon.                            </p>
                        </a>


                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg fill="#000000" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14,2H10A3,3,0,0,0,7,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9a3,3,0,0,0-3-3H17V5A3,3,0,0,0,14,2ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM20,9V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H19A1,1,0,0,1,20,9Zm-7,4h2v2H13v2H11V15H9V13h2V11h2Z" /></svg>
                            </span>

                            <h2 className="mt-2 font-bold">Klinikler</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Klinikler için randevu planlama ile daha iyi müşteri hizmeti. </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 className="mt-2 font-bold">Danışmanlar</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Danışmanlar için randevu sistemiyle daha iyi müşteri ilişkileri.                            </p>
                        </a>

                        <a
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                    <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                    ></path>
                                </svg>
                            </span>

                            <h2 className="mt-2 font-bold">Öğretmenler</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Öğretmenler için öğrenci randevularını daha iyi yönetin.                            </p>
                        </a>
                        <Link
                            className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                            href="/hizmet-alanlari"
                        >
                            <span className="inline-block rounded-lg bg-gray-50 p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </span>

                            <h2 className="mt-2 font-bold">Ve Daha Fazlası</h2>

                            <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                Keşfetmek İçin Dokunun </p>
                        </Link>

                    </div>
                </div>
            </div>
        </section>

    );
}
export default Customers;