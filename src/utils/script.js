import styled, { css } from "styled-components";

//utility functions
export const formatPrice = (price) => {
	return price.toFixed(2).toString().replace(".", ",");
};

//animations
export const AppearAnimation = styled.div`
	animation: AppearAnimation 0.3s ease;

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
