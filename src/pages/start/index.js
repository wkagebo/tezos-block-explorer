import Table from "../../components/table";
import Pagination from "../../components/pagination";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../apiConfig";

const StartPage = () => {
	const [currentPage, setCurrentPage] = useState(1);

	// Table data fetch 
	const [blocks, setBlocks] = useState([]);
	const [totalBlocks, setTotalBlocks] = useState(0);
	const [numTransactions, setNumTransactions] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true)
		// this fetches current block height
		fetch(`${BASE_URL}/blocks?select=level&sort.desc=level&limit=1`)
			.then(response => response.json())
			.then(data => setTotalBlocks(data[0]))
		// this fetches the 15 blocks for the current page
		fetch(`${BASE_URL}/blocks?select=level,timestamp,proposer&offset.pg=${currentPage}&limit=15&sort.desc=level`)
		  .then(response => response.json())
		  .then(data => {
			setBlocks(data);

			// Create fetch urls for every block in current page
			let urls = [];
			for (let i = 0; i < 15; i++) {
				urls = [...urls, `${BASE_URL}/operations/transactions/count?level.eq=${data[i].level}`];
			}

			//this fetches all the transaction amounts for the relevant blocks being showcased
			return Promise.all(urls.map(url => fetch(url)));
		  })
		  .then(responses => Promise.all(responses.map(response => response.json())))
		  .then(data => {
			setNumTransactions(data)
		  })
		  .finally(setLoading(false))
	  }, [currentPage]);
	  
return (
		<div>
			<Table
				blocks={blocks}
				numTransactions={numTransactions}
				loading={loading}
			/>
			<Pagination
				numberOfElements={totalBlocks}
				pageChangeHandler={setCurrentPage}
				elementsPerPage={15}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default StartPage


