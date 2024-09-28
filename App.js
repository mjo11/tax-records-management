import React, { useState } from 'react';
import './App.css';
import TaxForm from './components/TaxForm';
import TaxRecords from './components/TaxRecords';
import Dashboard from './components/Dashboard';

const sampleRecords = [
    {
      id: 1,
      clientName: 'Jose Marie',
      clientEmail: 'jose@example.com',
      clientPhone: '123-456-7890',
      name: 'Income Tax',
      amount: 5000,
      date: '2023-01-01',
      incomeSource: 'Software Development',
    },
    {
      id: 2,
      clientName: 'Juan Luna',
      clientEmail: 'juan@example.com',
      clientPhone: '098-765-4321',
      name: 'Sales Tax',
      amount: 1500,
      date: '2023-02-15',
      salesAmount: '15000',
    },
    {
      id: 3,
      clientName: 'Mario Reyes',
      clientEmail: 'mario@example.com',
      clientPhone: '456-123-7890',
      name: 'Property Tax',
      amount: 2500,
      date: '2023-03-20',
      propertyAddress: 'Bagong Bayan',
    },
    {
      id: 1,
      clientName: 'Juan Dela Cruz',
      clientEmail: 'Juan@example.com',
      clientPhone: '123-456-7890',
      name: 'Income Tax',
      amount: 5000,
      date: '2023-01-01',
      incomeSource: 'Frontend Development',
    },
    
  ];
  

const App = () => {
  const [formData, setFormData] = useState({
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

  const [records, setRecords] = useState(sampleRecords); // Initialize with sample records
  const [editingRecordId, setEditingRecordId] = useState(null);

  // Add a new record
  const addRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  // Edit an existing record
  const editRecord = (id) => {
    const recordToEdit = records.find((record) => record.id === id);
    setFormData(recordToEdit);
    setEditingRecordId(id);
  };

  // Delete a record
  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  // Update an existing record
  const updateRecord = (updatedRecord) => {
    setRecords(
      records.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
    setEditingRecordId(null);
    setFormData({
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
  };

  return (
    <div className="App">
      <h1>Tax Records Management System</h1>

      {/* Dashboard */}
      <div className="dashboard-container">
        <Dashboard records={records} />
      </div>

      {/* Form and Records */}
      <div className="form-records-container">
        <div className="form-container">
          <TaxForm
            formData={formData}
            handleFormDataChange={setFormData}
            addRecord={addRecord}
            updateRecord={updateRecord}
            editingRecordId={editingRecordId}
          />
        </div>
        <div className="records-container">
          <TaxRecords
            records={records}
            editRecord={editRecord}
            deleteRecord={deleteRecord}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
