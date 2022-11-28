import styled from "styled-components";

export const StyledProductsList = styled.ul`
	width: 100%;
	display: flex;
	/* justify-content: space-between; */
	flex-wrap: wrap;
	row-gap: 2rem;
	column-gap: 2rem;

	@media (max-width: 900px) {
		padding: 2rem 1rem;
		flex-wrap: nowrap;
		overflow-x: auto;
	}
`;
