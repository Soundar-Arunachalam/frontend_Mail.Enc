import React, { useState } from "react";
import axios from "axios";
import "../KeySearch.css";

const KeySearch = () => {
    const [email, setEmail] = useState("");
    const [keyDetails, setKeyDetails] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            setError(null); // Reset error
            setKeyDetails(null); // Reset previous search result
            const response = await axios.post("http://localhost:3000/search", {
                email,
            });
            setKeyDetails(response.data); // Update key details
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Key Search</h1>
                <div className="form-group">
                    <label htmlFor="email" className="label">
                        Enter Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input-1"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button onClick={handleSearch} className="button-1">
                    Search
                </button>

                {error && <div className="error">Error: {error}</div>}

                {keyDetails && (
                    <div className="result">
                        <h2>Key Details:</h2>
                        <pre>{JSON.stringify(keyDetails, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KeySearch;
