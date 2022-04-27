import './App.css';
import LoginPage from './Views/LoginPage';
import CreateQuestionPage from './Views/CreateQuestionPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from './Views/FaqPage';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/question" element={<CreateQuestionPage />} />
          {/* <Route path="/faq" element={<FaqPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
