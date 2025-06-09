import Header from './sections/Header';
import MainContent from './sections/MainContent';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="bg-background text-foreground w-full max-w-[600px] px-4 sm:w-150 sm:mx-auto sm:px-0 mx-auto">
      <Header />
      <main>
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
