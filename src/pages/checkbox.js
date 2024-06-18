import React, { useEffect, useState } from 'react';
import { getProdutData } from '../services';
import SelectDropdown from '../components/dropdown';

const Checkbox = () => {
  const [data, setData] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState([]);

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

  const listingId = data.map(({ title, id }) => ({ value: title, id }));

  const handleDropdownChange = (itemIds) => {
    setSelectedItemIds(itemIds);
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
      <div className='w-full max-w-2xl bg-white rounded-lg shadow-md p-6'>
        <h2 className='text-2xl font-bold text-center mb-6 text-gray-700'>Checkbox Selection</h2>
        <SelectDropdown
          options={listingId}
          onChange={handleDropdownChange}
          placeholder='Search Items...'
          label="Select Items"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          type='checkbox'
          labelStyle="block text-lg font-medium mb-3 text-gray-600"
        />
        {selectedItemIds.length > 0 && (
          <div className='mt-8'>
            <h3 className='text-lg font-medium mb-2'>Selected Items:</h3>
            <ul className='list-disc list-inside'>
              {selectedItemIds.map((id) => {
                const selectedItem = listingId.find((item) => item.id === id);
                return <li key={id} className='text-gray-800'>{selectedItem?.value}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkbox;