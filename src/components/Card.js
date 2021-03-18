import React, { Component, Profiler } from 'react'

const Card = (props) => {

    const profile = props;
    if (profile) {
        return (
            <div className="card w-50">
                <img  src={profile.avatar_url} className="card-img-top" alt="placeholder" />
                <div className="card-body">
                    <div className="card-title">{profile.name}</div>
                    <div className="card-text">{profile.company}</div>
                </div>
            </div>
        );
    }
    return <div></div>

}

export default Card;