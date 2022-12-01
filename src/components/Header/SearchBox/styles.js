import styled from "styled-components";

export const StyledSearchBox = styled.div`
	font-size: var(--body-font-size);
	padding: 1rem 0.5rem 1rem 1rem;
	border: 1px solid var(--gray-20);
	background-color: var(--color-background);
	box-shadow: 0 0 0.5rem var(--gray-20) inset;
	border-radius: var(--radius-2);

	& > input {
		color: var(--gray-100);
	}
`;
