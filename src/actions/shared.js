import { setAuthedUser } from './authedUser'
import { receiveUsers } from './users'
import { _getUsers } from '../utils/_Data'

const AUTHED_ID = 'scottgibson'

export function handleInitialData() {
    return (dispatch) => {

        return _getUsers()
            .then((users) => {
                console.log("users from then block", users)
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}