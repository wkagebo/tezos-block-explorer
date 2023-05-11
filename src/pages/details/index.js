//https://api.tzkt.io/v1/operations/transactions?select=sender,target,amount,status&level=2400000
//https://api.tzkt.io/v1/operations/transactions?select=sender,target,amount,status&level=2400000&offset.pg=2&limit=5
import TransactionTable from "../../components/transactions";
import Pagination from "../../components/pagination";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom"

const DetailsPage = () => {
	const [currentPage, setCurrentPage] = useState(1);

  // access block level of clicked row
  const location = useLocation(); 
  const clickedBlock = location.state.block;

  // Table data fetch 
	const [transactions, setTransactions] = useState([]);
	const [totalTransactions, setTotalTransactions] = useState(0);
	const [loading, setLoading] = useState(false);

	return (
		<div>
      <p>{}</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
      <TransactionTable
        transactions={transactions}
        loading={loading}
        clickedBlock={clickedBlock}
      />
      <Pagination
				numberOfElements={totalTransactions}
				pageChangeHandler={setCurrentPage}
				elementsPerPage={15}
				currentPage={currentPage}
			/>



		</div>
	);
};

export default DetailsPage
