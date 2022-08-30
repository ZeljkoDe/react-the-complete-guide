import './ExpenseItem.css'

const ExpenseItem = () => (
    <div className="expense-item">
        <div>March 28th 2022</div>
        <div className="expense-item__description">
            <h2>Car Insurence</h2>
            <div className="expense-item__price">$200</div>
        </div>
    </div>
);

export default ExpenseItem;
