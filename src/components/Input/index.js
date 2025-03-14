import React from 'react';

const Input = ({
    label,
    placeholder,
    disabled,
    name,
    type = "text", 
    className,
    value, 
    onChange,
    Icon,
    defaultValue
}) => {
    return (
        <div className='relative'>
            <label htmlFor={name} className='block mb-1.5 text-[14px] font-medium text-black'>
                {label}
            </label>
            <div className='outline-none flex items-center  gap-2 text-[14px] bg-white  text-[#70726F]  rounded-md  placeholder:text-[#70726F]'>
            {Icon && (
                <div className=''>
                    {Icon}
                </div>
            )}
            <input
                disabled={disabled}
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
                name={name}
                id={name}
                type={type}
                defaultValue={defaultValue}
                className={`outline-none bg-[#F6F6F6] text-[14px]   p-3.5  w-full  placeholder:text-[#70726F] ${className}`}
            />
            
            </div>
        </div>
    );
}

export default Input;
