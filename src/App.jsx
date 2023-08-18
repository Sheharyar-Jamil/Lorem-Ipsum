import { useState } from "react";
import data from "./data";
import Text from "./components/Text";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const numberChangeHandler = (event) => {
    setCount(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let amount = parseInt(count);

    if(amount <= 0 ){
      amount = 1;
    }

    if(amount > 9){
      amount = 9;
    }
    setText(data.slice(0, amount));
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={formSubmitHandler}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={numberChangeHandler}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      {text.map((index) => {
        return(
          <Text key={index} text={text}/>
        )
      })}
    </section>
  );
}

export default App;
