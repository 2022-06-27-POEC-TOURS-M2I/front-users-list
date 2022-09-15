const $userDetails = document.querySelector("#user-details");

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json())
  .then((user) => {
    $userDetails.innerHTML = `
      <h1>${user.id} - ${user.name}</h1>
   <p>${user.email}</p>
    <p>${user.phone}</p>
    `;
  });
