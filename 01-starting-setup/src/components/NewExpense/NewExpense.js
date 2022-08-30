import ExpenseFrom from './ExpenseFrom';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
    const saveExpenseDataHandler = (enterdExpenseData) => {
        const expenseData = {
            ...enterdExpenseData,
            id: Math.random().toString()
        };
        onAddExpense(expenseData)
    };

    return (
        <div className='new-expense'>
            <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;