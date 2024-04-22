import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import loginIcon from '../assets/images/mail.svg';
import passwordIcon from '../assets/images/key.svg';
import { PublicInput } from '../components/general/PublicInput';


export const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container-public">
            <img src={logo} alt='Logo Devameet' className='logo' />
            <form>
                <PublicInput icon={loginIcon} alt="Email" name="Email"
                    type="text" modelValue={login} setValue={setLogin} />

                <PublicInput icon={passwordIcon} alt="Senha" name="Senha"
                    type="password" modelValue={password} setValue={setPassword} />


                <button type='button'>Login</button>

                <div className='link'>
                    <p> Não possui uma conta?</p>
                    <a> Faça seu cadastro agora!</a>
                </div>
            </form>
        </div>
    );
}