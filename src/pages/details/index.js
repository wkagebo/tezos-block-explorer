import TransactionTable from "../../components/transactions";
import Pagination from "../../components/pagination";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { BASE_URL } from "../../apiConfig";

const DetailsPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
  const elementsPerPage = 15; 

  // access block level of clicked row
  const location = useLocation(); 
  const clickedBlock = location.state.block;

  // Table data fetch 
	const [transactions, setTransactions] = useState([]);
	const [totalTransactions, setTotalTransactions] = useState(0);
	const [loading, setLoading] = useState(false);

  useEffect(() => {
		setLoading(true)
		// this fetches all the transactions for the chosen block
		fetch(`${BASE_URL}/operations/transactions?select=sender,target,amount,status,id&level=${clickedBlock}`)
		  .then(response => response.json())
		  .then(data => {
        // local pagination logic because API does not seem to function with server side pagination
        const startIndex = (currentPage - 1) * elementsPerPage; 
        const endIndex = Math.min(data.length, currentPage * elementsPerPage)
        setTransactions(data.slice(startIndex, endIndex));
        setTotalTransactions(data.length);
      })
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
				elementsPerPage={elementsPerPage}
				currentPage={currentPage}
			/>



		</div>
	);
};

export default DetailsPage
