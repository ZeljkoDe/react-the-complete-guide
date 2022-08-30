import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
import './ExpenseItem.css';


const ExpenseItem = ({ date, title, amount }) => {
    let titleHolder = title;
    
    const clickHandler = () => {
        titleHolder = 'Updated';
    };

    return (
        <Card className="expense-item">

            <ExpenseDate date={date} />

            <div className="expense-item__description">
                <h2>{titleHolder}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;