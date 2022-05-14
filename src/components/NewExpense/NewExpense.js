import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({ onGettingExpense }) => {
    const handleGettingData = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }
        onGettingExpense(expenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onFormSubmit={handleGettingData} />
        </div>
    );
}

export default NewExpense;