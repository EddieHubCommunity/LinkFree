import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Button } from "primereact/button";

import Profile from "./Components/Profile";
import Links from "./Components/Links"
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="p-m-4">
      <Profile />
      <Links/>
      <Footer/>
    </div>
  );
}

export default App;
