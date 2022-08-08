import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import './App.css';

function App() {


  //yup object significa que meu resultado do yup precisa ser um objeto
  const formSchema = yup.object({
    name: yup.string().max(18).required("Nome obrigatório"),
    email: yup.string().email("Isto não é um e-mail").required("E-mail obrigatório"),
    password: yup.string().min(8, "este campo deve ter ao menos 8 caracteres").required("Este campo é obrigatório"),
    confirm: yup.string().oneOf([yup.ref("password")], "a senha deve ser igual a anterior").required("este campo é obrigatório")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmitFunction = (data) => console.log(data)

  return (
    <div className="App">
      <h3>Formulário</h3>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" type="text" {...register("name")} />
        {errors.name?.message}
        <input placeholder="Email" type="text" {...register("email")}/>
        {errors.email?.message}
        <input placeholder="Senha" type="password" {...register("password")}/>
        {errors.password?.message}
        <input placeholder="Confirme a senha" type="password" {...register("confirm")}/>
        {errors.confirm?.message}
    
        <button type="submit">Enviar!</button>
      </form>
    </div>
  );
}

export default App;
