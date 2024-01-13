import { FC, useState } from "react";
import { IModalContentRegistration } from "@/widgets/modal-content-registration/model";
import { registration } from "@/services/registration";
import Image from "next/image";
import { CustomButton } from "@/shared";

export const ModalContentRegistration:FC<IModalContentRegistration> = ({setShowModal, phoneNumber}) => {
  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const handleRegistration = async () => {
    await registration({
      phoneNumber,
      email,
      firstName
    })
  }

  return (
    <div className="flex items-center min-h-screen p-8 text-black">
      <div className="relative w-full max-w-[730px] mx-auto bg-white shadow-lg rounded-[20px] p-[30px]">
        <div className="sm:flex items-center justify-between mb-11">
          <p className="text-black text-2xl">Зарегестрироваться</p>
          <Image
            src="/close-modal.svg"
            alt="Close Button"
            width={18}
            height={18}
            onClick={() => setShowModal(false)}
          />
        </div>
        <form className="flex flex-col" onSubmit={handleRegistration}>
          <input type="text"  placeholder="Введите Email" className="mb-5" required={true}/>
          <input type="text"  placeholder="Введите ваше имя" className="mb-11" required={true}/>
          <CustomButton title="Зарегестрироваться" containerStyles="bg-[#E4E9F0]" btnType="submit"/>
        </form>
      </div>
    </div>
  )
}
