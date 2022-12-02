import styled from "styled-components";

export const StyledButton = styled.button`
	font-size: var(--body-font-size);
	padding: 1rem 2rem;
	color: var(--color-text-in-primary);
	background-color: var(--color-primary);
	border-radius: var(--radius-2);
	transition: all 0.3s ease;

	&:hover {
		filter: brightness(1.1);
	}
`;

export const ChangeTheme = styled.button`
	font-size: var(--body-font-size);
	width: 40px;
	height: 40px;
	color: var(--color-text-in-primary);
	background-color: var(--color-primary);
	border-radius: var(--radius-2);

	position: fixed;
	left: 10px;
	bottom: 10px;

	transform: translate(0, 20px);

	transition: all 0.3s ease;

	&:hover {
		filter: brightness(1.1);
		transform: translate(0, 0);
	}
`;
