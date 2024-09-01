import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faLaravel, faVuejs, faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { ContactForm } from "./components/ContactForm";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import  Landing  from "./pages/Landing";

function App() {
  const companies = [
    { name: "React JS", icon: faReact },
    { name: "Node", icon: faNodeJs },
    { name: "Laravel", icon: faLaravel },
    { name: "Vue", icon: faVuejs },
    { name: "Angular", icon: faAngular },
    { name: "Bootstrap", icon: faBootstrap },
  ];

  return (
    <>
        <Router>

<Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/contact" element={<ContactForm />} />
</Routes>
<Footer />
</Router>

    </>

  );
}

export default App;
