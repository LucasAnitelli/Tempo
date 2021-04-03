import axios from "axios";

//https://api.hgbrasil.com/weather?key=ef141f3f&lat=-23.682&lon=-46.875

export const key = "ef141f3f";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;
