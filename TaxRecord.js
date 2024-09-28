// src/components/TaxRecord.js
import React from 'react';

const TaxRecord = ({ record, editRecord, deleteRecord }) => {
  return (
    <div className="tax-record">
      <h3>{record.name}</h3>
      <p>Client Name: {record.clientName}</p>
      <p>Client Email: {record.clientEmail}</p>
      <p>Client Phone: {record.clientPhone}</p>
      <p>Amount: {record.amount}</p>
      <p>Date: {record.date}</p>
      <button onClick={() => editRecord(record)}>Edit</button>
      <button onClick={() => deleteRecord(record.id)}>Delete</button>
    </div>
  );
};

export default TaxRecord;
