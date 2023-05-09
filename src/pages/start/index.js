import Table from "../../components/table";
import Pagination from "../../components/pagination";
import { useState } from "react";

const StartPage = () => {
	const [tableData, setTableData] = useState({
		rowData: [],
		isLoading: false,
		totalPages: 0, 
		totalBlocks: 0,
	});
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<div>
			<p>Number of blocks: {tableData.totalBlocks || "Loading..."}</p>
			<div>
				<Table
					columns={columns}
					data={tableData.rowData}
					isLoading={tableData.isLoading}
				/>
			</div>
			<Pagination
				numberOfBlocks={tableData.totalBlocks}
				pageChangeHandler={setCurrentPage}
				blocksPerPage={50}
			/>
		</div>
	);
};

export default StartPage
