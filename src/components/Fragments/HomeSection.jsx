import { Fragment } from "react"

const HomeSection = () => {
    return (
        <Fragment>
            <article className="flex flex-col gap-y-3">
                <h1 className="text-2xl font-bold text-purple-800">Lorem ipsum dolor sit amet.</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias hic facilis harum sint accusamus sunt itaque ab excepturi consequuntur a.</p>
                <ul className="flex flex-col gap-y-2">
                    <li className="flex items-center gap-x-3">
                    <div className="bg-green-500 w-5 h-5 rounded-full flex justify-center items-center">
                        <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <h2>Pelayanan Bagus</h2>
                    </li>
                    <li className="flex items-center gap-x-3">
                    <div className="bg-green-500 w-5 h-5 rounded-full flex justify-center items-center">
                        <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <h2>Cepat</h2>
                    </li>
                    <li className="flex items-center gap-x-3">
                    <div className="bg-green-500 w-5 h-5 rounded-full flex justify-center items-center">
                        <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <h2>Terpercaya</h2>
                    </li>
                    <li className="flex items-center gap-x-3">
                    <div className="bg-green-500 w-5 h-5 rounded-full flex justify-center items-center">
                        <i className="fas fa-check text-white text-xs"></i>
                    </div>
                    <h2>Murah</h2>
                    </li>
                </ul>
                </article>

                <section className="flex flex-col gap-y-5 justify-center">
                <article className="flex flex-col gap-y-2 justify-center">
                    <h1 className="text-2xl font-bold text-center">Servis Kami</h1>
                    <hr className="w-20 rounded-xl bg-purple-800 border-purple-800 border-y-4 self-center" />
                    <p className="text-center text-gray-500">Temukan layanan kami sesuai kebutuhan anda</p>
                </article>

                <article className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-semibold">Pembuatan <span className="text-purple-800">Website</span> <span className="block">Menggunakan Template</span></h2>
                    <p className="mt-3 text-gray-500">Kami telah menyediakan template yang mungkin sesuai dengan keinginan dan kebutuhan kalian yang pastinya sudah <i>responsif</i> disetiap tampilan device.</p>
                    <button className="flex items-center self-start justify-center gap-x-2 text-purple-800">
                        <p>Kunjungi Servis ini</p>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <img src="./images/template-service.png" alt="Template Service" />
                    </div>

                    <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-semibold">Pembuatan <span className="text-purple-800">Website</span> <span className="block">Menggunakan Design anda</span></h2>
                    <p className="mt-3 text-gray-500">Selain template yang sudah kami sediakan, anda masih tetap bisa mewujudkan impian anda dengan membuat website yang sesuai dengan design yang anda inginkan.</p>
                    <button className="flex items-center self-start justify-center gap-x-2 text-purple-800">
                        <p>Kunjungi Servis ini</p>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <img src="./images/custom-service.png" alt="Custom Service" />
                    </div>

                    <div className="flex flex-col gap-y-3">
                    <h2 className="text-xl font-semibold">IT <span className="text-purple-800">Konsultan</span> <span className="block">Menyediakan Layanan IT yang Inovatif</span></h2>
                    <p className="mt-3 text-gray-500">Selain menyediakan layanan pembuatan website, kami juga menyediakan tempat untuk anda yang sedang membutuhkan konsultasi seputar dunia IT</p>
                    <button className="flex items-center self-start justify-center gap-x-2 text-purple-800">
                        <p>Kunjungi Servis ini</p>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                    <img src="./images/it-consultan.png" alt="IT Consultan" />
                    </div>
                </article>
                </section>

                <section className="flex flex-col gap-y-5">
                <article className="flex flex-col gap-y-2 justify-center">
                    <h1 className="text-2xl font-bold">Bagaimana Melakukan Transaksinya?</h1>
                    <hr className="w-20 rounded-xl bg-purple-800 border-purple-800 border-y-4" />
                    <p className="text-gray-500">Anda bisa mengikuti step-step dibawah ini dengan mengikuti step-step dibawah ini.</p>
                </article>

                <section className="flex flex-col gap-y-3 justify-center items-center">
                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <i className="fas fa-search text-2xl text-purple-800"></i>
                        <h2>Pilih Template</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 1</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Pilih template yang sesuai dengan keinginan anda, jika tidak ada maka anda bisa mengikuti step selanjutnya.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <i className="fas fa-user text-2xl text-purple-800"></i>
                        <h2 className="text-sm">Hubungi Admin</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 2</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Setelah anda memilih design pilihan anda, anda bisa langsung menghubungi ke admin.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <i className="fas fa-comments text-2xl text-purple-800"></i>
                        <h2 className="text-sm">Diskusi Kebutuhan</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 3</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Diskusi dengan admin untuk menentukan pilihan dan kebutuhan kalian.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <i className="fab fa-searchengin text-2xl text-purple-800"></i>
                        <h2 className="text-sm">Menemukan Solusi</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 4</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Tim kami menemukan kebutuhan anda.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <i className="fas fa-money-check-dollar text-2xl text-purple-800"></i>
                        <h2 className="text-sm">Pembayaran DP</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 5</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Setelah tim kami menemukan kebutuhan anda, maka anda bisa langsung melakukan pembayaran setengah dari harga yang telah ditentukan.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <img src="./images/development.png" alt="Development" className="w-7" />
                        <h2 className="text-sm">Pembuatan Website</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 6</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Setelah anda melakukan setengah pembayaran, maka tim kami akan langsung memulai proses pembuatan website anda.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                    <img src="./images/pemberitahuan2.png" alt="Notification" className="w-7" />
                        <h2 className="text-sm">Pemberitahuan</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 7</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Admin kami akan memberitahukan bahwa website anda telah selesai.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <i className="fas fa-money-bill-wave text-2xl text-purple-800"></i>
                        <h2 className="text-sm">Pembayaran Penuh</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 8</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Setelah admin kami memberitahukan bahwa website anda telah selesai, maka anda bisa melakukan pembayaran penuh.</p>
                    </article>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-3">
                    <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                        <i className="fas fa-check text-2xl text-purple-800"></i>
                        <h2 className="text-sm">Transaksi Selesai</h2>
                    </div>

                    <div className="bg-purple-300 p-2 rounded-lg text-purple-800">
                        <h3>Step 9</h3>
                    </div>

                    <article>
                        <p className="text-center text-gray-500">Transkasi anda telah selesai.</p>
                    </article>
                    </div>
                </section>
                </section>

                <section className="flex flex-col gap-y-5 justify-center">
                <article className="flex flex-col gap-y-2 justify-center">
                    <h1 className="text-2xl font-bold text-center">Template Kami</h1>
                    <hr className="w-20 rounded-xl bg-purple-800 border-purple-800 border-y-4 self-center" />
                    <p className="text-center text-gray-500">Temukan template yang anda inginkan</p>
                </article>

                <article className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-3">
                    
                    </div>

                    <div className="flex flex-col gap-y-3">
                    
                    </div>

                    <div className="flex flex-col gap-y-3">
                    
                    </div>
                </article>
                </section>

                <section className="w-full h-20 flex items-center justify-between bg-black rounded-2xl mb-3">
                <img src="/images/logo.png" alt="CodeExpress" />
            </section>
        </Fragment>
    )
}

export default HomeSection;