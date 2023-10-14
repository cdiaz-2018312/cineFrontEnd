import { createUser } from "../api/apiUsers";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createUser({
        name: state.user.name, 
        surname: state.user.surname,
        email: state.user.email,
        password: state.user.password,
        cellphone: state.user.celular,
        
  });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "Nice!",
          text: "user created!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/home";
          } else {
            window.location.href = "/home";
          }
        });
      }
      break;
    
  }
};

export const isUserAuthenticated = () => {
  if (localStorage.getItem('token')) {
      return true;
  }
  return false;
}

