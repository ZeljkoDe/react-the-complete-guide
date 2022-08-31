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

    console.log(filteredYear);

    return (
        <Card className="expenses">
            <div>
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
            </div>

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