# SmileLounge Backend: 

### Tech used: 
- [graphql](https://graphql.org/)
- [prisma](https://www.prisma.io/)
- [yoga](https://www.npmjs.com/package/graphql-yoga)
---
### Entry point: 
```
/src/index.js
```
- packages are brought in
- the database is connected
- user authentication is done
- express server is started

---
### db: 
```
/src/db.js
```
- packages are brought in
- a new prisma connection is made passed on properties passed in
- db is exported 

---
### createServer: 
```
/src/createServer.js
```
- packages are brought in
- a new graphql connection is made passed on properties passed in
- the server takes in Mutations and Queries defined in their respective directories. In graphql these individually exported Mutations and Queries are the equivalent of controller methods in an express enviroment.

---
### reslovers: 
```
/src/resolvers/...
```
- this directory contains the methods that will digest the incoming calls from the frontend `<Query />` and `<Mutation />` components
- A Mutation is anything that will effect the data: `POST PUT DELETE` 
- A Query method exclusively gets data

---
### schema.graphql: 
```
/src/schema.graphql
```
- This defines the methods that will be digested on the frontend
- uses a typed syntax





