import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = ({ onFormSubmit }) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const handleEnteredTitle = (e) => {
        setEnteredTitle(e.target.value);
    }
    const handleEnteredAmount = (e) => {
        setEnteredAmount(e.target.value)
    }
    const handleEnteredDate = (e) => {
        setEnteredDate(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        onFormSubmit(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls" >
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={handleEnteredTitle} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={handleEnteredAmount} value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleEnteredDate} value={enteredDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;