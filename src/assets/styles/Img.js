import styled, { css } from "styled-components";

export const Img = styled.img`
	width: 100%;
	max-width: 400px;

	${({ Width }) => {
		return css`
			width: ${Width};
			margin: 0 auto;
		`;
	}}
`;
