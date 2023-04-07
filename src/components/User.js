import React, { Component } from 'react'

export class User extends Component {

    render() {

        const {login, avatar_url, html_url} = this.props.user;

        return (
            <div className="card mb-3 border">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={avatar_url} className="avatar img-fluid rounded-start" alt={login}></img>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5>{login}</h5>
                            <a href={html_url} className="btn btn-primary">Github Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User
