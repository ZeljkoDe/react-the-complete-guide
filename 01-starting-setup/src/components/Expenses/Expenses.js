import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css';


const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filterChangeHandler = (selected) => {
        setFilteredYear(selected);
    };
    const filteredExpenses = expenses.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
            </div>

            <ExpensesList expenses={filteredExpenses} />

        </Card>
    );
};

export default Expenses;