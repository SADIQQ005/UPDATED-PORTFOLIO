import Header from './sections/Header';
import MainContent from './sections/MainContent';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-background text-foreground w-150 mx-auto">
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
