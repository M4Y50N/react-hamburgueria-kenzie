import { AppearAnimation, formatPrice } from "../../utils/script";
import { StyledButton } from "../Buttons";
import { StyledCardP } from "../ProductsContainer/Card";
import {
	StyledCart,
	StyledCartHead,
	StyledCartProducts,
	StyledCartProductsLi,
	StyledCartTotal,
	StyledEmptyCart,
} from "./styles";

export const Cart = ({ cart, total, delProductInCart, removeAll }) => {
	return (
		<StyledCart>
			<StyledCartHead>Carrinho de Compras</StyledCartHead>
			{cart.length ? (
				<>
					<StyledCartProducts>
						{cart.map((prod, i) => (
							<AppearAnimation key={i} abs={1}>
								<StyledCartProductsLi>
									<img src={prod.img} alt="sadas" />
									<div>
										<h4>{prod.name}</h4>

										<StyledCardP
											fontSize={"var(--caption)"}
											color={"var(--color-text-complement)"}
										>
											{prod.category}
										</StyledCardP>
										<StyledCardP
											fontSize={"var(--body-font-size)"}
											color={"var(--color-primary)"}
										>
											R$ {formatPrice(prod.price)}
										</StyledCardP>
									</div>
									<button
										onClick={() => {
											delProductInCart(prod.price, i);
										}}
									>
										Remover
									</button>
								</StyledCartProductsLi>
							</AppearAnimation>
						))}
					</StyledCartProducts>
					<StyledCartTotal>
						<div>
							<h4>Total</h4>
							<span>R$ {formatPrice(total)}</span>
						</div>
						<StyledButton onClick={removeAll}>Remover todos</StyledButton>
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
