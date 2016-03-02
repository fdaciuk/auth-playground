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

Sending `username` and `password` on body.

**Curl example:**

```console
curl -H 'Content-Type: application/json' -X POST -d '{"username": "yourusername", "password": "123"}' http://0.0.0.0:8080/api/users
```

---

**Login:**

```console
POST http://0.0.0.0:8080/api/login
```

Sending `username` and `password` on body.

**Curl example:**

```console
curl -H 'Content-Type: application/json' -X POST -d '{"username": "yourusername", "password": "123"}' http://0.0.0.0:8080/api/login
```

---

**Get users:**

```console
GET http://0.0.0.0:8080/api/users
```

Sending `x-access-token` on header, passing the token received on login.

**Curl example:**

```console
curl -H 'x-access-token: <token>' -X GET http://0.0.0.0:8080/api/users
```

