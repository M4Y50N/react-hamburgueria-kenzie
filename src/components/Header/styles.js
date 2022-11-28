import styled from "styled-components";

export const StyledHeader = styled.header`
	/* width: 100%; */
	padding: 1.7rem 0;
	background-color: var(--gray-0);
	box-shadow: 0 0 5px var(--gray-50);
`;

export const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 600px) {
		flex-direction: column;
		row-gap: 2rem;
	}
`;

export const StyledLogoTitle = styled.h1`
	font-size: var(--title-1);
	font-weight: 500;
`;

export const StyledLogoKenzie = styled.span`
	font-size: var(--title-3);
	color: var(--color-secondary);
`;
