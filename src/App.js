import { useDispatch } from "react-redux";
import { Book } from "./components/Book/Book";
import { Phone } from "./components/Phone/Phone";
import { byBook } from "./redux/book/bookAction";
import { buyPhone } from "./redux/phone/phoneAction";

function App() {

  const dispatch = useDispatch();

  const handleBonus = () => {
    dispatch(buyPhone())
    dispatch(byBook())
  }

  return (
    <div>
      <Book/>
      <button onClick={() => handleBonus()} style={{marginTop: '20px'}}>Bonus</button>
      <Phone/>
    </div>
  );
}

export default App;
