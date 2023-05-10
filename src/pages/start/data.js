import { BASE_URL } from "./apiConfig";

export const columns = [
  {
    Header: "Block level",
    accessor: "level",
  },
  {
    Header: "Proposer",
    accessor: "proposer",
  }, 
  {
    Header: "Timestamp",
    accessor: "timestamp",
  }, 
];

export const formatData = (rawData) =>
rawData.map((rawInfo) => ({
  level: rawInfo.level,
  proposer: rawInfo.proposer?.alias,
  timestamp: rawInfo.timestamp,
}));

export const getCurrentBlockHeight = async () => {
  const response = await fetch(
    `${BASE_URL}/blocks?sort.desc=level&limit=1`
  );
  return await response.json(); 
};

export const getData = async (pageNumber = 1) => {
  const response = await fetch(
    `${BASE_URL}/blocks?select=level,timestamp,producer&offset.pg=${pageNumber}&limit=15&sort.desc=level`
  );
  return await response.json(); 
};
