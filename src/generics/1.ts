import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}

fetchData<User>('https://example.com/api/user')
  .then(user => {
    console.log(user.name); 
  })
  .catch(error => {
    console.error(error);
  });
