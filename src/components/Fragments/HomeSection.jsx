import { Fragment } from "react";
import Template from "../../utils/template";

const HomeSection = () => {
  const scrollMenu = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = (id, e) => {
    e.preventDefault();
    scrollMenu(id);
  };

  return (
    <Fragment>
      <article className="flex flex-col gap-y-3 xl:self-center xl:w-3/5 mt-8">
        <h1 className="text-2xl font-bold text-[#344CB7] md:text-4xl">
          Wujudkan Mimpi Kalian Bersama Kami
        </h1>
        <p className="text-gray-500">
          Jasa pembuatan website sesuai dengan keinginan kalian dengan harga
          terjangkau, murah, cepat, dan bergaransi.
        </p>
        <ul className="flex flex-col md:flex-row md:gap-x-4 gap-y-2">
          <li className="flex items-center gap-x-3 md:gap-x-2">
            <div className="bg-green-500 w-5 h-5 md:p-3 rounded-full flex justify-center items-center">
              <i className="fas fa-check text-white text-xs"></i>
            </div>
            <h2>Pelayanan Bagus</h2>
          </li>
          <li className="flex items-center gap-x-3 md:gap-x-2">
            <div className="bg-green-500 w-5 h-5 md:p-3 rounded-full flex justify-center items-center">
              <i className="fas fa-check text-white text-xs"></i>
            </div>
            <h2>Cepat</h2>
          </li>
          <li className="flex items-center gap-x-3 md:gap-x-2">
            <div className="bg-green-500 w-5 h-5 md:p-3 rounded-full flex justify-center items-center">
              <i className="fas fa-check text-white text-xs"></i>
            </div>
            <h2>Terpercaya</h2>
          </li>
          <li className="flex items-center gap-x-3 md:gap-x-2">
            <div className="bg-green-500 w-5 h-5 md:p-3 rounded-full flex justify-center items-center">
              <i className="fas fa-check text-white text-xs"></i>
            </div>
            <h2>Murah</h2>
          </li>
        </ul>
      </article>

      <section className="flex flex-col gap-y-5 justify-center xl:self-center xl:w-3/5">
        <article className="flex flex-col gap-y-2 justify-center">
          <h1 className="text-2xl font-bold text-center">Servis Kami</h1>
          <hr className="w-20 md:w-28 rounded-xl border-[#344CB7] border-2 border-y-2 self-center" />
          <p className="text-center text-gray-500">
            Temukan layanan kami sesuai kebutuhan anda
          </p>
        </article>

        <article className="flex flex-col gap-y-3 md:grid md:grid-cols-3 md:gap-3">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl md:text-2xl font-semibold">
              Pembuatan <span className="text-[#344CB7]">Website</span>{" "}
              <span className="block">Menggunakan Template</span>
            </h2>
            <p className="mt-3 text-gray-500">
              Kami telah menyediakan template yang mungkin sesuai dengan
              keinginan dan kebutuhan kalian yang pastinya sudah{" "}
              <i>responsif</i> disetiap tampilan device.
            </p>
            <a
              href="#template"
              onClick={(e) => handleClick("template", e)}
              className="flex items-center self-start justify-center gap-x-2 text-[#344CB7]"
            >
              <p>Kunjungi Servis ini</p>
              <i className="fas fa-arrow-right"></i>
            </a>
            <img src="./images/template-service.png" alt="Template Service" />
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-semibold md:text-2xl">
              Pembuatan <span className="text-[#344CB7]">Website</span>{" "}
              <span className="block">Menggunakan Design anda</span>
            </h2>
            <p className="mt-3 text-gray-500">
              Selain template yang sudah kami sediakan, anda masih tetap bisa
              mewujudkan impian anda dengan membuat website yang sesuai dengan
              design yang anda inginkan.
            </p>
            <a
              href="https://wa.me/6285866244363"
              className="flex items-center self-start justify-center gap-x-2 text-[#344CB7]"
            >
              <p>Kunjungi Servis ini</p>
              <i className="fas fa-arrow-right"></i>
            </a>
            <img src="./images/custom-service.png" alt="Custom Service" />
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-semibold md:text-2xl">
              IT <span className="text-[#344CB7]">Konsultan</span>{" "}
              <span className="block">
                Memberikan solusi untuk keperluan anda
              </span>
            </h2>
            <p className="mt-3 text-gray-500">
              Selain menyediakan layanan pembuatan website, kami juga
              menyediakan tempat untuk anda yang sedang membutuhkan konsultasi
              seputar dunia IT
            </p>
            <a
              href="https://wa.me/6285866244363"
              className="flex items-center self-start justify-center gap-x-2 text-[#344CB7]"
            >
              <p>Kunjungi Servis ini</p>
              <i className="fas fa-arrow-right"></i>
            </a>
            <img src="./images/it-consultan.png" alt="IT Consultan" />
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-semibold md:text-2xl">
              Data <span className="text-[#344CB7]">Analyst</span>{" "}
              <span className="block">
                Menyediakan Layanan IT yang Inovatif
              </span>
            </h2>
            <p className="mt-3 text-gray-500">
              Kami membantu mengubah data mentah menjadi wawasan berharga untuk
              mendukung keputusan strategis. Layanan kami mencakup pengumpulan,
              analisis, dan visualisasi data untuk meningkatkan efisiensi bisnis
              Anda.
            </p>
            <a
              href="https://wa.me/6285866244363"
              className="flex items-center self-start justify-center gap-x-2 text-[#344CB7]"
            >
              <p>Kunjungi Servis ini</p>
              <i className="fas fa-arrow-right"></i>
            </a>
            <img src="./images/data-analyst.png" alt="Data Analyst" />
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-semibold md:text-2xl">
              Pembuatan <span className="text-[#344CB7]">Design UI & UX</span>{" "}
              <span className="block">
                Menyediakan Layanan IT yang Inovatif
              </span>
            </h2>
            <p className="mt-3 text-gray-500">
              Kami menyediakan desain UI & UX yang inovatif, fungsional, dan
              mudah digunakan. Tingkatkan interaksi pengguna dengan desain yang
              intuitif dan menarik sesuai kebutuhan Anda.
            </p>
            <a
              href="https://wa.me/6285866244363"
              className="flex items-center self-start justify-center gap-x-2 text-[#344CB7]"
            >
              <p>Kunjungi Servis ini</p>
              <i className="fas fa-arrow-right"></i>
            </a>
            <img src="./images/uiux.png" alt="UI & UX" />
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="text-xl font-semibold md:text-2xl">
              Pembuatan <span className="text-[#344CB7]">Logo</span>{" "}
              <span className="block">
                Menyediakan Layanan IT yang Inovatif
              </span>
            </h2>
            <p className="mt-3 text-gray-500">
              Kami menciptakan logo yang unik dan profesional untuk
              merepresentasikan identitas bisnis Anda. Jadikan logo Anda sebagai
              simbol kuat yang mudah dikenali oleh pelanggan.
            </p>
            <a
              href="https://wa.me/6285866244363"
              className="flex items-center self-start justify-center gap-x-2 text-[#344CB7]"
            >
              <p>Kunjungi Servis ini</p>
              <i className="fas fa-arrow-right"></i>
            </a>
            <img src="./images/it-consultan.png" alt="IT Consultan" />
          </div>
        </article>
      </section>

      <section className="flex flex-col gap-y-10 xl:self-center xl:w-3/5">
        <article className="flex flex-col gap-y-2 justify-center items-center">
          <h1 className="text-2xl font-bold md:text-4xl">
            Bagaimana Melakukan Transaksinya?
          </h1>
          <hr className="w-20 rounded-xl border-[#344CB7] border-2 border-y-2" />
          <p className="text-gray-500">
            Anda bisa mengikuti step-step dibawah ini dengan mengikuti step-step
            dibawah ini.
          </p>
        </article>

        <section className="flex flex-col gap-y-3 justify-center items-center md:flex-row md:grid md:grid-cols-3 md:gap-3 md:items-start">
          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full self-center">
                <i className="fas fa-search text-2xl text-[#344CB7]"></i>
                <h2>Pilih Template</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 1</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Pilih template yang sesuai dengan keinginan anda, jika tidak ada
                maka anda bisa mengikuti step selanjutnya.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fas fa-user text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Hubungi Admin</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 2</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Setelah anda memilih design pilihan anda, anda bisa langsung
                menghubungi ke admin.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fas fa-comments text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Diskusi Kebutuhan</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 3</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Diskusi dengan admin untuk menentukan pilihan dan kebutuhan
                kalian.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fab fa-searchengin text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Menemukan Solusi</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 4</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Tim kami menemukan kebutuhan anda.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fas fa-money-check-dollar text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Pembayaran DP</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 5</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Setelah tim kami menemukan kebutuhan anda, maka anda bisa
                langsung melakukan pembayaran setengah dari harga yang telah
                ditentukan.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fas fa-code text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Pembuatan Website</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 6</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Setelah anda melakukan setengah pembayaran, maka tim kami akan
                langsung memulai proses pembuatan website anda.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fas fa-bell text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Pemberitahuan</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 7</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Admin kami akan memberitahukan bahwa website anda telah selesai.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fas fa-money-bill-wave text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Pembayaran Penuh</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <h3>Step 8</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Setelah admin kami memberitahukan bahwa website anda telah
                selesai, maka anda bisa melakukan pembayaran penuh.
              </p>
            </article>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-3">
            <div className="bg-[url('./images/border3.png')] bg-cover bg-center bg-no-repeat p-11 flex justify-center items-center">
              <div className="flex flex-col gap-y-3 w-36 h-36 justify-center items-center bg-white shadow-sm shadow-black rounded-full">
                <i className="fas fa-check text-2xl text-[#344CB7]"></i>
                <h2 className="text-sm">Transaksi Selesai</h2>
              </div>
            </div>

            <div className="bg-[#577BC1] p-2 rounded-lg text-[#000957]">
              <div id="template"></div>
              <h3>Step 9</h3>
            </div>

            <article>
              <p className="text-center text-gray-500">
                Transkasi anda telah selesai.
              </p>
            </article>
          </div>
        </section>
      </section>

      <section className="flex flex-col gap-y-5 justify-center xl:self-center xl:w-3/5">
        <article className="flex flex-col gap-y-2 justify-center">
          <h1 className="text-2xl xl:text-4xl font-bold text-center">
            Template Kami
          </h1>
          <hr className="w-20 xl:w-56 rounded-xl border-[#344CB7] border-2 border-y-2 self-center" />
          <p className="text-center text-gray-500">
            Temukan template yang anda inginkan
          </p>
        </article>

        <div className="flex flex-col gap-y-3 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {Template.map((item) => (
            <div key={item.id} className="flex flex-col gap-y-3">
              <img src={item.image} alt="Template 1" className="rounded-xl" />
              <div className="flex justify-between items-center">
                <h1 className="font-semibold">{item.name}</h1>
                <a
                  href={item.url}
                  target="_blank"
                  className="border-black border-2 rounded-lg flex justify-center w-10 h-6 p-3 hover:bg-[#344CB7] group border-solid items-center"
                >
                  <i className="fas fa-eye text-lg text-[#344CB7] group-hover:text-white"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full h-20 flex items-center justify-center bg-[#344CB7] rounded-2xl mb-3 md:mb-12 xl:self-center xl:w-3/5">
        <img src="/images/logo.png" alt="code.express" className="w-52" />
      </section>
    </Fragment>
  );
};

export default HomeSection;
