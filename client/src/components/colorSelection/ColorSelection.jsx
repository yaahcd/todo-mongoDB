import { ColorsContainer, ColorButton } from "./colorSelection.styles";

function ColorSelection({setChosenColor}) {

  const colorSelection = {
    blue: "#386775",
    yellow: "#705831",
    pink: "#7d4e57",
    purple: "#484564",
    green: "#597d7c",
  };

  const handleClick = (color) => {
    setChosenColor(color)
  }

  return (
    <ColorsContainer>
      <ColorButton color={colorSelection.blue} onClick={() => handleClick(colorSelection.blue)}></ColorButton>
      <ColorButton color={colorSelection.yellow} onClick={() => handleClick(colorSelection.yellow)}></ColorButton>
      <ColorButton color={colorSelection.pink} onClick={() => handleClick(colorSelection.pink)}></ColorButton>
      <ColorButton color={colorSelection.purple} onClick={() => handleClick(colorSelection.purple)}></ColorButton>
      <ColorButton color={colorSelection.green} onClick={() => handleClick(colorSelection.green)}></ColorButton>
    </ColorsContainer>
  );
}

export default ColorSelection;
