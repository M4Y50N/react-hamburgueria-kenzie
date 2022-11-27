import { Container } from "../assets/styles/Container";
import { StyledButton } from "../components/Buttons";
import {
	ContainerItems,
	StyledItem,
	StyledProducts,
} from "../components/Card/styles";

export const Products = () => {
	return (
		<Container>
			<StyledProducts className="products">
				<ContainerItems>
					<StyledItem>
						<img src="" alt="x" />
						<div className="tilte">Hamburguer</div>
						<div className="category">Sanduíches</div>
						<div className="price">R$ 14</div>
						<StyledButton>Adicionar</StyledButton>
					</StyledItem>
					<StyledItem>
						<img src="" alt="x" />
						<div className="tilte">Hamburguer</div>
						<div className="category">Sanduíches</div>
						<div className="price">R$ 14</div>
						<StyledButton>Adicionar</StyledButton>
					</StyledItem>
					<StyledItem>
						<img src="" alt="x" />
						<div className="tilte">Hamburguer</div>
						<div className="category">Sanduíches</div>
						<div className="price">R$ 14</div>
						<StyledButton>Adicionar</StyledButton>
					</StyledItem>
				</ContainerItems>
				<StyledItem>
					<img src="" alt="x" />
					<div className="tilte">Hamburguer</div>
					<div className="category">Sanduíches</div>
					<div className="price">R$ 14</div>
					<StyledButton>Adicionar</StyledButton>
				</StyledItem>
			</StyledProducts>
		</Container>
	);
};
