import React, { useState, useEffect, useRef } from 'react';
import { UserCircle, Info } from 'phosphor-react';
import { ChevronDownIcon } from '../Icons';

const Dropdown = ({
  label,
  labelVisibility,
  status,
  labelIconVisibility,
  leftIconVisibility,
  helperText,
  required,
  text,
  type,
  activeItemIndex,
  items,
  onChange,
  className,
  labelStyle,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(text);
  const [activeIndex, setActiveIndex] = useState(activeItemIndex);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setSelectedItem(items[activeItemIndex]);
  }, [activeItemIndex, items]);

  const renderDropdownItems = () => {
    switch (type) {
      case 'SingleNoIcon':
        return (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer flex items-center hover:bg-gray-100 ${
                  index === activeIndex ? 'bg-blue-100' : ''
                }`}
                onClick={() => handleItemClick(item, index)}
              >
                {item}
              </li>
            ))}
          </ul>
        );
      case 'SingleRadio':
        return (
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer flex items-center hover:bg-gray-100 ${
                  index === activeIndex ? 'bg-blue-100' : ''
                }`}
                onClick={() => handleItemClick(item, index)}
              >
                <input
                  type="radio"
                  name="dropdown-radio"
                  checked={index === activeIndex}
                  readOnly
                  className="mr-2"
                />
                {item}
              </li>
            ))}
          </ul>
        );
      case 'Multi':
        return (
          <ul>
            {items.map((item, index) => (
              <li key={index} className="px-4 py-2 cursor-pointer flex items-center hover:bg-gray-100">
                <input type="checkbox" className="mr-2" />
                {item}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  const handleItemClick = (item, index) => {
    setSelectedItem(item);
    setActiveIndex(index);
    setIsOpen(false);
    if (onChange) onChange(item);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {labelVisibility === 'Visible' && (
        <label className={`block mb-1 ${labelStyle}`}>
          {labelIconVisibility === 'Visible' && <Info size={16} className="inline mr-1" />}
          {label} {required && '*'}
        </label>
      )}
      <div
        className={`flex items-center border border-gray-300 rounded-md p-2 cursor-pointer ${
          status === 'Disabled' ? 'bg-gray-200' : 'bg-white'
        }`}
        onClick={() => status !== 'Disabled' && setIsOpen(!isOpen)}
      >
        {leftIconVisibility === 'Visible' && <UserCircle size={24} className="mr-2" />}
        <input
          type="text"
          className="flex-grow border-none outline-none"
          value={selectedItem}
          onChange={(e) => setSelectedItem(e.target.value)}
          placeholder={placeholder}
          readOnly
        />
        <div className={`transition-transform ${isOpen && 'transform rotate-180'}`}>
          <ChevronDownIcon size={20} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute mt-1 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-h-60 overflow-auto z-10">
          {renderDropdownItems()}
        </div>
      )}
      {helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
    </div>
  );
};

export default Dropdown;

// Usage example:
// <Dropdown
//   label="Dropdown Label"
//   labelVisibility="Visible"
//   status="Unfilled"
//   labelIconVisibility="Visible"
//   leftIconVisibility="Visible"
//   helperText="Helper text goes here"
//   required="No"
//   text="Select an option"
//   type="SingleNoIcon"
//   activeItemIndex={-1}
//   items={['Option 1', 'Option 2', 'Option 3']}
//   className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-4"
//   labelStyle="text-lg sm:text-xl font-bold mb-4"
//   placeholder="Search Items"
//   onChange={(selectedItem) => console.log(selectedItem)}
// />