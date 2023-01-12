import React, { useState } from "react";

function DynamicForm() {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([...fields, { type: "text", value: "" }]);
  };

  const removeField = (index) => {
    setFields(fields.filter((field, i) => i !== index));
  };

  const handleTypeChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].type = e.target.value;
    setFields(newFields);
  };

  const handleValueChange = (e, index) => {
    const newFields = [...fields];
    newFields[index].value = e.target.value;
    setFields(newFields);
  };

  return (
    <div>
      <button onClick={addField}>Add Field</button>
      {fields.map((field, index) => (
        <div key={index}>
          <select
            value={field.type}
            onChange={(e) => handleTypeChange(e, index)}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
          <input
            type={field.type}
            value={field.value}
            onChange={(e) => handleValueChange(e, index)}
          />
          <button onClick={() => removeField(index)}>Remove Field</button>
        </div>
      ))}
      <h3>Preview:</h3>
      {fields.map((field, index) => (
        <div key={index}>
          <p>Type: {field.type}</p>
          <p>Value: {field.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DynamicForm;
