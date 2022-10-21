# Puppies API with Typescript and Express
The aim of this project was to create a REST API with Express and to get more familiar with Typescript in Node.js. The application supports the CRUD operations and is strongly types with TypeScript. 

___

## **Database** 
The database for this task is a simple in-memory store represented as a puppies object provided by the puppies.service module.
The puppies object implements the puppies.interface.

## **Puppy data model**
The puppy object implements the puppy.interface and has the following properties:
* id: (number)
* name: (string)
* breed: (string)
* description: (string)
* image: (string)

## **Endpoints**
- GET: `api/puppies`
- GET: `api/puppies/:id`
- POST: `api/puppies`
- PUT: `api/puppies/:id`
- DELETE: `api/puppies/:id`

___

## **Try it out** 
1. Clone the repo: https://github.com/Khabazbashi/PGP-TypeScript-API
2. Install dependencies: `npm i`
3. Create a file named .env: `touch .env`
4. Populate the .env file with the following: `PORT=7000`


### **Get a puppy**
```
curl http://localhost:7000/api/puppies/1
```

### **Get all puppies**
```
curl http://localhost:7000/api/puppies
```

### **Add a puppy**
```
curl -X POST -H 'Content-Type: application/json' -d '{
  "name": "Cookie",
  "breed": "Cocker spaniel",
  "description": "Cocker spaniels are known for being gentle, easy-going and affectionate yet lively.",
  "image": "https://media-be.chewy.com/wp-content/uploads/2021/05/05180433/Cocker-Spaniel_FeaturedImage.jpg"
}' http://localhost:7000/api/puppies
```

### **Delete a puppy**
```
curl -X DELETE http://localhost:7000/api/puppies/2
```