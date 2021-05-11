# zuri-simple-crud-app
A simple application to create, read, update and delete


## Link

[Link](https://zuri-simple-crud-app.herokuapp.com/)

  
## API Reference

#### Get all users

```http
  GET https://zuri-simple-crud-app.herokuapp.com/users
```
## Response

```javascript
{
    "message": "Profiles retrieved successfully",
    "data": [
        {
            "_id": "6099dd8a37c7b982c8881381",
            "name": "Adesoji Bello",
            "__v": 0
        },
        {
            "_id": "6099df66af7d808354faa058",
            "name": "Bidemi Ajala",
            "email": "pblead98@yahoo.com",
            "country": "nigeria",
            "__v": 0
        },
        {
            "_id": "609a549f3244a98e04fbd95b",
            "name": "Folake TIjani",
            "email": "oluwapelumibanjo@gmail.com",
            "country": "Turkey",
            "__v": 0
        }
    ]
}
```

#### Get user

```http
  GET https://zuri-simple-crud-app.herokuapp.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

## Response

```javascript
{
    "message": "Profile retrieved successfully",
    "data": {
        "_id": "6099df66af7d808354faa058",
        "name": "Bidemi Ajala",
        "email": "pblead98@yahoo.com",
        "country": "nigeria",
        "__v": 0
    }
}
```

#### Add new user

```http
  POST https://zuri-simple-crud-app.herokuapp.com/users/
```
## Request

```javascript
{
    "name": "Kolade Adeniji",
    "email": "morenike@gmail.com",
    "country": "Russia"
}
```

## Response

```javascript
{
    "message": "Profile created successfully",
    "data": {
        "_id": "609b071076debe001524f476",
        "name": "Kolade Adeniji",
        "email": "morenike@gmail.com",
        "country": "Russia",
        "__v": 0
    }
}
```

#### Update user

```http
  PUT https://zuri-simple-crud-app.herokuapp.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

## Request

```javascript
{
    "name": "Kolade Adeniji",
    "email": "morenikeji@gmail.com",
    "country": "Russia"
}
```

## Response

```javascript
{
    "message": "Profile updated successfully",
    "data": {
        "_id": "609b071076debe001524f476",
        "name": "Kolade Adeniji",
        "email": "morenike@gmail.com",
        "country": "Russia",
        "__v": 0
    }
}
```

#### Delete user

```http
  DELETE https://zuri-simple-crud-app.herokuapp.com/users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

## Response

```javascript
{
    "message": "Profile deleted successfully",
    "data": {
        "_id": "609b071076debe001524f476",
        "name": "Kolade Adeniji",
        "email": "morenikeji@gmail.com",
        "country": "Russia",
        "__v": 0
    }
}
```
  

  
## Tech Stack

**Server:** Node, Express, Mongo

  
  
## Run Locally

Clone the project

```bash
  git clone https://github.com/bayjoh/zuri-simple-crud-app.git
```

Go to the project directory

```bash
  cd zuri-simple-crud-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

  
