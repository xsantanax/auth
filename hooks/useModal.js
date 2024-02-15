"use client"
import { useContext, createContext, useState } from "react"

const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

const useModal = () => useContext(ModalContext)

export { ModalProvider, useModal }
