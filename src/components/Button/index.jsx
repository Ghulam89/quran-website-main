import React from 'react'

const Button = ({
    type,
    label,
    disabled,
    className,
    onClick,
    Icons,
    rIcons
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 text-center py-2.5   flex items-center justify-center gap-2 bg-button-gradient text-black ${className}`}
      disabled={disabled}
    >
      {Icons} {label} {rIcons}
    </button>
  )
}

export default Button
