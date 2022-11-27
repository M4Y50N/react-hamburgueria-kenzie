import styled from "styled-components";

export const StyledItem = styled.li`
	padding: 2rem;
	width: calc(120rem / 4.3);
	border: 1px solid var(--gray-50);
	border-radius: var(--radius-1);
`;

export const ContainerItems = styled.ul`
	display: flex;
	justify-content: space-between;
	column-gap: 2rem;
`;

export const StyledProducts = styled.div`
	padding: 4rem 0;
	display: flex;
	column-gap: 4rem;
`;
