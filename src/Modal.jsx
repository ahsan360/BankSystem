import React, { useEffect, useRef } from 'react'
import ReactModal from 'react-modal'
import './Modal.css'
import { createPortal } from 'react-dom'

const Modal = ({ children }) => {
  // const elRef = useRef(null)
  // if (!elRef.current) {
  //   elRef.current = document.createElement('div')
  // }

  // useEffect(() => {
  //   const modalRoot = document.getElementById('modal')
  //    console.log(modalRoot)
  //   modalRoot.appendChild(elRef.current)
  //   return () => modalRoot.removeChild(elRef.current)
  // }, [])

  // return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal
