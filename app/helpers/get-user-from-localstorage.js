export function getUserFromLocalStorage() {
  const userFromStorage = localStorage.getItem('user');
  if (!userFromStorage) {
    console.error('User not found in localStorage');
  }
  const user = JSON.parse(userFromStorage);
  return user;
}
