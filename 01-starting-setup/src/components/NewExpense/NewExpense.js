import { useState } from 'react';
import ExpenseFrom from './ExpenseFrom';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        };

        onAddExpense(expenseData);
        setIsEditing(false)
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
        </div>

    );
};

export default NewExpense;