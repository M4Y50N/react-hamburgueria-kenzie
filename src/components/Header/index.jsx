import { Container } from "../../assets/styles/Container";
import {
	StyledHeader,
	StyledNav,
	StyledLogoTitle,
	StyledLogoKenzie,
} from "./styles";
import { SearchBox } from "./SearchBox";

export const Header = ({ onChange }) => {
	return (
		<StyledHeader>
			<Container>
				<StyledNav>
					<StyledLogoTitle>
						Burguer <StyledLogoKenzie>Kenzie</StyledLogoKenzie>
					</StyledLogoTitle>
					<SearchBox onChange={onChange} />
				</StyledNav>
			</Container>
		</StyledHeader>
	);
};
