import axios from "axios";
import Swal from "sweetalert2";

const token = localStorage.getItem("token");
const URL = "http://localhost:8080/api/user/";

export const apiFunctsById = async () => {
    try {
      const listFunctions = await axios.get(`${URL}getFunctUser`, {headers:{'x-token': token}});
      console.log(listFunctions.data);
      return listFunctions.data.userWithFuncts;
    } catch (error) {
      console.log(error);
    }
  };

  export const createFunctUser = async ({
    idFunction
  }) => {
  
    try {
      const response = await axios.post(
        `${URL}postFunctUser`,
        {
          idFunction: idFunction
        },
        { headers: { "x-token": token } }
      );
      
      return true;
    } catch ({ response: { data: {msg} } }) {
      Swal.fire({
        icon: "error",
        title: "We have an Error",
        text: "cannot add this funct",
      });
    }
  };

