import Input from "../Input";
import Title from "../Title";
import Line from "../Line";
import Block from "../Block";
import useCMYK from "../../hooks/useCMYK";

export default function CMYKColor() {
  const {
    cyan,
    magenta,
    yellow,
    black,
    setCyan,
    setMagenta,
    setYellow,
    setBlack,
    color,
  } = useCMYK();
  
  return (
    <Block color={color}>
      <Title>CMYK - Cyan, Magenta, Yellow, Black</Title>
      <Line>
        <Input label="Cyan" value={cyan} setValue={setCyan} min={0} max={360} />
        <Input label="Magenta" value={magenta} setValue={setMagenta} min={0} max={100} />
        <Input label="Yellow" value={yellow} setValue={setYellow} min={0} max={100} />
        <Input label="Black" value={black} setValue={setBlack} min={0} max={100} />
      </Line>
    </Block>
  );
}