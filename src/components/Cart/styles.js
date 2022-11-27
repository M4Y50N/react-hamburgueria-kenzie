import styled from "styled-components";

export const StyledCart = styled.div`
	width: 500px;
	height: fit-content;
	border-radius: var(--radius-2);
	background-color: var(--gray-0);
`;

export const StyledCartHead = styled.div`
	padding: 2rem;
	color: var(--color-text-in-primary);
	border-radius: var(--radius-2) var(--radius-2) 0 0;
	background-color: var(--color-primary);
`;
export const StyledCartProducts = styled.ul`
	padding: 2rem 1rem;
	height: 300px;
	display: flex;
	flex-direction: column;
	row-gap: 2rem;

	overflow-y: auto;
`;

export const StyledCartProductsLi = styled.li`
	padding: 1rem 0.7rem;
	display: flex;
	align-items: center;
	column-gap: 1rem;
	border-radius: var(--radius-2);
	box-shadow: 0 2px 5px var(--gray-20);

	& > img {
		width: 27%;
		border-radius: var(--radius-2);
		background-color: var(--gray-20);
	}

	& > div {
		display: flex;
		flex-direction: column;
		row-gap: 0.7rem;
	}

	& > button {
		margin-left: auto;
		height: fit-content;
		align-self: flex-start;
		font-weight: 600;
		font-size: var(--body-font-size);
		color: var(--gray-50);

		transition: all 0.3s ease;
	}

	& > button:hover {
		filter: brightness(0.7);
	}
`;

export const StyledCartTotal = styled.div`
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	border-top: 2px solid var(--gray-20);

	& > div {
		font-weight: 500;
		display: flex;
		justify-content: space-between;
	}

	& > div > span {
		color: var(--color-primary);
	}

	& > button {
		padding: 2rem;
		font-weight: 500;
		color: var(--gray-50);
		background-color: var(--gray-20);
	}

	& > button:hover {
		color: var(--color-text-in-primary);
		background-color: var(--color-primary);
	}
`;

export const StyledEmptyCart = styled.div`
	padding: 7rem 5rem;
	text-align: center;
	background-color: var(--gray-0);
	border-radius: 0 0 var(--radius-2) var(--radius-2);

	& > h3 {
		font-weight: 700;
		margin-bottom: 1rem;
	}

	& > p {
		color: var(--gray-50);
	}
`;
