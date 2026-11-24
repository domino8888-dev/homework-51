import './Ball.css'

interface Props {
  value: number;
}

const Ball = (props: Props) => {
  return (
    <div className="ball">
      {props.value}
    </div>
  );
};

export default Ball;