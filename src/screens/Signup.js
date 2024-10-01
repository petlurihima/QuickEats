import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        geolocation: "",
        phoneNo: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                password: credentials.password,
                email: credentials.email,
                phoneNo: credentials.phoneNo,
                location: credentials.geolocation
            })
        });

        const json = await response.json();
        console.log(json);
        // Handle the response or any error
        if(!json.success){
            alert("Enter valid credentials")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={credentials.name}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            value={credentials.email}
                            onChange={onChange}
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneNo"
                            name="phoneNo"
                            value={credentials.phoneNo}
                            onChange={onChange}
                            pattern="[0-9]{10}"  // Pattern for a 10-digit phone number
                            title="Phone number should be 10 digits long"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="geolocation" className="form-label">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="geolocation"
                            name="geolocation"
                            value={credentials.geolocation}
                            onChange={onChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
                </form>
            </div>
        </>
    )
}
