import { createFunctUser } from "../api/apiUser";
import Swal from "sweetalert2";

export const sendData = async (state, option, _id) => {
  let resultado;
  switch (option) {
    case 1:
      resultado = await createFunctUser({
        idFunction: state.idFunction.idFunction, 
  });
      if (resultado) {
        Swal.fire({
          icon: "success",
          title: "nice!",
          text: "This function was added!",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/functionsUser";
          } else {
            window.location.href = "/home";
          }
        });
      }
      break;
  }
};