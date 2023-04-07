import React from 'react'

const Alert = (props) => {
    return (
        props.error !== null && (
            <div className='container mt-3'>
                <div class="alert alert-danger" role="alert">
                    {props.error.msg}
                </div>
            </div>
        )
    )
}

export default Alert
