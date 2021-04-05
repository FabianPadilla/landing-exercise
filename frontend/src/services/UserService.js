import Cookies from "universal-cookie";

class AuthService {
  async validateUser() {
    return await fetch("/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: this.getToken(),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((results) => {
        console.log(results);
        return results;
      })
      .catch((err) => {
        return err;
      });
  }

  getToken() {
    const cookies = new Cookies();
    return cookies.get("auth");
  }
}

export default new AuthService();
