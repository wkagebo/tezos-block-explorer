import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css'

const AppTable = ({ blocks, numTransactions, loading }) => {
  const navigate = useNavigate();
  const handleRowClick = (level) => {
    navigate("/details", {state:{block: level}}); 
  }


  return (
    <div>
				{loading ? (
					<div>Loading...</div>
				) : (
					<>
						<h1>Blocks</h1>
						<table border={1}>
							<tr>
								<th>Level</th>
								<th>Proposer</th>
								<th>Timestamp</th>
								<th>Transactions</th>
							</tr>
							{blocks.map((block, i) => (
								<tr key={block.level} onClick={() => handleRowClick(block.level)}>
									<td>{block.level}</td>
									<td> {block.proposer.alias ? block.proposer.alias : block.proposer.address } </td>
									<td>{block.timestamp}</td>
									<td>{numTransactions[i]}</td>
								</tr>
							))}
						</table>
					</>
				)}
			</div>
  );
};

export default AppTable;