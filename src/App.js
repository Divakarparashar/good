
import './App.css';
import Header from './component/header';
import Aside from './component/aside';
import Section from './component/section';
import Footer from './component/footer';
function App() {
  return (
    <>
      <Header/>
      <main>
          <Aside/>
          <Section/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
