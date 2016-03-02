# Hello JWT

## Up and running

```console
npm i
npm start
```

## Routes

**Create user:**

```console
POST http://0.0.0.0:8080/api/users
```

Sending `username` and `password` on body

---

**Login:**

```console
POST http://0.0.0.0:8080/api/login
```

Sending `username` and `password` on body

---

**Get users:**

```console
GET http://0.0.0.0:8080/api/users
```

Sending `x-access-token` on header, passing the token received on login.

