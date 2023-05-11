//https://api.tzkt.io/v1/operations/transactions?select=sender,target,amount,status&level=2400000
//https://api.tzkt.io/v1/operations/transactions?select=sender,target,amount,status&level=2400000&offset.pg=2&limit=15
import TransactionTable from "../../components/transactions";
import Pagination from "../../components/pagination";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { BASE_URL } from "../../apiConfig";

const DetailsPage = () => {
	const [currentPage, setCurrentPage] = useState(1);

  // access block level of clicked row
  const location = useLocation(); 
  const clickedBlock = location.state.block;

  // Table data fetch 
	const [transactions, setTransactions] = useState([]);
	const [totalTransactions, setTotalTransactions] = useState(0);
	const [loading, setLoading] = useState(false);

  useEffect(() => {
		setLoading(true)
		// this fetches transaction id's in order to calculate how many transactions are in the block
		fetch(`${BASE_URL}/operations/transactions?select=id&level=${clickedBlock}`)
			.then(response => response.json())
			.then(data => setTotalTransactions(data.length))
		// this fetches the 15 transactions for the current page
		fetch(`${BASE_URL}/operations/transactions?select=sender,target,amount,status,id&level=${clickedBlock}&offset.pg=${currentPage}&limit=15`)
		  .then(response => response.json())
		  .then(data => {setTransactions(data);})
		  .finally(setLoading(false))
	  }, [currentPage]);

	return (
		<div>
      <nav>
        <ul>
          <li><Link to="/"><h1>Home</h1></Link></li>
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
