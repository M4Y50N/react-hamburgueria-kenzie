import { Container } from "../../assets/styles/Container";
import {
	StyledHeader,
	StyledNav,
	StyledLogoTitle,
	StyledLogoKenzie,
} from "./styles";
import { SearchBox } from "../SearchBox";

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<StyledNav>
					<StyledLogoTitle>
						Burguer <StyledLogoKenzie>Kenzie</StyledLogoKenzie>
					</StyledLogoTitle>
					<SearchBox />
				</StyledNav>
			</Container>
		</StyledHeader>
	);
};
