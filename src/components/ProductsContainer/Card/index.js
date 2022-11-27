import styled, { css } from "styled-components";

export const StyledCard = styled.li`
	width: calc(120rem / 4.3);
	/* border: 2px solid var(--gray-0); */
	border-radius: var(--radius-1);
	box-shadow: 0 0 5px var(--gray-50);
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 7px var(--gray-50);
	}
`;

export const StyledCardDiv = styled.div`
	width: 100%;
	height: 150px;
	border-radius: var(--radius-1) var(--radius-1) 0 0;
	background-color: var(--gray-0);

	${({ srcImg }) => {
		return css`
			background-image: url(${srcImg});
			background-position: center;
			background-repeat: no-repeat;
		`;
	}}
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

export const StyledCardTitle = styled.h3`
	font-size: var(--title-3);
	font-weight: 600;
`;

export const StyledCardCategory = styled.p`
	color: var(--color-text-complement);
	font-size: var(--caption);
	font-weight: 500;
`;

export const StyledCardPrice = styled.p`
	color: var(--color-primary);
	font-weight: 500;
`;
