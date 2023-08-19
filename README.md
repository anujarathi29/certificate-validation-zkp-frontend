# Internship Assignment Task: Certificate Verification - Using Zero Knowledge Proof (Frontend)

## Explanation of the frontend and flow of the application

The purpose of zero knowledge proof implementation in the certificate validation as mentioned in the problem statememnt was to verify the credentials of a prover without sharing any credentials with the verifier.

Front end is used to provide the payload expected.

## Steps to use frontend

1. Clone the project:

```sh
git clone 
```

2. Run the front-end

```sh
cd front-end
npm start
```

If the webpack is compiled successfully, go to [http://localhost:3000] and access the frontend.

# API

## `/prover`
#### Expected payload
    {
        "recipient_id": Number,
        "recipient_name": String,
        "email": String,
        "phoneNumber": String,
        "grade": String,
        "issuer_id": Number,
        "issuer_name": String,
    }
#### Expected response
    {
	    "proof": {
            <generated proof>
        }
    }

## `/verifier`
#### Expected payload
    {
        "proof": String,
    }
#### Expected response
    {
	    "Status": {
            <Verification Status>
        }
    }
