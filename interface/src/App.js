import './App.css';
import LoginPage from './Views/LoginPage';
import CreateQuestionPage from './Views/CreateQuestionPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from './Views/FaqPage';
import Header from './Components/Header';
import SelectTestPage from './Views/SelectTestPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateProvaPage from './Views/CreateProvaPage';
import CreateAccountPage from './Views/CreateAccountPage';
import EditQuestionPage from './Views/EditQuestionPage';
import TestPage from './Views/TestPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/prova/:id/create-question" element={<CreateQuestionPage />} />
          <Route path="/select-test" element={<SelectTestPage />} />
          <Route path="/create-test" element={<CreateProvaPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/edit-question/:id" element={<EditQuestionPage />} />
          <Route path="/test/:id" element={<TestPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
