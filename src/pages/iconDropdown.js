import React, { useEffect, useState } from 'react';
import Dropdown from '../components/dropdown/dropdown';
import { getProdutData } from '../services';

const IconDropdown = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getProdutData();
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-6'>
      <div className='w-full max-w-lg bg-white rounded-lg shadow-md p-8'>
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-700">Select an Option</h1>
        <Dropdown
          label="Choose an Option"
          labelVisibility="Visible"
          status="Unfilled"
          labelIconVisibility="Visible"
          leftIconVisibility="Visible"
          helperText="Please select an option from the dropdown."
          required="No"
          text="Click to select"
          type="SingleNoIcon"
          activeItemIndex={-1}
          items={data.map((each) => each.title)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};

export default IconDropdown;