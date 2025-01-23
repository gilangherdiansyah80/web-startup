import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
  return (
    <div>
      <header className="fixed z-10 top-0 w-full bg-[#577BC1] flex justify-center">
        <div className="flex items-center justify-between w-full h-24 xl:w-3/5 xl:self-center">
          <a href="" className="-ms-8">
            <img
              src="./images/logo.png"
              alt="code.express"
              className="w-32 md:w-64"
            />
          </a>
          <nav className="text-white me-5">
            <ul className="flex gap-x-7 md:gap-x-10">
              <Link to="/">
                <li className="hover:text-[#000957] md:text-xl">Home</li>
              </Link>
              <Link to="/help">
                <li className="hover:text-[#000957] md:text-xl">Help</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>

      <main className="text-black mt-24 p-3 flex flex-col gap-y-10 md:gap-y-20 lg:justify-center">
        {children}
      </main>

      <footer className="bg-[#577BC1] text-white p-3 flex flex-col gap-y-5 md:text-xl">
        <section className="flex flex-col gap-y-5 md:flex-row md:p-5 md:justify-center md:items-center md:gap-x-5 xl:w-3/5 xl:self-center">
          <div className="md:w-1/3">
            <img
              src="/images/logo.png"
              alt="code.express"
              className="w-52 -mt-20 -ms-10"
            />
            <p className="-mt-16">
              Mari wujudkan impian kalian bersama code.express
            </p>
          </div>

          <hr />

          <div className="flex flex-col gap-y-3 md:w-1/3">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-xl font-semibold">Menu Kami</h1>
              <hr className="w-20 rounded-xl border-2 border-[#000957] border-y-2" />
            </div>
            <ul className="flex flex-col gap-y-2">
              <Link to="/">
                <li className="hover:text-[#000957] md:text-xl">Home</li>
              </Link>
              <Link to="/help">
                <li className="hover:text-[#000957] md:text-xl">Help</li>
              </Link>
            </ul>
          </div>

          <hr />

          <div className="flex flex-col gap-y-3 md:w-1/3">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-xl font-semibold">Hubungi Kami</h1>
              <hr className="w-20 rounded-xl border-2 border-[#000957] border-y-2" />
            </div>
            <ul className="flex flex-col gap-y-3">
              <li className="flex gap-x-3 items-center">
                <img src="/images/email.png" alt="Email" className="w-6" />
                <p>code.express@gmai.com</p>
              </li>
              <li className="flex gap-x-3 items-center">
                <a
                  className="flex gap-x-3 items-center"
                  href="https://wa.me/6285866244363"
                >
                  <i className="fab fa-whatsapp text-2xl text-green-600 hover:text-[#000957]"></i>
                  <p>+62 858 66244363</p>
                </a>
              </li>
            </ul>
          </div>
        </section>

        <hr className="xl:w-3/5 xl:self-center" />

        <div className="text-center flex justify-center items-start p-3">
          <p className="text-sm -mt-4 md:text-xl">
            © Copyright 2024. All Rights Reserved by code.express
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;
