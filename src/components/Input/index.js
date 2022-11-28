import styled from "styled-components";

export const StyledInput = styled.input`
	outline: none;
	border: none;
	padding: 0.3rem;
	background-color: transparent;

	@media (max-width: 600px) {
		max-width: 150px;
	}

	@media (max-width: 310px) {
		max-width: 100px;
	}
`;
