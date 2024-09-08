
import "./style.css";

const fetchBtn = document.querySelector("#fetchBtn");
const taskTable = document.querySelector("#taskTable");

// Function to create the table headers
const createTableHeader = () => {
  const headerRow = document.createElement("tr");

  headerRow.innerHTML = `
    <th class="px-2 py-2  border-b bg-blue-500  text-start">Title</th>
    <th class="px-4 py-2  border-b bg-blue-500  text-start">Description</th>
    <th class="px-4 py-2 border-b  bg-blue-500  text-start">Status</th>
  `;

  taskTable.append(headerRow);
};
const tabelCap = () => {
  const headerRow = document.createElement("div");

  headerRow.innerHTML = `<caption class="caption-top border-none">
    Table 3.1: Professional wrestlers and their signature moves.
  </caption>`;
  taskTable.append(headerRow);
}

const showTable = (data) => {
  // Clear the table before adding new rows
  taskTable.innerHTML = "";
  // tabelCap();

  // Add the table headers
  createTableHeader();

  // Add the table rows
  data.map((task) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td  class=" px-4 py-2 text-sm border-b cursor-pointer duration-200">${task.title}</td>
      <td class="px-4 py-2 text-sm border-b cursor-pointer duration-200">${task.description}</td>
      <td class="px-4 py-2 text-sm border-b cursor-pointer duration-200">${task.status}</td>`;
    
    taskTable.append(row);
  });
};

const handleFetchBtn = () => {
  console.log("clicked");

  fetch("http://localhost:5000/tasks")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showTable(data);
    });
};

fetchBtn.addEventListener("click", handleFetchBtn);


// const fetchBtn = document.querySelector("#fetchBtn");
// const taskTable = document.querySelector("#taskTable");

// const showTable = (data) => {
//   data.map((task) => {
//     const row = document.createElement("tr");
    

//     row.innerHTML = `
//     <td class="px-4 py-2 text-sm border-b">${task.title}</td> 
//     <td class="px-4 py-2 text-sm border-b">${task.description}</td>
//     <td class="px-4 py-2 text-sm border-b">${task.status}</td>`;
//     taskTable.append(row);
//   });
// };

// const handleFetchBtn = () => {
//   console.log("clicked");

//   // fetch("http://localhost:5000/tasks")
//   // .then((res) => res.text() )
//   // .then((data) => {
//   //   console.log(typeof data)
//   //   // json string -> js object
//   //   console.log(JSON.parse(data))
//   // })

//   fetch("http://localhost:5000/tasks")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       showTable(data);
//     });
// };

// fetchBtn.addEventListener("click", handleFetchBtn);
