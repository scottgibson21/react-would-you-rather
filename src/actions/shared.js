import { setAuthedUser } from './authedUser'
import { _getUsers } from '../utils/_Data'

const AUTHED_ID = 'scottgibson'

export function loadAuthedUser() {
    return (dispatch) => {
        dispatch(setAuthedUser(AUTHED_ID))
    }
}