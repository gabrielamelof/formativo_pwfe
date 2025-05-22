import axios from 'axios';
//Faz a validação do que o usuário digitou antes de mandar para o back
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import estilos from './Login.module.css'

const schemaLogin = z.object ({
    username: z.string()
        .min(1, 'Informe o seu usuário')
        .max(30, "Informe no máximo 30 caracteres"),

    password: z.string()
        .min(1, 'Informe ao menos um caractere')
        .max(15, 'Informe no máximo 15 caracteres')

});


export function Login(){
    // registra todas as informações que são dadas pelo usuário e tenta resolver de acordo com o schema
    const{
        register,
        handleSubmit,
        formState: {errors}
    }=useForm(
        {resolver: zodResolver(schemaLogin)}
    );
    async function ObterDados(data){
        // Usar console.log apenas para fins de teste, nunca em produção
        console.log(`Dados: ${data}`)

        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username: data.username,
                password: data.password
            });
            const [access, refresh, user] = response.data;

            localStorage.setItem('access_token', access)
            localStorage.setItem('refresh_token', refresh)
            localStorage.setItem('tipo', user.tipo)
            localStorage.setItem('username', username)

            console.log("Login efetuado com sucesso")
        }catch(error){
            console.error('erro', error)
            alert("Dados inválidos")
        }
    }
    return(
        <div className={estilos.container}>
            <form onSubmit={handleSubmit(ObterDados)} className={estilos.loginForm}>

                <h2 className={estilos.titulo}>Login</h2>
                <label className={estilos.label}>Usuário</label>
                <input className={estilos.inputField}
                    {...register('username')}
                    placeholder='nomedeusuario'
                />
                {errors.username && <p className={estilos.error}>{errors.username.message}</p>}
                <label className={estilos.label}>Senha:</label>
                <input 
                    {...register('password')}
                    placeholder='Senha'
                    type='password' />
                {errors.password && <p className={estilos.error}>{errors.password.message}</p>}

                <button type='submit' className={estilos.submitButton}>Entrar</button>
            </form>
        </div>

    )
}