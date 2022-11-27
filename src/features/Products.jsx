import { useEffect, useState } from "react";

import { Container } from "../assets/styles/Container";
import { StyledButton } from "../components/Buttons/styles";
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

import { api } from "../service/api";

export const Products = () => {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		async function getProducts() {
			try {
				const response = await api.get();

				const productsData = response.data;
				setProduct(productsData);
			} catch (error) {
				console.error(error);
			} finally {
			}
		}

		getProducts();
	}, []);

	return (
		<Container>
			<StyledProductsContainer className="products">
				<StyledProductsList>
					{/* <StyledCard>
						<img src="" alt="x" />
						<div className="tilte">Hamburguer</div>
						<div className="category">Sanduíches</div>
						<div className="price">R$ 14</div>
						<StyledButton>Adicionar</StyledButton>
					</StyledCard> */}
					{products.map((prod, i) => {
						return (
							<StyledCard key={i}>
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
										R$ {prod.price}
									</StyledCardP>
									<StyledButton>Adicionar</StyledButton>
								</StyledCardBody>
							</StyledCard>
						);
					})}
				</StyledProductsList>
				<Cart>
					<img src="" alt="x" />
					<div className="tilte">Hamburguer</div>
					<div className="category">Sanduíches</div>
					<div className="price">R$ 14</div>
					<StyledButton>Adicionar</StyledButton>
				</Cart>
			</StyledProductsContainer>
		</Container>
	);
};
