import styles from './styles.module.css'

const TransactionTable = ({ transactions, loading, clickedBlock }) => {
  return (
    <div>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <>
                <h1>Transactions for block {clickedBlock}</h1>
                <table border={1}>
                    <tr>
                        <th>Sender</th>
                        <th>Target</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    {transactions.map((transaction, i) => (
                        <tr key={transaction.id}>
                            <td>{transaction.sender.alias? transaction.sender.alias : transaction.sender.address}</td>
                            <td> {transaction.target.alias? transaction.target.alias : transaction.target.address} </td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.status}</td>
                        </tr>
                    ))}
                </table>
            </>
        )}
	</div>
  );
};

export default TransactionTable;