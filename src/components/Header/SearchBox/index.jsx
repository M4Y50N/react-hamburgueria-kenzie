import { StyledSearchBox } from "./styles";
import { StyledInput } from "../../Input";
import { StyledButton } from "../../Buttons";

export const SearchBox = ({ onChange }) => {
	return (
		<StyledSearchBox>
			<StyledInput placeholder="Digitar Pesquisa" onChange={onChange} />
			<StyledButton type="button">Pesquisar</StyledButton>
		</StyledSearchBox>
	);
};
