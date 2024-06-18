import React, { useEffect, useState, useRef } from 'react';
import { ChevronDownIcon } from '../Icons';
import { INPUT_STYLE } from '../constants';

let active = -1;

const SelectDropdown = ({ options, placeholder = "", onChange, label, labelStyle, className, type = "default" }) => {
    const [inputValue, setInputValue] = useState("");
    const [filterSearch, setFilterSearch] = useState([]);
    const [open, setOpen] = useState(false);
    const [activeId, setActiveID] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const dropdownRef = useRef(null);

    const clearDropdown = () => {
        setInputValue("");
        onChange(type === "checkbox" ? [] : "");
        setFilterSearch([...options]);
        active = -1;
        setSelectedOptions([]);
    };

    const handleKeydown = (e) => {
        if (filterSearch.length > 0) {
            if (e.keyCode === 40) {
                if (active < filterSearch.length - 1) {
                    active++;
                    setInputValue(filterSearch[active]?.value);
                    onChange(filterSearch[active]?.id);
                    setActiveID(filterSearch[active]?.id);
                } else if (active === filterSearch.length - 1) {
                    active = -1;
                }
            } else if (e.keyCode === 38) {
                if (active > 0) {
                    active--;
                    setInputValue(filterSearch[active]?.value);
                    onChange(filterSearch[active]?.id);
                    setActiveID(filterSearch[active]?.id);
                } else if (active === 0 || active === -1) {
                    active = filterSearch.length;
                }
            } else {
                active = 0;
            }
            if (e.key === "Enter") {
                setFilterSearch(options.filter((item) => {
                    const searchItem = inputValue?.toLocaleLowerCase();
                    const filterValue = item.value?.toLocaleLowerCase();
                    if (!searchItem) return true;
                    return filterValue.includes(searchItem);
                }));
                setOpen(false);
                onChange !== undefined && onChange(type === "checkbox" ? selectedOptions : activeId);
            }
        }
    };

    const onInputClick = () => {
        setOpen((prev) => !prev);
        setFilterSearch([...options]);
    };

    const onItemChange = (index, option) => {
        active = index;
        if (type === "checkbox") {
            const newSelectedOptions = selectedOptions.includes(option.id)
                ? selectedOptions.filter(id => id !== option.id)
                : [...selectedOptions, option.id];
            setSelectedOptions(newSelectedOptions);
            onChange(newSelectedOptions);
        } else {
            onChange(option.id);
            setInputValue(option.value);
            setOpen(false);
            setActiveID(option.id);
        }
    };

    const onInputChange = (event) => {
        setInputValue(event.target.value);
        setFilterSearch(options.filter((item) => {
            const searchItem = event.target.value.toLocaleLowerCase();
            const filterValue = item.value?.toLocaleLowerCase();
            if (!searchItem) return true;
            return filterValue.includes(searchItem);
        }));
        setOpen(true);
        active = -1;
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (type !== "checkbox") {
            activeId && setInputValue(options.find(option => option.id === activeId)?.value || "");
        }
    }, [activeId, options, type]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            <label className={`text-slate-600 text-md ${labelStyle} flex justify-between`}>{label && label} <span>{(activeId || selectedOptions.length) && inputValue ? <div onClick={clearDropdown} className="text-[12px] mb-0">Clear</div> : null}</span></label>
            <div className="dropdown-input-container" onClick={onInputClick} onKeyDown={handleKeydown}>
                <input 
                    type='text' 
                    placeholder={placeholder} 
                    value={inputValue} 
                    onChange={onInputChange}
                    className={`dropdown-input ${INPUT_STYLE}`} 
                    required 
                />
                <div className={`dropdown-icon ${open && "rotate-180"}`}>
                    <ChevronDownIcon size={20} />
                </div>
                {(activeId || selectedOptions.length) && inputValue ? 
                    <div onClick={clearDropdown} className="dropdown-clear">x</div> 
                    : null}
            </div>
            {
                open &&
                <div className="dropdown-menu">
                    {filterSearch.length > 0 ? filterSearch.map((option, index) => {
                        return (
                            <div key={option.id} id={option.id} className={`option min-h-[36px] overflow-auto p-3 flex items-center gap-3 pl-[16px] cursor-pointer bg-white hover:bg-[#c6ffb3] hover:text-black ${activeId === option.id && "!bg-[#66ff33] text-black"}`}
                                onClick={() => onItemChange(index, option)}>
                                {type === "checkbox" ? (
                                    <input type="checkbox" className='rounded-checkbox' checked={selectedOptions.includes(option.id)} onChange={() => onItemChange(index, option)} />
                                ) : type === "radio" ? (
                                    <input type="radio" className='rounded-radio' checked={activeId === option.id} onChange={() => onItemChange(index, option)} />
                                ) : null}
                                {option.value}
                            </div>
                        )
                    }) :
                        <div className='h-[49px] flex items-center pl-[10px] cursor-pointer bg-white'>Not found</div>
                    }
                </div>
            }
        </div>
    )
}

export default SelectDropdown;

// Usage example:
// <SelectDropdown options={options} placeholder="Select an option" onChange={handleChange} type="checkbox" label="Select Options" />
// <SelectDropdown options={options} placeholder="Select an option" onChange={handleChange} type="radio" label="Select Option" />
