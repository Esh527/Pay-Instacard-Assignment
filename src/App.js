import './App.css';
import Header from './Components/Header_Component/Header';
import Content from './Components/Content_Component/Content';
import Content2 from './Components/Content_Component_Part2/Content2';
import Content3 from './Components/Content_Component_Part3/Content3';
import Content4 from './Components/Content_Component_Part4/Content4';
import Content5 from './Components/Content_Component_Part5/Content5';
import Testimonials from './Components/Testimonials_Component/Testimonials';
import StudentSpecial from './Components/Student_Special_Component/StudentSpecial';
import Footer from './Components/Footer_Component/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header1">
        <Header />
        <Content/>
        <Content2/>
        <Content3/>
        <Content4/>
        <Content5/>
        <Testimonials/>
        <StudentSpecial/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
