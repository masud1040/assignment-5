import { ToastContainer } from "react-toastify";
import Hero from "./HomePage/hero";
import Library from "./HomePage/library";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Library></Library>
     
    </div>
    
   
  );
}
