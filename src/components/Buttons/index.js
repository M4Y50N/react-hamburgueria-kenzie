import styled from "styled-components";

export const StyledButton = styled.button`
	font-size: var(--body-font-size);
	padding: 1rem 2rem;
	color: var(--gray-0);
	background-color: var(--color-primary);
	border-radius: var(--radius-2);
	transition: all 0.3s ease;

	&:hover {
		filter: brightness(1.1);
	}
`;
