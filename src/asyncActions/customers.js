export async function fetchCustomers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
