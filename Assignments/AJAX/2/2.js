'use strict';

async function createUser() {
  try {
    const userData = {
      name: 'John Doe',
      job: 'Developer',
    };

    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.status === 201) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

createUser();
