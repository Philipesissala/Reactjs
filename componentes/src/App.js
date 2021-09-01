import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Input from "./Input";

const name = (props) => {
  return <h1 name={{ name: props }}></h1>;
};

function App() {
  return (
    <div>
      <Header />
      <Form>
        <Input/>
      </Form>
      <Footer />
    </div>
  );
}

export default App;
