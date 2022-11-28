import { StyledButton } from "../Buttons/styles";
import { StyledCardP } from "../ProductsContainer/Card";
import {
	StyledCart,
	StyledCartHead,
	StyledCartProducts,
	StyledCartProductsLi,
	StyledCartTotal,
	StyledEmptyCart,
} from "./styles";

export const Cart = () => {
	return (
		<StyledCart>
			<StyledCartHead>Carrinho de Compras</StyledCartHead>
			{false ? (
				<>
					<StyledCartProducts>
						<StyledCartProductsLi>
							<img src="https://i.imgur.com/eEzZzcF.png" alt="sadas" />
							<div>
								<h4>X-Burguer</h4>

								<StyledCardP
									fontSize={"var(--caption)"}
									color={"var(--color-text-complement)"}
								>
									Sanduiches
								</StyledCardP>
								<StyledCardP
									fontSize={"var(--body-font-size)"}
									color={"var(--color-primary)"}
								>
									R$ 20
								</StyledCardP>
							</div>
							<button>Remover</button>
						</StyledCartProductsLi>
					</StyledCartProducts>
					<StyledCartTotal>
						<div>
							<h4>Total</h4>
							<span>R$ 40</span>
						</div>
						<StyledButton>Remover todos</StyledButton>
					</StyledCartTotal>
				</>
			) : (
				<StyledEmptyCart>
					<h3>Sua sacola está vazia</h3>
					<p>Adicione Items</p>
				</StyledEmptyCart>
			)}
		</StyledCart>
	);
};
