/*
## Example - Комплексні завдання
Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
в якому необхідно реалізувати методи для роботи з балансом та історією
транзакцій. 
*/

/*
* Типів транзакцій всього два.
* Можна покласти чи зняти гроші з рахунку.
*/
const TRANSACTION = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
* Кожна транзакція це об'єкт із властивостями: id, type та amount
*/

const account = {
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій
    transactions: [],

    /*
     * Метод створює та повертає об'єкт транзакції.
     * Приймає суму та тип транзакції.
     */
    createTransaction(amount, type) { 
        return {
            amount,
            type,
            id : this.transactions.length + 1,
        }
    },

    /*
     * Метод, що відповідає за додавання суми до балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій
     */
    deposit(amount) {
        this.balance += amount;
        const transaction = this.createTransaction(amount, TRANSACTION.DEPOSIT);
        this.transactions.push(transaction);
        console.log(this.transactions);
    },

    /*
     * Метод, що відповідає за зняття суми з балансу.
     * Приймає суму транзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його до історії транзакцій.
     *
     * Якщо amount більше ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливе, недостатньо коштів.
     */
    withdraw(amount) {

        if (amount <= this.balance) {
            this.balance -= amount;
            const transaction = this.createTransaction(amount, TRANSACTION.WITHDRAW);
            this.transactions.push(transaction);
            console.log(this.transactions);
        }
        console.error("Недостатньо коштів на рахунку")
    },

    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
        return this.balance;
    },
    getTranzactions() {
    return this.transactions;
},
    /*
     * Метод шукає та повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) { },

    /*
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) { },
};
account.deposit(500);
account.getBalance();
account.getTranzactions();
account.withdraw(100);
account.withdraw(150);
// account.withdraw(30);
