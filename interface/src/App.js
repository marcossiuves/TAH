import './App.css';
import LoginPage from './Views/LoginPage';
import CreateQuestionPage from './Views/CreateQuestionPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from './Views/FaqPage';
import Header from './Components/Header';
import SelectTestPage from './Views/SelectTestPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandigPage from './Views/LandingPage';
import CreateProvaPage from './Views/CreateProvaPage';
import CreateAccountPage from './Views/CreateAccountPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route index element={<LandigPage />} />
          <Route path="/prova/:id/create-question/:id" element={<CreateQuestionPage />} />
          <Route path="/select-test" element={<SelectTestPage />} />
          <Route path="/create-test" element={<CreateProvaPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          {/* <Route path="/start-test/:id" element={<CreateQuestionPage />} /> */}
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/faq" element={<FaqPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
