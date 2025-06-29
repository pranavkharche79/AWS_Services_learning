// TODO: Replace with your actual GitHub repo info
const GITHUB_USER = "pranavkharche79";
const GITHUB_REPO = "AWS_Services_learning";
const BRANCH = "main";
// List of notes (add description and icon for each)
const notes = [
  {
    name: "EC2 Basics",
    file: "AWS_docs/ec2_basics.md",
    description: "Introduction to EC2, launching instances, and key concepts.",
    icon: "bi-cpu",
  },
  {
    name: "S3 Overview",
    file: "AWS_docs/s3_overview.md",
    description: "Understanding S3 buckets, storage classes, and lifecycle.",
    icon: "bi-hdd-network",
  },
  // Add more notes here
];
const notesGrid = document.getElementById("notes-grid");
notes.forEach((note) => {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";
  col.innerHTML = `
    <div class="card h-100 shadow-sm note-card">
      <div class="card-body d-flex flex-column">
        <div class="mb-3 text-center">
          <i class="bi ${note.icon} display-4 text-primary"></i>
        </div>
        <h5 class="card-title text-center">${note.name}</h5>
        <p class="card-text flex-grow-1">${note.description || ""}</p>
        <a href="https://github.com/${GITHUB_USER}/${GITHUB_REPO}/blob/${BRANCH}/${
    note.file
  }" target="_blank" class="btn btn-outline-light mt-auto">View on GitHub</a>
      </div>
    </div>
  `;
  notesGrid.appendChild(col);
});
