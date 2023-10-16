import About from './About';
import Section from './Section';

function App() {

  return (
    <>
      <div className="grid grid-cols-1 gap-4 h-[100vh] px-12 my-auto p-0">
          <header className="w-4/4 h-[100vh] flex justify-start items-center"><About/></header>
          <main className="mx-auto w-3/4 max-md:w-full max-md:mx-0"><Section/></main>
          <footer className="w-100 flex justify-between font-extrabold uppercase text-blue-500 text-xl p-4 max-md:flex-col max-md:mx-auto max-md:items-center max-md:w-full max-md:p-0 max-md:mt-14 max-md:gap-4 max-md:pb-4">
          <p  className=''>Made by Alejandro Nieto </p>
            <div className="footers-url flex max-md:flex-col max-md:mx-auto max-md:items-center max-md:gap-2 text-blue-200 gap-4 ">
              
              <p className="hover:text-blue-500">Github</p>
              <p>Linkedin</p>
              <p>Gallery</p>
            </div>
            
          </footer>
      </div>  
    </>
  )
}

export default App