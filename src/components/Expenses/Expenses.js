import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const handleFilterChange = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = expenses.filter((item) => item.date.getFullYear().toString() === filteredYear);

    return (
        <div className="expenses" >
            <ExpenseFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
            <ExpensesChart expenses={filteredExpenses} />
            {filteredExpenses.length === 0 && <p className="expenses-fallback">No Expenses Found.</p>}
            {filteredExpenses.map(item => (<ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />))}
        </div>
    );
}

export default Expenses;