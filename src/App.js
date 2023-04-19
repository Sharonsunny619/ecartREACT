import {} from "antd";
import './App.css';
import AppFooter from "./components/footer";
import AppHeader from "./components/header";
import PageContent from "./components/pagecontent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}
export default App;

