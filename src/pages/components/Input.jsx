import React from 'react';

const Input = ({type, holder, value, class_for}) => {
  return (
    <>
    <input type={type} placeholder={holder} value={value} className={class_for} />
    </>
  )
}

export default Input