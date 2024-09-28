// src/components/TaxRecords.js
import React from 'react';

const TaxRecords = ({ records, editRecord, deleteRecord }) => {
  return (
    <div>
      <h2>Tax Records</h2>
      <div className="records-grid">
        {records.map((record) => (
          <div key={record.id} className="record-card">
            <h3>{record.name}</h3>
            <p><strong>Client:</strong> {record.clientName}</p>
            <p><strong>Amount:</strong> ${record.amount}</p>
            <p><strong>Date:</strong> {record.date}</p>
            {record.incomeSource && <p><strong>Income Source:</strong> {record.incomeSource}</p>}
            {record.salesAmount && <p><strong>Sales Amount:</strong> {record.salesAmount}</p>}
            {record.propertyAddress && <p><strong>Property Address:</strong> {record.propertyAddress}</p>}
            <div className="record-actions">
              <button onClick={() => editRecord(record.id)}>Edit</button>
              <button onClick={() => deleteRecord(record.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxRecords;
