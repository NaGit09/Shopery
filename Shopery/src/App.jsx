import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WishList from "./components/WishList";
import Cart from "./components/Cart";
import Button from "./components/Button";
import Close from "./components/Close";
import View from "./components/View";
import CheckBox from "./components/CheckBox";
import Radio from "./components/Radio";
import CloseButton from "./components/CloseButton";
import Socical from "./components/Socical";
import Price from "./components/Price";
import InputField from "./components/common/InputField";
function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center text-success">Hello world</h1>
        <Cart />
        <WishList />
        <Button content={"Buy"} variant={"btnFill"} size={"large"} />
        <Close />
        <View />
        <CheckBox />
        <Radio />
        <CloseButton />
        <Socical brand={"instagram"} />
        <Price price={14.99} sale={29.99} type={"big"} />

        <InputField variant={"normal"} type={"text"} placeholder={`Normal`}/>
        <InputField
          variant={"warning"}
          type={"text"}
          placeholder={`Warning`}
          subText={"This is a Warning text"}
        />
        <InputField
          variant={"danger"}
          type={"text"}
          placeholder={`Danger`}
          subText={"This is a Dangerous text"}
        />
        <InputField
          variant={"success"}
          type={"text"}
          placeholder={`Success`}
          subText={"This is a Successful text"}
        />
        <InputField
          variant={"filled"}
          type={"text"}
          placeholder={`Filled`}
          subText={"This is a Filled text"}
        />
      </div>
    </>
  );
}

export default App;
