interface GreetProps {
  name?: string;
}

export default function Greet(props: GreetProps) {
  return (
    <div>
      <div>Hello {props.name}</div>
    </div>
  );
}
