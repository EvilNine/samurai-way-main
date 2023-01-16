import React, {useState} from 'react';
import {PaginationContainer, PaginationLinks, PaginationLinksItem} from "./Pagination.styled";

type PropsType = {
	totalItemsCount: number
	pageSize: number
	currentPage?: number
	onPageChanged?: (pageNumber: number) => void
	portionSize?: number
}

const Pagination: React.FC<PropsType> = (
	{
		totalItemsCount,
		pageSize,
		currentPage = 1,
		onPageChanged = x => x,
		portionSize = 10
	}) => {
	
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	
	let pages: Array<number> = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	
	let portionCount = Math.ceil(pagesCount / portionSize);
	let [portionNumber, setPortionNumber] = useState(1);
	
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	let rightPortionPageNumber = portionNumber * portionSize;
	
	
	return (
		<PaginationContainer>
			<PaginationLinks>
				{ portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
				{pages
					.filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
					.map((p) => {
						return <PaginationLinksItem key={p}
													onClick={(e) => {onPageChanged(p)}}>
													{p}
						      </PaginationLinksItem>
					})}
				{ portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
			</PaginationLinks>
		</PaginationContainer>
	);
};

export default Pagination;