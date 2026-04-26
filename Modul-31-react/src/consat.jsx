export default function Details({ name, age, gender }) {
  if (age >= 18) {
    return (
      <div className="person">
        <h1>Welcome Consat</h1>
        <h1>Name: {name}</h1>
        <h2>Age: {age}</h2>
        <h2>Gender: {gender}</h2>
      </div>
    );
  }
  return (
    <div className="person">
      <h1>Ger out Consat</h1>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Gender: {gender}</h2>
    </div>
  );
}
