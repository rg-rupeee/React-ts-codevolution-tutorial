type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome ${props.name}! You have ${messageCount} unread messages`
        : `Welcome Guest`}
    </h2>
  );
}

export default Greet;
