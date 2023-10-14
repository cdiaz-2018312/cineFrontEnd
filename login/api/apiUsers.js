import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/user/";

export const apiUsuarioById = async () => {
  try {
    const listaUsuario = await axios.get(`${URL}getById`, {headers:{'x-token': token}});
    console.log(listaUsuario.data);
    return listaUsuario.data.UserId;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async ({
  name,
  surname,
  email,
  password,
 cellphone
}) => {
  try {
    const response = await axios.post(
      `${URL}postUser`,
      {
        name: name,
        surname: surname,
        email: email,
        password: password ,
        cellphone: cellphone,
      }
    );
    
    return true;
  } catch ({ response: { data: {msg} } }) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: msg,
    });
  }
};