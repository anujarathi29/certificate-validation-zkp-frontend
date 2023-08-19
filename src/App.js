import Prover from "./components/Prover"
import Verifier from "./components/Verifier"
import { useState } from "react";
function App() {

  const [activeComponent, setActiveComponent] = useState(null);

  const handleProverClick = () => {
    setActiveComponent('prover');
  };

  const handleVerifierClick = () => {
    setActiveComponent('verifier');
  };

  let componentToRender = null;

  if (activeComponent === 'prover') {
    componentToRender = <Prover />;
  } else if (activeComponent === 'verifier') {
    componentToRender = <Verifier />;
  }

  return (
    <div className="container-fluid m-5 p-5 d-flex align-items-center justify-content-center bg-light" style={{ minHeight: "100vh" }}>
      <div className="">
        <div className="d-flex align-items-center justify-content-center"><h3 className="mb-4">Choose Who you are</h3></div>
      <div className="input-group mb-2 d-flex align-items-center justify-content-center">
        <button className="btn btn-outline-danger rounded-2 border border-0 shadow m-2" onClick={handleProverClick}>Prover</button>
        <button className="btn btn-outline-danger rounded-2 border border-0 shadow m-2" onClick={handleVerifierClick}>Verifier</button>
        </div>
        <div className="mb-5">
        {componentToRender}
        </div>
        </div>
    </div>
  );
}


export default App;

//Code, implementation and testing done by Anuja Rathi. Please contact anujarathi2@gmail.com for any query.