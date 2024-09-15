import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
    return (
        <div>
      <header className='fixed z-10 top-0 w-full h-24 flex items-center justify-between bg-black'>
        <a href="" className="-ms-2">
          <img src="./images/logo.png" alt="CodeExpress" className="w-32" />
        </a>
        <nav className="text-white me-5">
            <ul className="flex gap-x-7">
              <Link to='/'>
                <li className="hover:text-purple-800">Home</li>
              </Link>
              <Link  to='/help'>
                <li className="hover:text-purple-800">Help</li>
              </Link>
            </ul>
        </nav>
      </header>

      <main className="text-black mt-24 p-3 flex flex-col gap-y-10">
        {children}
      </main>

      <footer className="bg-black text-white p-3 flex flex-col gap-y-5">
        <div>
          <img src="/images/logotext.png" alt="CodeExpress" className="w-52 -mt-20 -ms-10" />
          <p className="-mt-20">Mari wujudkan impian kalian bersama CodeExpress</p>
        </div>

        <hr />

        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-xl font-semibold">Menu Kami</h1>
            <hr className="w-20 rounded-xl bg-purple-800 border-purple-800 border-y-2" />
          </div>
          <ul className="flex flex-col gap-y-2">
            <li className="hover:text-purple-800">Home</li>
            <li className="hover:text-purple-800">Help</li>
          </ul>
        </div>

        <hr />

        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-xl font-semibold">Hubungi Kami</h1>
            <hr className="w-20 rounded-xl bg-purple-800 border-purple-800 border-y-2" />
          </div>
          <ul className="flex flex-col gap-y-3">
            <li className="flex gap-x-3 items-center">
              <img src="/images/email.png" alt="Email" className="w-6" />
              <p>codeexpress@gmai.com</p>
            </li>
            <li className="flex gap-x-3 items-center">
              <i className="fab fa-whatsapp text-2xl text-green-600 hover:text-purple-800"></i>
              <p>+62 858 66244363</p>
            </li>
          </ul>
        </div>

        <hr />

        <div className="text-center flex justify-center items-start">
          <p className="text-sm">© Copyright 2024. All Rights Reserved by CodeExpress</p>
        </div>
      </footer>
    </div>
    )
}

export default AuthLayout;