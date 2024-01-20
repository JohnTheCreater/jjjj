import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LayOut from '../../LayOut/LayOut';
import axios from 'axios';

function BillGeneration() {
  const navigate = useNavigate();
  const [billType, setBillType] = useState('');
  const [durationEnd, setDurationEnd] = useState('');
  const [amount, setAmount] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Bill Type: ${billType}, Duration End: ${durationEnd}, Amount: ${amount}`);
    setSubmittedData({ billType, durationEnd, amount });
    navigate('/customer');
  };

  const PostData = async () => {
    await axios.post('http://localhost:2718/api/bill', { billType, durationEnd, amount });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <LayOut>
        <div className="bg-white p-8 rounded shadow-md w-96 flex flex-col items-center justify-center">
          <form onSubmit={handleSubmit} className="w-full">
            <label className="mb-4">
              Bill Type:
              <select
                className="w-full border p-2"
                value={billType}
                onChange={(e) => setBillType(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="water">Water Tax</option>
                <option value="property">Property Tax</option>
                <option value="house">House Tax</option>
                <option value="eb">EB Bill</option>
              </select>
            </label>
            <label className="mb-4">
              Duration End:
              <input
                type="date"
                className="w-full border p-2"
                value={durationEnd}
                onChange={(e) => setDurationEnd(e.target.value)}
              />
            </label>
            <label className="mb-4">
              Amount:
              <input
                type="number"
                className="w-full border p-2"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mb-4"
              onClick={PostData}
            >
              Submit
            </button>
          </form>

          {submittedData && (
            <div>
              <h2>Submitted Form Data:</h2>
              <p>Bill Type: {submittedData.billType}</p>
              <p>Duration End: {submittedData.durationEnd}</p>
              <p>Amount: {submittedData.amount}</p>
            </div>
          )}
        </div>
      </LayOut>
    </div>
  );
}

export default BillGeneration;
