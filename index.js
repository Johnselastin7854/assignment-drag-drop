// //Selecting Elements
// const boxes = document.querySelectorAll(".box");
// const image = document.querySelector(".image");
// const button = document.querySelector(".btn");

// //Loop through each boxes element
// boxes.forEach((box) => {
//   //When a draggable element dragged over a box element
//   box.addEventListener("dragover", (e) => {
//     //Prevent default behaviour
//     e.preventDefault();
//     box.classList.add("hovered");
//   });

//   //When a draggable element leaves box element
//   box.addEventListener("dragleave", () => {
//     box.classList.remove("hovered");
//   });

//   //When a draggable element is dropped on a box element
//   box.addEventListener("drop", () => {
//     box.appendChild(image);
//     box.classList.remove("hovered");
//   });
// });

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   boxes[1].innerHTML = "";
//   boxes[0].style.backgroundImage =
//     "url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80')";
//   boxes[0].style.backgroundSize = "cover";
//   boxes[0].style.backgroundPosition = "center";
// });

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var draggedImage = document.getElementById("draggable-image");
  event.target.appendChild(draggedImage);
  showSuccessMessage();
}

function showSuccessMessage() {
  var successMessage = document.createElement("p");
  successMessage.classList.add("success-message");
  successMessage.textContent = "Image dropped successfully!";
  document.body.appendChild(successMessage);

  setTimeout(() => {
    successMessage.textContent = "";
  }, 2000);
}

function resetImage() {
  var firstContainer = document.getElementById("first-container");
  var secondContainer = document.getElementById("second-container");
  var draggedImage = secondContainer.querySelector("img");
  if (draggedImage) {
    firstContainer.appendChild(draggedImage);
  }
}
