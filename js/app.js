(function () {
  "use strict";

  const courses = {
    ite321: {
      code: "ITE 321",
      title: "System Analysis",
      instructor: "Susanta Malaka",
      email: "susanta@stamford.edu",
      schedule: "Mon/Thu 8:30-10:30",
      badge: "badge-primary",
      materials: [
        "Week 1: Requirement gathering slides",
        "Week 2: Use case diagram examples",
        "Week 3: System proposal template"
      ],
      assignments: [
        { id: "ite321-a1", name: "System Analysis Assignment", due: "Oct 12", status: "Pending" },
        { id: "ite321-q2", name: "Quiz 2 Reflection", due: "Submitted", status: "Submitted" }
      ],
      attendance: [
        ["Oct 2", "Present"],
        ["Oct 5", "Present"],
        ["Oct 9", "Late"],
        ["Oct 12", "Present"]
      ],
      attendanceRate: 92
    },
    ite101: {
      code: "ITE 101",
      title: "Fundamentals of Information Technology",
      instructor: "Dr. Lanka",
      email: "lanka@stamford.edu",
      schedule: "Tue/Fri 8:30-10:30",
      badge: "badge-info",
      materials: [
        "Computer hardware overview",
        "Networking basics handout",
        "Digital citizenship reading"
      ],
      assignments: [
        { id: "ite101-html", name: "HTML Basics", due: "Submitted", status: "Submitted" },
        { id: "ite101-project", name: "Website Design Project", due: "Oct 10", status: "Pending" }
      ],
      attendance: [
        ["Oct 3", "Present"],
        ["Oct 6", "Present"],
        ["Oct 10", "Present"],
        ["Oct 13", "Present"]
      ],
      attendanceRate: 100
    },
    ite120: {
      code: "ITE 120",
      title: "Web Development 1",
      instructor: "Dr. Amin",
      email: "amin@stamford.edu",
      schedule: "Mon/Thu 10:30-12:30",
      badge: "badge-success",
      materials: [
        "Responsive layout checklist",
        "Bootstrap component notes",
        "JavaScript DOM practice"
      ],
      assignments: [
        { id: "ite120-lab3", name: "Lab Assignment 3", due: "Submitted", status: "Submitted" },
        { id: "ite120-lab4", name: "Lab Assignment 4", due: "Oct 15", status: "Pending" }
      ],
      attendance: [
        ["Oct 2", "Present"],
        ["Oct 5", "Absent"],
        ["Oct 9", "Present"],
        ["Oct 12", "Present"]
      ],
      attendanceRate: 75
    },
    eng103: {
      code: "ENG 103",
      title: "College English 3",
      instructor: "Ms. Natalie Smith",
      email: "natalie.smith@stamford.edu",
      schedule: "Wed 9:00-12:00",
      badge: "badge-warning",
      materials: [
        "Academic essay structure guide",
        "Presentation language notes",
        "Research citation examples"
      ],
      assignments: [
        { id: "eng103-essay", name: "Argument Essay Draft", due: "Oct 17", status: "Pending" },
        { id: "eng103-presentation", name: "Group Presentation Outline", due: "Oct 24", status: "Pending" }
      ],
      attendance: [
        ["Oct 1", "Present"],
        ["Oct 8", "Present"],
        ["Oct 15", "Present"]
      ],
      attendanceRate: 100
    },
    mis103: {
      code: "MIS 103",
      title: "Computer Basics",
      instructor: "Mr. Kittipong S.",
      email: "kittipong@stamford.edu",
      schedule: "Tue 13:30-16:30",
      badge: "badge-secondary",
      materials: [
        "Operating system basics",
        "Office software practice sheet",
        "Computer security checklist"
      ],
      assignments: [
        { id: "mis103-office", name: "Spreadsheet Practice", due: "Oct 16", status: "Pending" },
        { id: "mis103-security", name: "Password Safety Quiz", due: "Submitted", status: "Submitted" }
      ],
      attendance: [
        ["Oct 7", "Present"],
        ["Oct 14", "Late"],
        ["Oct 21", "Present"]
      ],
      attendanceRate: 88
    },
    ite221: {
      code: "ITE 221",
      title: "Introduction to Java",
      instructor: "Dr. Chen Wei",
      email: "chen.wei@stamford.edu",
      schedule: "Fri 10:30-13:30",
      badge: "badge-danger",
      materials: [
        "Java syntax cheat sheet",
        "Variables and data types lab",
        "Object-oriented programming intro"
      ],
      assignments: [
        { id: "ite221-lab1", name: "Java Console Calculator", due: "Oct 18", status: "Pending" },
        { id: "ite221-oop", name: "Class and Object Practice", due: "Oct 25", status: "Pending" }
      ],
      attendance: [
        ["Oct 3", "Present"],
        ["Oct 10", "Present"],
        ["Oct 17", "Absent"]
      ],
      attendanceRate: 67
    }
  };

  function setYears() {
    document.querySelectorAll(".year").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  function initLogin() {
    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const button = document.getElementById("loginBtn");
    if (!form || !email || !password || !button) return;

    function validate() {
      const ready = email.value.trim() !== "" && password.value.trim() !== "";
      button.disabled = !ready;
      button.classList.toggle("disabled", !ready);
    }

    email.addEventListener("input", validate);
    password.addEventListener("input", validate);
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (button.disabled) return;
      sessionStorage.setItem("showLoginPopup", "true");
      window.location.href = "home.html";
    });
    validate();
  }

  function showLoginPopup() {
    if (document.body.dataset.page !== "home") return;
    if (sessionStorage.getItem("showLoginPopup") !== "true") return;
    sessionStorage.removeItem("showLoginPopup");

    const popup = document.createElement("div");
    popup.className = "modal fade";
    popup.id = "loginPopup";
    popup.tabIndex = -1;
    popup.setAttribute("role", "dialog");
    popup.setAttribute("aria-labelledby", "loginPopupTitle");
    popup.setAttribute("aria-hidden", "true");
    popup.innerHTML = [
      '<div class="modal-dialog modal-dialog-centered" role="document">',
      '  <div class="modal-content welcome-popup">',
      '    <button type="button" class="close popup-close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
      '    <img src="images/popup.png" class="img-fluid" alt="Welcome announcement">',
      '    <div class="modal-body">',
      '      <h5 id="loginPopupTitle" class="mb-2">Welcome back</h5>',
      '      <p class="mb-3 text-muted">Your student dashboard is ready.</p>',
      '      <button type="button" class="btn btn-primary btn-block" data-dismiss="modal">Continue</button>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join("");
    document.body.appendChild(popup);

    if (window.jQuery && window.jQuery.fn.modal) {
      window.jQuery(popup).modal("show");
    } else {
      popup.classList.add("show");
      popup.style.display = "block";
    }
  }

  function initCourseDetails() {
    if (document.body.dataset.page !== "courses") return;
    const buttons = document.querySelectorAll("[data-course-button]");
    const search = document.getElementById("courseSearch");
    const courseItems = document.querySelectorAll(".course-item");
    if (!buttons.length) return;

    function assignmentIsDone(item) {
      return item.status === "Submitted" || localStorage.getItem("assignment:" + item.id) === "done";
    }

    function renderCourse(courseKey) {
      const course = courses[courseKey] || courses.ite321;
      document.getElementById("courseCode").textContent = course.code;
      document.getElementById("courseCode").className = "badge mb-2 " + course.badge;
      document.getElementById("courseTitle").textContent = course.title;
      document.getElementById("courseMeta").textContent = course.instructor + " - " + course.schedule;
      document.getElementById("courseEmail").href = "mailto:" + course.email;

      document.getElementById("materialsList").innerHTML = course.materials.map(function (item) {
        return '<li class="list-group-item d-flex align-items-center"><i class="fa-regular fa-file-lines text-primary mr-2"></i>' + item + '</li>';
      }).join("");

      document.getElementById("assignmentList").innerHTML = course.assignments.map(function (item) {
        const done = assignmentIsDone(item);
        const badge = done ? "badge-success" : "badge-warning";
        const label = done ? "Submitted" : "Due: " + item.due;
        const button = done ? "" : '<button class="btn btn-sm btn-outline-success" type="button" data-complete-assignment="' + item.id + '">Mark Complete</button>';
        return '<div class="list-group-item d-flex justify-content-between align-items-center flex-wrap"><div><strong>' + item.name + '</strong><div><span class="badge ' + badge + '">' + label + '</span></div></div>' + button + '</div>';
      }).join("");

      document.getElementById("attendanceRate").textContent = course.attendanceRate + "%";
      const bar = document.getElementById("attendanceBar");
      bar.style.width = course.attendanceRate + "%";
      bar.setAttribute("aria-valuenow", String(course.attendanceRate));
      bar.className = "progress-bar " + (course.attendanceRate >= 85 ? "bg-success" : course.attendanceRate >= 75 ? "bg-warning" : "bg-danger");
      document.getElementById("attendanceList").innerHTML = '<table class="table table-sm table-striped mb-0"><thead><tr><th>Date</th><th>Status</th></tr></thead><tbody>' + course.attendance.map(function (row) {
        return "<tr><td>" + row[0] + "</td><td>" + row[1] + "</td></tr>";
      }).join("") + "</tbody></table>";

      buttons.forEach(function (button) {
        button.classList.toggle("active", button.dataset.courseButton === courseKey);
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        renderCourse(button.dataset.courseButton);
      });
    });

    document.addEventListener("click", function (event) {
      const target = event.target.closest("[data-complete-assignment]");
      if (!target) return;
      localStorage.setItem("assignment:" + target.dataset.completeAssignment, "done");
      const active = document.querySelector("[data-course-button].active");
      renderCourse(active ? active.dataset.courseButton : "ite321");
    });

    if (search) {
      search.addEventListener("input", function () {
        const term = search.value.trim().toLowerCase();
        courseItems.forEach(function (item) {
          item.classList.toggle("d-none", term && !item.dataset.search.includes(term));
        });
      });
    }

    const selected = new URLSearchParams(window.location.search).get("course") || "ite321";
    renderCourse(courses[selected] ? selected : "ite321");
  }

  function initEventFilter() {
    const controls = document.querySelectorAll(".event-filter [data-filter]");
    const cards = document.querySelectorAll(".event-card");
    if (!controls.length) return;
    controls.forEach(function (button) {
      button.addEventListener("click", function () {
        const filter = button.dataset.filter;
        controls.forEach(function (control) {
          control.classList.toggle("active", control === button);
          control.classList.toggle("btn-primary", control === button);
          control.classList.toggle("btn-outline-primary", control !== button);
        });
        cards.forEach(function (card) {
          card.classList.toggle("d-none", filter !== "all" && card.dataset.category !== filter);
        });
      });
    });
  }

  function initContactForm() {
    const form = document.querySelector("#contactForm form");
    if (!form) return;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
      }
      form.reset();
      form.classList.remove("was-validated");
      const alert = document.createElement("div");
      alert.className = "alert alert-success mt-3";
      alert.textContent = "Message sent successfully. The support team will reply by email.";
      form.appendChild(alert);
      setTimeout(function () { alert.remove(); }, 4000);
    });
  }

  function initProfileEditor() {
    const button = document.getElementById("editProfileBtn");
    const name = document.getElementById("profileName");
    const email = document.getElementById("profileEmail");
    if (!button || !name || !email) return;

    const savedName = localStorage.getItem("profileName");
    const savedEmail = localStorage.getItem("profileEmail");
    if (savedName) name.textContent = savedName;
    if (savedEmail) email.textContent = savedEmail;

    button.addEventListener("click", function () {
      const nextName = window.prompt("Student name", name.textContent.trim());
      if (nextName === null || nextName.trim() === "") return;
      const nextEmail = window.prompt("Student email", email.textContent.trim());
      if (nextEmail === null || nextEmail.trim() === "") return;
      name.textContent = nextName.trim();
      email.textContent = nextEmail.trim();
      localStorage.setItem("profileName", nextName.trim());
      localStorage.setItem("profileEmail", nextEmail.trim());
    });
  }
  function initSuppliesStore() {
    if (document.body.dataset.page !== "supplies") return;
    const filterButtons = document.querySelectorAll("[data-supply-filter]");
    const supplyItems = document.querySelectorAll(".supply-item");
    const addButtons = document.querySelectorAll("[data-add-item]");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    const cartCount = document.getElementById("cartCount");
    const checkoutBtn = document.getElementById("checkoutBtn");
    const clearCartBtn = document.getElementById("clearCartBtn");
    let cart = JSON.parse(localStorage.getItem("suppliesCart") || "[]");

    function money(value) {
      return "THB " + value.toLocaleString("en-US");
    }

    function saveCart() {
      localStorage.setItem("suppliesCart", JSON.stringify(cart));
    }

    function renderCart() {
      const total = cart.reduce(function (sum, item) { return sum + item.price; }, 0);
      cartCount.textContent = String(cart.length);
      cartTotal.textContent = money(total);
      checkoutBtn.disabled = cart.length === 0;
      if (!cart.length) {
        cartItems.className = "cart-items text-muted mb-3";
        cartItems.textContent = "No items added yet.";
        return;
      }
      cartItems.className = "cart-items mb-3";
      cartItems.innerHTML = cart.map(function (item, index) {
        return '<div class="cart-row"><span>' + item.name + '</span><strong>' + money(item.price) + '</strong><button class="btn btn-sm btn-link text-danger" type="button" data-remove-cart="' + index + '">Remove</button></div>';
      }).join("");
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const filter = button.dataset.supplyFilter;
        filterButtons.forEach(function (control) {
          const active = control === button;
          control.classList.toggle("active", active);
          control.classList.toggle("btn-primary", active);
          control.classList.toggle("btn-outline-primary", !active);
        });
        supplyItems.forEach(function (item) {
          item.classList.toggle("d-none", filter !== "all" && item.dataset.category !== filter);
        });
      });
    });

    addButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        cart.push({
          name: button.dataset.addItem,
          price: Number(button.dataset.price)
        });
        saveCart();
        renderCart();
      });
    });

    document.addEventListener("click", function (event) {
      const removeButton = event.target.closest("[data-remove-cart]");
      if (!removeButton) return;
      cart.splice(Number(removeButton.dataset.removeCart), 1);
      saveCart();
      renderCart();
    });

    clearCartBtn.addEventListener("click", function () {
      cart = [];
      saveCart();
      renderCart();
    });

    checkoutBtn.addEventListener("click", function () {
      if (!cart.length) return;
      alert("Order request submitted. Please pick up and pay at the campus store.");
      cart = [];
      saveCart();
      renderCart();
    });

    renderCart();
  }

  document.addEventListener("DOMContentLoaded", function () {
    setYears();
    initLogin();
    showLoginPopup();
    initCourseDetails();
    initEventFilter();
    initContactForm();
    initProfileEditor();
    initSuppliesStore();
    if (window.jQuery && window.jQuery.fn.carousel) {
      window.jQuery(".carousel").carousel();
    }
  });
})();



