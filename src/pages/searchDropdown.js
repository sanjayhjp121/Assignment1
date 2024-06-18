import React, { useEffect, useState } from 'react';
import { getProdutData } from '../services';
import SelectDropdown from '../components/dropdown';

const Checkbox = () => {
  const [data, setData] = useState([]);
  const [selectedItemIds, setSelectedItemIds] = useState([]);

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

  let ListingId = data.map((each) => {
    const { title, id } = each;
    return { value: title, id: id };
  });

  const handleDropdownChange = (itemIds) => {
    setSelectedItemIds(itemIds);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '90%', maxWidth: '600px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <SelectDropdown
          options={ListingId}
          onChange={handleDropdownChange}
          placeholder='Select Items'
          label={"Item Selection"}
          style={{ width: '100%' }}
          type='checkbox'
          labelStyle={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}
        />
        <div style={{ marginTop: '20px' }}>
          <p style={{ marginBottom: '12px' }}>Selected Item Titles:</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {selectedItemIds.map((id) => {
              const selectedItem = ListingId.find((each) => each.id === id);
              return (
                <li key={id} style={{ padding: '8px 0', borderBottom: '1px solid #ddd' }}>{selectedItem?.value}</li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;