import axios from 'axios';
import React, { useState } from 'react'



const GhForm = (props) => {

    const [name, setName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await axios.get(`https://api.github.com/users/${name}`);
        console.log(data.data);
        props.onSubmit(data.data);

    }

    return (
        <div className="w-50 mb-3 row">
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input className="form-control" value={name} onChange={event => setName(event.target.value)}
                        type="text" placeholder="Github Username" required />
                    <button className="btn btn-primary" >Add Card</button>
                </div>
            </form>
        </div>
    );
}

export default GhForm;