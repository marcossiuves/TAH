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
import FeedBackPage from './Views/FeedBackPage';
import FeedBackEvaluationPage from './Views/FeedBackEvaluationPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/prova/:id/criar-questao" element={<CreateQuestionPage />} />
          <Route path="/selecionar-prova" element={<SelectTestPage />} />
          <Route path="/criar-prova" element={<CreateProvaPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/edit-question/:id" element={<EditQuestionPage />} />
          <Route path="/test/:id" element={<TestPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/selecionar-feedback" element={<FeedBackPage />} />
          <Route path="/feedback-prova/:id" element={<FeedBackEvaluationPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
