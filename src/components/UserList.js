import React, { Component } from 'react';
import User from './User';
import Spinner from './Spinner';

export class UserList extends Component {


    render() {

        if(this.props.spinner){
            return <Spinner/>;
        }

        return (
            <div className="row d-flex">
                <div className="col-md-5">
                    {this.props.users.map(user => (
                        <User user={user} key={user.id}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default UserList
