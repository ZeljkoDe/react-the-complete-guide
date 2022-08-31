import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";


const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selected) => {
        setFilteredYear(selected);
    };
    const filteredExpenses = expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(item => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ));
    }

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            </div>

            {expensesContent}

        </Card>
    );
};

export default Expenses;