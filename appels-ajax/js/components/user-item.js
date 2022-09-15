export function UserItem(user) {
  return `<h1>${user.id} - ${user.name}</h1>
   <p>${user.email}</p>
    <p>${user.phone}</p>`;
}
