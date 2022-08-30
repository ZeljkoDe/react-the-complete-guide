import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';


const Expenses = ({ expenses }) => {
    return (
        <Card className="expenses">
            {
                expenses.map(item => (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                ))
            }
        </Card>
    );
};

export default Expenses;