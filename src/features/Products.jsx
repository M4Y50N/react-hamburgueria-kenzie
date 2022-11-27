import { useEffect, useState } from "react";

import { Container } from "../assets/styles/Container";
import { StyledButton } from "../components/Buttons/styles";
import { StyledProductsContainer } from "../components/ProductsContainer";
import {
	StyledCard,
	StyledCardDiv,
	StyledCardBody,
	StyledCardTitle,
	StyledCardCategory,
	StyledCardPrice,
} from "../components/ProductsContainer/Card";
import { StyledProductsList } from "../components/ProductsContainer/ProductsList";

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
								<StyledCardDiv
									srcImg={prod.img}
									alt={prod.name}
								></StyledCardDiv>
								<StyledCardBody>
									<StyledCardTitle>{prod.name}</StyledCardTitle>
									<StyledCardCategory>{prod.category}</StyledCardCategory>
									<StyledCardPrice>R$ {prod.price}</StyledCardPrice>
									<StyledButton>Adicionar</StyledButton>
								</StyledCardBody>
							</StyledCard>
						);
					})}
				</StyledProductsList>
				<StyledCard>
					<img src="" alt="x" />
					<div className="tilte">Hamburguer</div>
					<div className="category">Sanduíches</div>
					<div className="price">R$ 14</div>
					<StyledButton>Adicionar</StyledButton>
				</StyledCard>
			</StyledProductsContainer>
		</Container>
	);
};
