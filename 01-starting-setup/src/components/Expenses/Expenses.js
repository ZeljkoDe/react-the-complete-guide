import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";


const Expenses = ({ expenses }) => {
    const [selectedFilter, setSelectedFilter] = useState('')

    const filterHandler = (selected) => {
        setSelectedFilter(selected);
    }

    console.log(selectedFilter);

    return (
        <Card className="expenses">
            <ExpensesFilter onFilterSelection={filterHandler} />
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