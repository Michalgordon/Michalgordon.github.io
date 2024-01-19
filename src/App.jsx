import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
import { Suspense } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="w-full font-poppins flex flex-col h-full bg-white">
      <Header></Header>
      <div className="laptop:h-full flex flex-col laptop:flex-row flex-grow overflow-auto">
        <Suspense>
          <AnimatePresence>
            <Outlet></Outlet>
            <div className="laptop:hidden">
              <Footer></Footer>
            </div>
          </AnimatePresence>
        </Suspense>
      </div>
      <div className="hidden laptop:flex">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
