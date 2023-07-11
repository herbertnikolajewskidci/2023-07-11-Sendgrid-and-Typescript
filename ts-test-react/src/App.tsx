import './App.css';

interface Props {
  title: string | number;
  color?: string;
}
function Header(props: Props) {
  return (
      <header style={{ color: props.color || "red" }}>{props.title}</header>
  );
}

function App() {
  return (
    <div className="App">
            <Header title="Meine Webseite" />
            <Header title="foo" color="blue" />
        </div>
  );
}

export default App;
