//https://api.tzkt.io/v1/operations/transactions?select=sender,target,amount,status&level=2400000
//https://api.tzkt.io/v1/operations/transactions?select=sender,target,amount,status&level=2400000&offset.pg=2&limit=5
import TransactionTable from "../../components/transactions";
import Pagination from "../../components/pagination";
import { useState } from "react";
import { Link } from "react-router-dom"

const DetailsPage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<div>
      <p>Hej hej hej</p>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>


		</div>
	);
};

export default DetailsPage