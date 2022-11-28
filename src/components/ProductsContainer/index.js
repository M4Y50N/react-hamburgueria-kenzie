import styled from "styled-components";

export const StyledProductsContainer = styled.div`
	padding: 4rem 0;
	display: flex;
	gap: 4rem;

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
