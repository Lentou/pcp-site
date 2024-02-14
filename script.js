// Define staff data
const staffs = [
  {
    name: "Lentou",
    role: "Game Admin",
    description: "known as Lentou, a Content Creator, Computer Enthusiast, IT Specialist and Programmer in the Philippines.",
    icon: "imgs/lentou.png",
    color: "rgb(227, 71, 71)",
    width: "100px"

  },
  {
    name: "EXWAYZI",
    role: "Game Master",
    description: "",
    icon: "imgs/exwayzi.png",
    color: "rgb(158, 45, 192)",
    width: "130px"
  }
  
  // Add more staff objects here
];

let currentIndex = 0;
let nextIndex = "";
let prevIndex = "";
// Function to update staff information
function updateStaffInfo() {
  let dd = document.getElementById("staff-role").textContent
  const staff = staffs[currentIndex];
  const staffsElement = document.querySelector(".staffs");

  staffsElement.classList.add("fade-out");

  setTimeout(() => {
 

   console.log(nextIndex)
    document.querySelector(".ico").src = staff.icon;
    document.getElementById("staff-name").textContent = staff.name;
    document.getElementById("staff-role").textContent = staff.role;
    document.getElementById("staff-desc").textContent = staff.description;
    document.getElementById("rl").style.backgroundColor = staff.color;
    
    document.getElementById("rl").style.width = staff.width;
    

    staffsElement.classList.remove("fade-out");
  }, 500);
}

// Function to show next staff
function nextStaff() {
  currentIndex++;
  if (currentIndex >= staffs.length) {
    currentIndex = 0;
  }
  updateStaffInfo();
  nextIndex = document.getElementById("staff-role").textContent
}

// Function to show previous staff
function prevStaff() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = staffs.length - 1;
  }
  updateStaffInfo();
  prevIndex = document.getElementById("staff-role").textContent
}

// Initialize staff information
updateStaffInfo();
