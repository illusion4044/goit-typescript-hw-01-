function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  

  const objA = {
    name: 'Alice',
    age: 30
  };
  
  const objB = {
    email: 'alice@example.com',
    isActive: true
  };
  
  const merged = merge(objA, objB);
  console.log(merged);