import { useState } from "react";

import { Container } from "../assets/styles/Container";
import { StyledButton } from "../components/Buttons";
import { StyledProductsContainer } from "../components/ProductsContainer";
import {
	StyledCard,
	StyledCardImg,
	StyledCardBody,
	StyledCardTitle,
	StyledCardP,
	StyledCardHead,
} from "../components/ProductsContainer/Card";
import { StyledProductsList } from "../components/ProductsContainer/ProductsList";
import { Cart } from "../components/Cart";

import { AppearAnimation, formatPrice } from "../utils/script";

export const Products = ({ products }) => {
	const [total, setTotal] = useState(0),
		[cart, setCart] = useState([]);

	const addProductInCart = (img, name, category, price) => {
		const dataProduct = { img, name, category, price };

		setTotal(() => total + price);
		setCart(() => [...cart, dataProduct]);
	};

	const delProductInCart = (price, i) => {
		const newArray = [];

		cart.forEach((prod, ind) => {
			if (i !== ind) {
				newArray.push(prod);
			}
		});

		setCart(newArray);
		setTotal(() => total - price);
	};

	const removeAll = () => {
		setCart([]);
		setTotal(0);
	};

	return (
		<Container>
			<StyledProductsContainer>
				<StyledProductsList>
					{products.map((prod, i) => {
						return (
							<AppearAnimation key={i} abs={-1}>
								<StyledCard>
									<StyledCardHead>
										<StyledCardImg src={prod.img} alt={prod.name} />
									</StyledCardHead>
									<StyledCardBody>
										<StyledCardTitle>{prod.name}</StyledCardTitle>
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
										<StyledButton
											onClick={() => {
												addProductInCart(
													prod.img,
													prod.name,
													prod.category,
													prod.price
												);
											}}
										>
											Adicionar
										</StyledButton>
									</StyledCardBody>
								</StyledCard>
							</AppearAnimation>
						);
					})}
				</StyledProductsList>
				<Cart
					cart={cart}
					total={total}
					delProductInCart={delProductInCart}
					removeAll={removeAll}
				/>
			</StyledProductsContainer>
		</Container>
	);
};
