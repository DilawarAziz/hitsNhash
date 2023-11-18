import React from 'react';

const ContactUsSection = () => {
    return (
        <section className="  w-[50%] mx-auto rounded-xl ">
            <div className="py-4  px-4 mx-auto max-w-screen-md">

                <form action="#" className="space-y-8">
                    <div className='grid grid-cols-2 items-center gap-4'>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-900 ">
                                Name *
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="shadow-sm bg-gray-50 border border-gray-200 text-gray-900 outline-[#EB6597] text-sm rounded-xl  block w-full p-2.5 "
                                placeholder="name@flowbite.com"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-900 ">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-200 shadow-sm outline-[#EB6597]   "
                                placeholder="Let us know how we can help you"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-900 ">
                            Email *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-xl border border-gray-200 shadow-sm outline-[#EB6597]   "
                            placeholder="Let us know how we can help you"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-900 ">
                            Comment or Message
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="block p-2.5 resize-none w-full text-sm text-gray-900 bg-gray-50 rounded-xl shadow-sm border border-gray-200 outline-[#EB6597]   "
                            placeholder="Leave a comment..."
                        ></textarea>
                    </div>
                    <div className='w-full flex items-center '>
                        <button className={"!rounded-xl hover:shadow-xl transition-all  py-2 px-2 bg-pink text-black bg-gradient-to-r from-yellow-500 to-green-500"}>Post comment</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUsSection;
