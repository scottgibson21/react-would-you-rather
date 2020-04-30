import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAuthedUser } from '../actions/shared'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(loadAuthedUser())
    }

    render() {
        return (
            <div>
                The Main App, the authed user is: {`${this.props.authedUser}`}
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(App)
