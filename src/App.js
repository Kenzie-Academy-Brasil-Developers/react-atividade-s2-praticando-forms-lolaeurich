import * as yup from "yup"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import './App.css';

function App() {
 
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    cellphone: yup.string().required("Telefone obrigatório"),
    address: yup.string().required("Endereço obrigatório")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmitFunction = (data) => console.log(data)

  return (
    <div className="App">
      <h3>Formulário</h3>
      <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input placeholder="Nome" {...register("name")}/>
        {errors.name?.message}
        <input placeholder="Email" {...register("email")}/>
        {errors.email?.message}
        <input placeholder="Telefone" {...register("cellphone")}/>
        {errors.cellphone?.message}
        <input placeholder="Endereço" {...register("address")}/>
        {errors.address?.message}
        <button type="submit">Enviar!</button>
      </form>
    </div>
  );
}

export default App;
