import { black } from 'ansi-colors';
import { BackgroundColor } from 'chalk';
import React from 'react';

const Card = (props) => {

    const profile = props;
    if (profile) {
        return (
            <div className="card">
                <img src={profile.avatar_url} className="card-img-top img-fluid" alt="placeholder" />
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