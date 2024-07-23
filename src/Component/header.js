import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'eng', label: 'ENG', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/255px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' },
    { value: 'FRA', label: 'FRA', icon: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/125px-Flag_of_France.svg.png' },
  
];

const customSingleValue = ({ data }) => (
  <div className="flex items-center">
    {data.icon && (
      <img src={data.icon} alt="" className="w-4 h-4 rounded-full mr-1" />
    )}
    <span className="text-sm">{data.label}</span>
  </div>
);

const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '30px',
    height: '30px',
    fontSize: '12px'
  }),
  valueContainer: (provided) => ({
    ...provided,
    height: '30px',
    padding: '0 6px'
  }),
  input: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: '30px',
  }),
};

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white">
      <div className="flex items-center">
        <span className="text-black bg-gray-300 text-sm rounded-lg pl-3 pr-2 pt-1 pb-1">Hotline 24/7</span>
        <span className="ml-3 font-bold text-gray-900 text-sm">(025) 3886 25 16</span>
      </div>
      <div className="flex items-center">
        <a className="mr-5 hover:underline text-black text-sm font-bold">Sell on Swoo</a>
        <a className=" text-black hover:underline mr-20 text-sm font-bold">Order Tracking</a>
        <div className="ml-4">
          <select className="border border-gray-300 p-1 rounded text-sm">
            <option>USD</option>
          </select>
        </div>
        <div className="ml-4 w-20 h-8">
          <Select
            styles={customStyles}
            options={options}
            components={{ SingleValue: customSingleValue }}
            defaultValue={options[0]}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
