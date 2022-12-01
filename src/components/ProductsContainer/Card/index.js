import styled, { css } from "styled-components";

export const StyledCard = styled.li`
	width: calc(120rem / 5);
	min-width: 24.7rem;
	/* border: 2px solid var(--gray-0); */
	border-radius: var(--radius-1);
	box-shadow: 0 0 5px var(--gray-50);
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 7px var(--gray-50);
	}
`;

export const StyledCardBody = styled.div`
	padding: 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 1.5rem;

	& > button {
		width: fit-content;
	}
`;

export const StyledCardHead = styled.div`
	text-align: center;
	background-color: var(--gray-0);
	border-radius: var(--radius-1) var(--radius-1) 0 0;
`;

export const StyledCardImg = styled.img`
	margin: 0 auto;
	height: 150px;
	object-fit: cover;
`;

export const StyledCardTitle = styled.h3`
	color: var(--gray-100);
	font-size: var(--title-3);
	font-weight: 600;
`;

export const StyledCardP = styled.p`
	font-weight: 500;
	transition: all 0.3s ease;

	${({ fontSize, color }) => {
		return css`
			color: ${color};
			font-size: ${fontSize};
		`;
	}}
`;
