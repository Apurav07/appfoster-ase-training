let table;
const show = (data) => {
  table.innerHTML = data
    .map(({id,name,email, gender,status}) => `<tr>
      <td colspan="3">${name} </td>
      <td><button class="more" data-id="${id}" data-name="${name}" data-email="${email}" data-gender="${gender}" data-status="${status}">View More</button></td>
      <tr hidden><td>${email}</td>
      <td>${gender}</td>
      <td>${status}</td>
      </tr>`)
    .join("");
};
const load = () => {
  fetch("https://gorest.co.in/public/v2/users")
    .then(result => result.json())
    .then(show);
};
window.addEventListener("DOMContentLoaded", () => {
  table = document.getElementById('table');
  table.addEventListener("click", (e) => {
    const tgt = e.target.closest("button");
    if (!tgt) return;
    const id = tgt.dataset.id;
    const name = tgt.dataset.name;
    const email = tgt.dataset.email;
    const gender = tgt.dataset.gender;
    const status = tgt.dataset.status;
    document.getElementById("modal-name").textContent = name;
    document.getElementById("modal-email").textContent = email;
    document.getElementById("modal-gender").textContent = gender;
    document.getElementById("modal-status").textContent = status;
    $('#myModal').modal('show');
  })
  load();
});
