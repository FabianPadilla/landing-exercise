import Cookies from "universal-cookie";

class AuthService {
  async login(email, password) {
    const cookies = new Cookies();
    var fecha = new Date();
    fecha.setHours(fecha.getHours() + 8); //fecha de expiracion de la cookie 8h
    const data = {
      Email: email,
      Password: password,
    };
    return await fetch("/api/auth/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        var authorization = res.headers.get("authorization");
        authorization &&
          cookies.set("auth", authorization, { path: "/", expires: fecha });

        return res.json();
      })
      .then((results) => {
        return results;
      })
      .catch((err) => {
        return err;
      });
  }

  async signup(email, password, firsName, lastName) {
    const cookies = new Cookies();
    var fecha = new Date();
    fecha.setHours(fecha.getHours() + 8);
    const data = {
      Email: email,
      Password: password,
      FirsName: firsName,
      LastName: lastName,
    };
    return await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        var authorization = res.headers.get("authorization");
        authorization &&
          cookies.set("auth", authorization, { path: "/", expires: fecha });
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

  logout() {
    const cookies = new Cookies();
    cookies.remove("auth");
    console.log("cookie eliminada");
  }

  getToken() {
    const cookies = new Cookies();
    return cookies.get("auth");
  }
}

export default new AuthService();
