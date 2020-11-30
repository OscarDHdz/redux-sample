import React, { useState } from 'react';

const useField = initialValue => {
  const [value, setValue] = useState(initialValue);

  return [
    {value, onChange: e => setValue(e.target.value)},
    () => setValue(initialValue)
  ];

}

export default useField;