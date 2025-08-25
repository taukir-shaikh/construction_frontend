export const apiUrl = "http://localhost:8000/api/";
export const fieUrl = "http://localhost:8000/";
export const token = () => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo !== null) {
    return JSON.parse(userInfo).token;
  }
};
