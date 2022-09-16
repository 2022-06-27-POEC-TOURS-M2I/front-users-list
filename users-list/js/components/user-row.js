export function UserRow(user) {
  const $userRow = document.createElement("tr");

  const $idColumn = document.createElement("td");
  $idColumn.innerText = user.id;

  const $nameColumn = document.createElement("td");
  $nameColumn.innerText = user.name;

  const $emailColumn = document.createElement("td");
  $emailColumn.innerText = user.email;

  const $phoneColumn = document.createElement("td");
  $phoneColumn.innerText = user.phone;

  const $websiteColumn = document.createElement("td");
  $websiteColumn.innerText = user.website;

  const $actionsColumn = document.createElement("td");
  const $viewDetails = document.createElement("a");
  $viewDetails.innerText = "Voir";
  $viewDetails.setAttribute("href", `/pages/users-details.html?id=${user.id}`);
  $actionsColumn.appendChild($viewDetails);
  $websiteColumn.innerText = user.website;

  $userRow.append(
    $idColumn,
    $nameColumn,
    $emailColumn,
    $phoneColumn,
    $websiteColumn,
    $actionsColumn
  );

  return $userRow;
}
