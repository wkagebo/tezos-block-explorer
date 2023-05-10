import Table from "../../components/table";
import Pagination from "../../components/pagination";
import { useEffect, useState } from "react";
import { formatData, getData, getCurrentBlockHeight } from "./data";

const StartPage = () => {
	const [tableData, setTableData] = useState({
		rowData: [],
		isLoading: false,
		totalPages: 0, 
		totalBlocks: 0,
	});
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		setTableData((previousState) => ({
			...previousState,
			rowData: [],
			isLoading: true,
		}));
		getData(currentPage).then((info) => {
			const { totalPages, totalBlocks, data } = info; 
			setTableData({
				isLoading: false,
				rowData: formatData(data),
				totalPages, 
				totalBlocks: getCurrentBlockHeight().then(data => data[0].level),
			});
		});
	}, [currentPage]); 
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
				blocksPerPage={15}
			/>
		</div>
	);
};

export default StartPage
