// api_userRegister.js
import axios from "axios";

const postAgendamento = async (data) => {
  try {
    const response = await axios.post(`http://127.0.0.1:800/todo_outer/agendamento/`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("ERRO: ", error);
    throw error;
  }
};

export default postAgendamento;