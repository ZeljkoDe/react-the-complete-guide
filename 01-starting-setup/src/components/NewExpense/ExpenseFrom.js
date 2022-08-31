import { useState } from 'react';
import './ExpenseFrom.css';

const ExpenseFrom = ({ onSaveExpenseData, onCancel }) => {
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
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate)
    };

    onSaveExpenseData(expenseData);

    setEnterdTitle('');
    setEnterdAmount('');
    setEnterdDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterdTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enterdAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enterdDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={onCancel}>Cancle</button>
        <button type='submit'>Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;