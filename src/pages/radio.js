import React, { useEffect, useState } from 'react';
import { getProdutData } from '../services';
import SelectDropdown from "../components/dropdown";

const RadioDropdown = () => {
  const [data, setData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getProdutData();
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ListingId = data.map((each) => {
    const { title, id } = each;
    return { value: title, id: id };
  });

  const handleDropdownChange = (itemId) => {
    setSelectedItemId(itemId);
  };

  return (
    <div className='p-5 flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-6'>
        <h2 className='text-2xl font-semibold text-center mb-6'>Select an Item</h2>
        <SelectDropdown
          options={ListingId}
          onChange={handleDropdownChange}
          placeholder='Choose an item...'
          label="Items"
          className="w-full mb-4 border border-gray-300 rounded px-3 py-2 focus:outline-none"
          type='radio'
          labelStyle="block text-lg font-medium mb-2"
        />
        {selectedItemId && (
          <div className='mt-6 text-center'>
            <h3 className='text-lg font-medium'>Selected Item:</h3>
            <p className='text-gray-700'>
              {ListingId.find((each) => each.id === selectedItemId)?.value}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RadioDropdown;