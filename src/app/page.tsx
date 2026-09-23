import { ToastContainer } from "react-toastify";
import Hero from "./HomePage/hero";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <ToastContainer />
    </div>
    
   
  );
}
