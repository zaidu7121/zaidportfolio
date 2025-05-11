// Typing Animation
const text = "QA | Manual & Automation Test Engineer";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typed-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 70);
    } else {
        // Wait before clearing and restarting
        setTimeout(() => {
            document.getElementById("typed-text").textContent = "";
            index = 0;
            typeText();
        }, 2000); // Pause for 2 seconds before repeating
    }
}

window.onload = typeText;

// Scroll Reveal Animation
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".reveal");
    for (let section of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    }
});

// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", function () {
    // Select all project items
    const projects = document.querySelectorAll('.project');

    // Loop through each project item
    projects.forEach(project => {
        // Add mouseover event to apply scaling effect
        project.addEventListener('mouseover', function () {
            project.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
            project.style.transform = 'scale(1.05)'; // Scale effect
        });

        // Add mouseout event to reset the scaling
        project.addEventListener('mouseout', function () {
            project.style.transform = 'scale(1)'; // Reset scale to original size
        });
    });

    // Clone header social icons to footer
    const socialIcons = document.querySelector('.social-icons');
    const footerSocialIconsContainer = document.getElementById('footer-social-icons');
    const clonedSocialIcons = socialIcons.cloneNode(true);
    footerSocialIconsContainer.appendChild(clonedSocialIcons);

    // Smooth scroll for internal links, skip download links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const isDownload = this.hasAttribute('download');
            const href = this.getAttribute('href');

            if (!isDownload && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const target = document.getElementById(targetId);
                const offset = 70;

                if (target) {
                    const topPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                    window.scrollTo({ top: topPosition, behavior: 'smooth' });
                }
            }
        });
    });
});

// Navbar color change on scroll
window.onscroll = function () {
    changeNavbarColor();
};

function changeNavbarColor() {
    const navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}
function downloadAndOpenPDF() {
  const fileUrl = 'assets/MD.ZAID QA.pdf'; // Adjust path if needed

  // Create a hidden link to trigger the download
  const downloadLink = document.createElement('a');
  downloadLink.href = fileUrl;
  downloadLink.download = 'Md_Zaid_Resume.pdf'; // Optional custom name
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Delay and open the PDF in a new tab
  setTimeout(() => {
    window.open(fileUrl, '_blank');
  }, 1000); // Delay 1 second to let download start
}
// Adding animation on hover using JavaScript
document.querySelectorAll('.hover-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.1)';
    item.style.color = '#3498db'; // Change color on hover
  });

  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
    item.style.color = '#333'; // Reset color on hover out
  });
});
