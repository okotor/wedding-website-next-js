import React, {useState} from 'react';
import Grid from "@mui/material/Grid";
import {toast} from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router'
import useAuthStore from '../../store/AuthStore';
import styles from './Login.module.css';

const LoginPage = () => {

    const router = useRouter()
    const login = useAuthStore((state) => state.login);

    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const changeHandler = (e) => {
        setValue({...value, [e.target.name]: e.target.value});
    };

    const submitForm = (e) => {
        e.preventDefault();
        const success = login(value.email, value.password);
        if (success) {
            toast.success('Úspěšné přihlášení!');
            router.push('/'); // Redirect to the homepage or any other page
        } else {
            toast.error('Neplatné přihlašovací údaje!');
        }
    };

    return (
        <Grid className={styles.loginWrapper}>
            <Grid className={styles.loginForm}>
                <h2>Přihlášení</h2>
                <p>pro svatební hosty</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className={styles.inputOutline}
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                onChange={changeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth type="submit">Přihlásit se</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
};

export default LoginPage;