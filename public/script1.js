    // Get the necessary elements
    const openFormBtn = document.getElementById("open-form-btn");
    const closeBtn = document.getElementById("close-btn");
    const formPopup = document.getElementById("form-popup");

    // Function to open the form
    function openForm() {
      formPopup.style.display = "flex";
    }

    // Function to close the form
    function closeForm() {
      formPopup.style.display = "none";
    }

    // Add event listeners
    openFormBtn.addEventListener("click", openForm);
    closeBtn.addEventListener("click", closeForm);

 


