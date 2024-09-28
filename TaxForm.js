// src/components/TaxForm.js
import React, { useEffect, useState } from 'react';

const TaxForm = ({ formData, handleFormDataChange, addRecord, updateRecord, editingRecordId }) => {
  const [taxType, setTaxType] = useState(formData.name || '');

  useEffect(() => {
    setTaxType(formData.name || '');
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleFormDataChange({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingRecordId !== null) {
      updateRecord({ ...formData, id: editingRecordId });
    } else {
      addRecord({ ...formData, id: Date.now() }); // Add new record
    }
    resetForm();
  };

  const resetForm = () => {
    handleFormDataChange({
      id: null,
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      name: '',
      amount: '',
      date: '',
      incomeSource: '',
      salesAmount: '',
      propertyAddress: '',
    });
    setTaxType('');
  };

  const renderAdditionalFields = () => {
    switch (taxType) {
      case 'Income Tax':
        return (
          <>
            <label htmlFor="incomeSource">Income Source:</label>
            <input
              type="text"
              id="incomeSource"
              name="incomeSource"
              value={formData.incomeSource || ''}
              onChange={handleInputChange}
            />
          </>
        );
      case 'Sales Tax':
        return (
          <>
            <label htmlFor="salesAmount">Sales Amount:</label>
            <input
              type="text"
              id="salesAmount"
              name="salesAmount"
              value={formData.salesAmount || ''}
              onChange={handleInputChange}
            />
          </>
        );
      case 'Property Tax':
        return (
          <>
            <label htmlFor="propertyAddress">Property Address:</label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              value={formData.propertyAddress || ''}
              onChange={handleInputChange}
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingRecordId !== null ? 'Edit Record' : 'Add New Record'}</h2>

      <label htmlFor="clientName">Client Name:</label>
      <input
        type="text"
        id="clientName"
        name="clientName"
        value={formData.clientName}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="clientEmail">Client Email:</label>
      <input
        type="email"
        id="clientEmail"
        name="clientEmail"
        value={formData.clientEmail}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="clientPhone">Client Phone:</label>
      <input
        type="tel"
        id="clientPhone"
        name="clientPhone"
        value={formData.clientPhone}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="name">Tax Type:</label>
      <select
        id="name"
        name="name"
        value={formData.name}
        onChange={(e) => {
          handleInputChange(e);
          setTaxType(e.target.value);
        }}
        required
      >
        <option value="">Select Tax Type</option>
        <option value="Income Tax">Income Tax</option>
        <option value="Sales Tax">Sales Tax</option>
        <option value="Property Tax">Property Tax</option>
      </select>

      {renderAdditionalFields()}

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={formData.amount}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleInputChange}
        required
      />

      <button type="submit">
        {editingRecordId !== null ? 'Update Record' : 'Add Record'}
      </button>
    </form>
  );
};

export default TaxForm;
