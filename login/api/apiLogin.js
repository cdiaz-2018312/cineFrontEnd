import axios from "axios";
import Swal from "sweetalert2";

export const apiLogin = async (email, password) => {
  try {
    const URL = "http://localhost:8080/api/auth/login";

    const response = await axios.post(URL, {
      email,
      password,
    });

    const token = response.data.token;

    token ? localStorage.setItem("token", token) : null;

    return token;
  } catch ({
    response: {
      data: { message },
    },
  }) {
    Swal.fire({
      icon: "error",
      title: "Informacion Incorrecta",
      text: "Correo o Password Incorrectos",
      confirmButtonText: "Ok",
    });
  }
};
