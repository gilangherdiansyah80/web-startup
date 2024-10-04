import { Fragment, useState } from "react";
import Faq from "../../utils/faq";

const HelpSection = () => {
    const [isOpen, setIsOpen] = useState([]);

    const toggleIsOpen = (id) => {
        if (isOpen.includes(id)) {
            setIsOpen(isOpen.filter((item) => item !== id));
        } else {
            setIsOpen([...isOpen, id]);
        }
    }

    return (
        <Fragment>
            <section className="flex flex-col gap-y-3 lg:flex-row lg:justify-between lg:items-center xl:w-3/5 xl:self-center">
                <div className="flex flex-col gap-y-3">
                    <h1 className="text-2xl font-bold">Perlu Bantuan?</h1>
                    <hr className="w-20 rounded-xl border-2 border-purple-800 border-y-4" />
                    <p className="text-gray-500">Jangan khawatir cari dan temukan pertanyaanmu disini</p>
                </div>
                <img src="./images/faq-illustration.svg" alt="" />
            </section>

            <section className="flex flex-col gap-y-3 xl:w-3/5 xl:self-center md:mb-12">
                <h1 className="text-2xl font-bold">Pertanyaan Populer</h1>
                <hr className="w-20 rounded-xl border-2 border-purple-800 border-y-4" />

                <section className="flex lg:flex-row lg:gap-x-10 flex-col gap-y-5">
                    <div className="lg:w-3/4">
                        <hr className="border-gray-500" />
                        {Faq.map((item) => (
                            <article className="flex flex-col gap-y-3" key={item.id}>
                                <div className={`w-full flex justify-between gap-y-3 lg:mt-3 ${
                                item.id === 1 ? 'items-center' : ''
                                }`} onClick={() => toggleIsOpen(item.id)}>
                                    <h2 className={`text-lg font-semibold ${item.id === 1 || item.id === 3 ? 'w-72 md:w-full' : 'w-80 md:w-full'}`}>{item.question}</h2>
                                    {isOpen.includes(item.id) ? (
                                        <i className={`fas fa-chevron-up ${item.id === 1 ? '' : 'mt-2'}`}></i>
                                    ) : (
                                        <i className={`fas fa-chevron-down ${item.id === 1 ? '' : 'mt-2'}`}></i>
                                    )}
                                </div>
                                {isOpen.includes(item.id) && (
                                    <div>
                                        <p className="text-gray-500">{item.answer}</p>
                                    </div>
                                )}

                                <hr className="border-gray-500" />
                            </article>
                        ))}
                    </div>

                    <section className="flex flex-col gap-y-3 md:flex-row md:gap-x-4 lg:w-1/4 lg:flex-col lg:items-center lg:justify-center">
                        <button className="bg-white p-5 rounded-xl shadow-md drop-shadow-xl flex gap-x-3 items-center md:w-1/2 lg:w-full">
                            <img src="/images/mail.png" alt="Mail" className="w-7" />
                            <p>Kirim Pesan</p>
                        </button>

                        <button className="bg-white p-5 rounded-xl shadow-md drop-shadow-xl flex gap-x-3 items-center md:w-1/2 lg:w-full">
                            <img src="/images/customer.png" alt="Customer Service" className="w-7" />
                            <p>Customer Service</p>
                        </button>
                    </section>
                </section>
            </section>
        </Fragment>
    )
}

export default HelpSection;