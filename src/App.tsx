import { Navbar } from './components/Navbar';
import HomePage from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-24 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h2 className="text-2xl leading-[50px] font-bold truncate">
          Tailwind CSS Navbar - Flowbite
        </h2>
        <p>
          The navbar component can be used to show a list of navigation links
          positioned on the top side of your page based on multiple layouts,
          sizes, and dropdowns The navbar component can be used to show a list
          of navigation links positioned on the top side of your page based on
          multiple layouts, sizes, and dropdowns
        </p>
        <div className="mt-3">
          <HomePage />
        </div>
      </main>
    </div>
  );
}

export default App;
