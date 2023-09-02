'use strict';

async function fetchData() {
  try {
    const response = await fetch('https://reqres.in/api/users/1');
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.error('Error', error);
  }
}
fetchData();
