import { useState } from 'react';
import './ExpenseFrom.css';

const ExpenseFrom = () => {
  const [enterdTitle, setEnterdTitle] = useState('');
  const [enterdAmount, setEnterdAmount] = useState('');
  const [enterdDate, setEnterdDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnterdTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnterdAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnterdDate(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;