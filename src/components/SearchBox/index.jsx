import { StyledSearchBox } from "./styles";
import { StyledInput } from "../Input";
import { StyledButton } from "../Buttons/styles";

export const SearchBox = () => {
	return (
		<StyledSearchBox>
			<StyledInput placeholder="Digitar Pesquisa" />
			<StyledButton type="button">Pesquisar</StyledButton>
		</StyledSearchBox>
	);
};
