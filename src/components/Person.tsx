import { PersonProps } from './Person.types';

function Person(props: PersonProps) {
  return (
    <h1>
      {props.name.first} {props.name.last}
      {props?.names?.map((obj) => {
        return (
          <h3 key={obj.first}>
            {obj.first} - {obj.last}
          </h3>
        );
      })}
    </h1>
  );
}
export default Person;
