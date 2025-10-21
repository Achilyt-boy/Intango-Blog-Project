// Tab switching functionality
const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-tab")

    // Remove active class from all tabs and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabContents.forEach((content) => content.classList.remove("active"))

    // Add active class to clicked tab and corresponding content
    button.classList.add("active")
    document.getElementById(`${tabName}-tab`).classList.add("active")
  })
})

// Form submission handling
const articleForm = document.getElementById("article-form")

articleForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = {
    title: document.getElementById("article-title").value,
    content: document.getElementById("article-content").value,
    category: document.getElementById("category").value,
    timestamp: new Date().toISOString(),
  }

  console.log("[v0] Article submitted:", formData)

  // Show success message
  alert("Article submitted successfully! It will be reviewed by an admin before publication.")

  // Reset form
  articleForm.reset()

  // Update stats (in a real app, this would come from the server)
  updateStats()
})

// Update stats function (simulated)
function updateStats() {
  // In a real application, this would fetch data from a server
  // For now, we'll just increment the pending review count
  const pendingValue = document.querySelector(".stat-card.yellow .stat-value")
  const currentValue = Number.parseInt(pendingValue.textContent)
  pendingValue.textContent = currentValue + 1

  const totalValue = document.querySelector(".stat-card.blue .stat-value")
  const currentTotal = Number.parseInt(totalValue.textContent)
  totalValue.textContent = currentTotal + 1
}

// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})
