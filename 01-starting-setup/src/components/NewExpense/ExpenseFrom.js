import { useState } from 'react';
import './ExpenseFrom.css';

const ExpenseFrom = ({ onSaveExpenseData }) => {
  const [enterdTitle, setEnterdTitle] = useState('');
  const [enterdAmount, setEnterdAmount] = useState('');
  const [enterdDate, setEnterdDate] = useState('');
  const [addNewButton, setAddNewButton] = useState(false);
  const [cancleButton, setCancleButton] = useState(false);

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
      amount: enterdAmount,
      date: new Date(enterdDate)
    };

    onSaveExpenseData(expenseData);

    setEnterdTitle('');
    setEnterdAmount('');
    setEnterdDate('');

    setCancleButton(true);
  };

  const handeAddNewButton = () => {
    setAddNewButton(true);
    setCancleButton(false);
  };

  const handleCancleButton = () => {
    setCancleButton(true);
    setAddNewButton(false);
  };

  if (cancleButton || !addNewButton) {
    return (
      <>
        <div className="new-expense__actions">
          <button onClick={handeAddNewButton} type='button'>Add New Expense</button>
        </div>
      </>
    );
  }

  return (
    <>
      {addNewButton &&
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
            <button type='submit'>Add expense</button>
          </div>
          <div className="new-expense__actions">
            <button onClick={handleCancleButton} type='submit'>Cancel</button>
          </div>
        </form>
      }
    </>
  );
};

export default ExpenseFrom;