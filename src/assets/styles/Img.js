import styled, { css } from "styled-components";

export const Img = styled.img`
	width: 100%;
	max-width: 400px;

	${({ Width, Height }) => {
		return css`
			width: ${Width};
			height: ${Height};
			margin: 0 auto;
		`;
	}}
`;
