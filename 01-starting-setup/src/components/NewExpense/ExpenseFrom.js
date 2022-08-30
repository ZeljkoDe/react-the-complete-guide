import { useState } from 'react';
import './ExpenseFrom.css';

const ExpenseFrom = () => {
  const [enterdTitle, setEnterdTitle] = useState('');
  const [enterdAmount, setEnterdAmount] = useState('');
  const [enterdDate, setEnterdDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enterdTitle: '',
  //   enterdAmount: '',
  //   enterdDate: ''
  // });

  const titleChangeHandler = (e) => {
    setEnterdTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdTitle: e.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterdTitle: e.target.value };
    // });
  };
  const amountChangeHandler = (e) => {
    setEnterdAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdAmount: e.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterdAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setEnterdDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterdDate: e.target.value
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enterdDate: e.target.value };
    // });
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate)
    };

    console.log(expenseData);
    
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
        <button type='submit'>Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;