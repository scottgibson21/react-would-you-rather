import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {

    render() {
        const { userIds } = this.props
        console.log('users from the login app', userIds)
        console.log('props from the login app', this.props)
        return (
            <div>
                <h3>Options User Ids</h3>
                <ol>
                    {userIds.map((userId) => (
                        <li key={userId}>
                            {userId}
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login)