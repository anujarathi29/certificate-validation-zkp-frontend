import "./style.css"
import { useState } from "react"
function Verifier(props){

    const [status, setStatus] = useState();

    const handleSubmit = function (event) {
        event.preventDefault()
        var data = {
            proof: event.target.proof.value
        }
        
		fetch("/verifier", {
			method :"POST",
			body : JSON.stringify(data),
			headers : {
				"Content-type": "application/json"
			}
		}).then(res => res.json())
		.then(data =>{
            setStatus(data);
		})
		.catch(err => console.log(err))
    }

return (
    
    <div className="container-fluid p-4 d-flex align-items-center justify-content-center bg-light" style={{minHeight:"30vh"}}>
        
        <form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Enter Proof</h3>
            <div className="input-group mb-5">
            <textarea className="form-control" placeholder="Enter the proof" id="proof" style={{width:"500px",height: "500px"}}></textarea>
            </div>
            <div className="input-group mb-5">
            <button className="btn btn-outline-danger rounded-2 border border-0 shadow">Verify Proof</button>
            </div>
            <span className="fw-light">
                <pre >
                <i class="bi bi-check-circle-fill"></i>{JSON.stringify(status, null, 0)}
                </pre>
            </span>
        </form>
        
    </div>
   
);
}

export default Verifier;

//Code, implementation and testing done by Anuja Rathi. Please contact anujarathi2@gmail.com for any query.