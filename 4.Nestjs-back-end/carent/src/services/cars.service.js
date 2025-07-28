export const getCars = async () => {
  const response = await fetch('http://localhost:3001/cars');
  return await response.json();
};