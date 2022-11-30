import styled, { css } from "styled-components";

export const AppearAnimation = styled.div`
	animation: AppearAnimation 0.3s ease;

	${({ margin }) => {
		switch (margin) {
			case "auto":
				return css`
					margin: 0 auto;
				`;
			default:
				return css`
					margin: 0;
				`;
		}
	}}

	//Animation side
	${({ abs }) => {
		return css`
			@keyframes AppearAnimation {
				0% {
					transform: translateX(${abs * 20}px);
				}
				100% {
					transform: translateX(0px);
				}
			}
		`;
	}}
`;
