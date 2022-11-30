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

import nenhumproduto from "../assets/img/nenhumproduto.png";
import loadingbuffering from "../assets/img/loadingbuffering.gif";

import { AppearAnimation } from "../assets/styles/Animations";
import { formatPrice } from "../utils/script";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Img } from "../assets/styles/Img";
import { H2 } from "../assets/styles/Typography";

export const Products = ({ products, filterProd, loading }) => {
	const [total, setTotal] = useState(0),
		[cart, setCart] = useState([]);

	const addProductInCart = (id, img, name, category, price) => {
		const dataProduct = { id, img, name, category, price };

		const repeatItems = cart.filter((prod) => {
			return prod.id === id;
		});

		if (!repeatItems.length) {
			setTotal(() => total + price);
			setCart(() => [...cart, dataProduct]);
			toast.success("Produto adicionado", {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		} else {
			toast.error("Produto já adicionado", {
				position: toast.POSITION.BOTTOM_RIGHT,
			});
		}
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

		toast.warn("Produto removido", {
			position: toast.POSITION.BOTTOM_RIGHT,
		});
	};

	const removeAll = () => {
		setCart([]);
		setTotal(0);
		toast.info("Carrinho esvaziado", {
			position: toast.POSITION.BOTTOM_RIGHT,
		});
	};

	return (
		<Container>
			<ToastContainer />
			{filterProd.toLowerCase() !== "todos" ? (
				<AppearAnimation abs={-1}>
					<H2>Resultado da pesquisa por: "{filterProd}"</H2>
				</AppearAnimation>
			) : (
				""
			)}

			<StyledProductsContainer>
				<StyledProductsList>
					{loading ? (
						<Img src={loadingbuffering} alt="Loading..." Width={"250px"} />
					) : products.length ? (
						products.map((prod, i) => {
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
														prod.id,
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
						})
					) : (
						<AppearAnimation abs={-1} margin={"auto"}>
							<Img
								src={nenhumproduto}
								alt="Não foi encontrado nenhum produto"
							/>
						</AppearAnimation>
					)}
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
