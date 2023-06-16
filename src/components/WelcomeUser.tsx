interface WelcomeUser{
    name: string,
    age: number
}

function WelcomeUser(props: WelcomeUser) {
    return (
      <div>
        <h1>Welcome: {props.name}!</h1>
        <p>Apparement vous aurez {props.age +2} ans dans 2 ans </p>
      </div>
    );
  }

  export default WelcomeUser