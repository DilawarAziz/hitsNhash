'use client'
import { useState } from 'react';
import Image from 'next/image';
const Modal = ({ isModalOpen, toggleModal }) => {


    return (
        <div>
            {/* Modal toggle */}


            {/* Main modal */}
            {isModalOpen && (
                <div onClick={toggleModal}
                    id="default-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden"
                >
                    <div className="relative  w-full max-w-2xl max-h-full">
                        {/* Modal content */}
                        <Image src="/cigr.png" width={0} height={0} sizes='100vw' alt="logo" className="w-full " />
                        <Image src="/arrow.svg" onClick={toggleModal} alt="logo" width={25} height={25} sizes='100vw' className="top-2 right-2 absolute cursor-pointer" />

                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
