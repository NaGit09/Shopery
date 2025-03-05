import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
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
import ProductTag from "./components/common/ProductTag";
import Tag from "./components/common/tag";
import ProgressTracker from "./components/common/ProgressTracker";
import { FaCheck } from "react-icons/fa6";

=======
import BigProduct from "./components/BigProduct";
>>>>>>> c963d1d (update : add new component & optimize)
function App() {
  return (
    <>
      <div className="container">
<<<<<<< HEAD
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

        <InputField
          style={{ marginBottom: "30px" }}
          variant={"normal"}
          type={"text"}
          placeholder={`Normal`}
        />
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
        {/**
         *  thẻ chứa tag cần có position relative
         * */}
        <div style={{ position: "relative", outline: "1px solid #1A1A1A" }}>
          <img src="/apple.jpg" />
          <ProductTag
            value={"Sale 50%"}
            variant={"default"}
            position="top-right"
          />
          <ProductTag
            value={"New product"}
            variant={"new"}
            position="top-left"
          />
          <ProductTag
            value={"5000$"}
            variant={"bestsale"}
            position="bottom-right"
          />
          <ProductTag
            value={"Out of stock"}
            variant={"outofstock"}
            position="bottom-left"
          />
        </div>
        <Tag value={"Healthy"} />
        <div style={{display: "flex", gap: "10px"}}>
          <ProgressTracker varient={"filled"} value={"02"} />
          <ProgressTracker varient={"outline"} value={"02"} />
          <ProgressTracker varient={"filled"} icon={<FaCheck size={20} />} />
          <ProgressTracker varient={"outline"} icon={<FaCheck size={20} />} />
        </div>
=======
        <BigProduct/>
>>>>>>> c963d1d (update : add new component & optimize)
      </div>
    </>
  );
}

export default App;
