import "./style.css"
import { useState } from "react"
function Prover(props){

    const [certificate, setCertificatet] = useState();

    const handleSubmit = function (event) {
        event.preventDefault()
        var data = {
            recipient_id: event.target.recipient_id.value,
            recipient_name: event.target.recipient_name.value,
            email: event.target.email.value,
            phoneNumber: event.target.phoneNumber.value,
            grade: event.target.grade.value,
            issuer_id: event.target.issuer_id.value,
            issuer_name: event.target.issuer_name.value
        }
        
		fetch("/prover", {
			method :"POST",
			body : JSON.stringify(data),
			headers : {
				"Content-type": "application/json"
			}
		}).then(res => res.json())
		.then(data =>{
            setCertificatet(data);
		})
		.catch(err => console.log(err))
    }

return (
    <div className="container-fluid p-5 d-flex align-items-top justify-content-center bg-light" style={{minHeight:"30vh"}}>
        
        <form onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Enter Certificate Details</h3>
            <div className="input-group mb-5">
            <input type="text" className="form-control border border-1 border-light shadow" placeholder="recipient id" id="recipient_id"/>
            <input type="text" className="form-control border border-1 border-light shadow" placeholder="recipient name" id="recipient_name"/>
            <input type="text" className="form-control border border-1 border-light shadow" placeholder="email" id="email"/>
            </div>
            <div className="input-group mb-5">
            <input type="text" className="form-control border border-1 border-light shadow" placeholder="phoneNumber" id="phoneNumber"/>
            <input type="text" className="form-control border border-1 border-light shadow" placeholder="grade" id="grade"/>
            </div>
            <div className="input-group mb-5">
            <input type="text" className="form-control border border-1 border-light shadow" placeholder="issuer id" id="issuer_id"/>
            <input type="text" className="form-control border border-1 border-light shadow" placeholder="issuer name" id="issuer_name"/>
            </div>
            <div className="input-group mb-5">
            <button className="btn btn-outline-danger rounded-2 border border-0 shadow">Generate Proof</button>
            </div>
            <span className="fw-light">
                <pre >
                    {JSON.stringify(certificate, null, "\n")}
                </pre>
            </span>
        </form>
        
    </div>
   
);
}

export default Prover;

//Code, implementation and testing done by Anuja Rathi. Please contact anujarathi2@gmail.com for any query.