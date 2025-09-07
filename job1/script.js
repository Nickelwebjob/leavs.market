function openForm() {
  document.getElementById("buyForm").style.display = "flex";
}
function closeForm() {
  document.getElementById("buyForm").style.display = "none";
}

// Handle FAQ accordion
const faqs = document.querySelectorAll(".faq-container details");
faqs.forEach((faq) => {
  faq.addEventListener("toggle", function () {
    if (this.open) {
      faqs.forEach((other) => {
        if (other !== this) other.removeAttribute("open");
      });
    }
  });
});

// Handle form submit
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("thankYouMessage").textContent =
    "Thank you for ordering, " + name + "! 🎉";
  document.getElementById("buyForm").style.display = "none";
  document.getElementById("thankYouPopup").style.display = "flex";
});

function closeThankYou() {
  document.getElementById("thankYouPopup").style.display = "none";
}
document.querySelectorAll('img').forEach(img => {
  img.style.cursor = 'pointer';
  img.onclick = function() {
    document.getElementById('imageModal').style.display = 'block';
    document.getElementById('modalImg').src = this.src;
  }
});

function closeImageModal() {
  document.getElementById('imageModal').style.display = 'none';
}
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    alt_phone: document.getElementById("alt_phone").value,
    address: document.getElementById("address").value,
    quantity: document.getElementById("quantity").value
  };

  fetch("https://script.google.com/macros/s/AKfycbwbmBOC2GDoPzHBp6Hdfs6cJ6yaqeZlHzJbC7q6xsNqPcCWhO7DdYstvWLYuYLNqWSoiQ/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    document.getElementById("thankYouMessage").textContent =
      "Thank you for ordering, " + data.name + "! 🎉";
    document.getElementById("buyForm").style.display = "none";
    document.getElementById("thankYouPopup").style.display = "flex";
  })
  .catch(error => {
    alert("Something went wrong, please try again.");
    console.error(error);
  });
});
