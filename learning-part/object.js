/*
# 📦 JavaScript Objects (Short Notes)

## 🔹 Object kya hota hai?

* Object = key-value pairs ka collection
* Real world data represent karta hai

```js
let person = {
  name: "vikas",
  age: 20
};
```

---

## 🔹 Access Properties

```js
person.name        // dot notation
person["age"]      // bracket notation
```

---

## 🔹 Add / Update / Delete

```js
person.city = "Delhi";   // add
person.age = 25;         // update
delete person.city;      // delete
```

---

## 🔹 Methods (function inside object)

```js
let obj = {
  name: "vikas",
  greet: function(){
    console.log("Hello");
  }
};

obj.greet();
```

---

## 🔹 this keyword

```js
let obj = {
  name: "vikas",
  greet: function(){
    console.log(this.name);
  }
};
```

👉 `this` = current object

---

## 🔹 Loop (for...in)

```js
for(let key in obj){
  console.log(key);        // key
  console.log(obj[key]);   // value
}
```

---

## 🔹 Important Methods

```js
Object.keys(obj);    // keys
Object.values(obj);  // values
Object.entries(obj); // key-value pair
```

---

## 🔹 Nested Object

```js
let user = {
  name: "vikas",
  address: {
    city: "Delhi"
  }
};

user.address.city;
```

---

## 🔹 Important Points

* Keys unique hoti hain
* Values kisi bhi type ki ho sakti hain
* Object unordered hota hai

---

## 🧠 Trick

👉 Object = real world entity (user, car, student)

*/

// let person = {
//     name : " vikas",
//     age : 20
// }

// console.log(person["age"]);

// person.city = "bhiwani";
// person.name = "vishal"

// console.log(person);

// delete person.age;

// console.log(person);

// let person = {
//     name: "vikas",
//     greet : function(){
//         console.log("hy", this.name);
        
//     }
// }
// person.greet();




