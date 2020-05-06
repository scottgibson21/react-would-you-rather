import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { setAuthedUser } from '../actions/authedUser'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        margin: theme.spacing(0, 0, 0),
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        justifyContent: 'center'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: 400
    },
}));

function Login(props) {

    console.log('the props', props)

    const classes = useStyles();
    const [input, setInput] = useState('')
    const users = props.users ? props.users : {}
    console.log(users)
    const userIds = users ? Object.keys(users) : []

    const handleChange = (e) => {
        setInput(e.target.value)
        console.log('The new state is: ', e.target.value)
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        console.log("handle submit called!, userId is: ", input)

        if (input === '') {
            return;
        }

        props.dispatch(setAuthedUser(input))
    }

    if (props.loading === true) {
        return (
            <div className={classes.loading}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <Select
                                native
                                value={input}
                                onChange={handleChange}
                                label="Age"
                                inputProps={{
                                    name: 'age',
                                    id: 'outlined-age-native-simple',
                                }}
                                className={classes.selectEmpty}
                            >
                                <option aria-label="None" value="" disabled>Select</option>
                                {userIds.map((userId) => (
                                    <option key={userId} value={userId}>{users[userId].name}</option>
                                ))}
                            </Select>
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

function mapStateToProps({ users }) {
    console.log('the current users in map state to props: ', users)
    return {
        users: users,
        loading: Object.keys(users).length === 0 ? true : false
    }
}

export default connect(mapStateToProps)(Login)