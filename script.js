/* Change this profile once to update repeated contact and social details. */
const profile = {
  name: "B Sujal",
  role: "Computer Science Student & Full-Stack Developer",
  email: "b.sujal@gmail.com",
  phone: "+91 90000 00000",
  location: "Vellore, Tamil Nadu, India",
  github: "https://github.com/sujal-2512",
  linkedin: "https://www.linkedin.com/in/banisetti-sujal-738923442?trk=contact-info"
};

const projects = [
  {id:"hostel",number:"01",category:"WEB DEVELOPMENT / BACKEND",filters:["web"],title:"Smart Hostel Management System",summary:"A centralized hostel platform that makes maintenance requests easier to submit, prioritize, and resolve.",feature:"Student complaints · Admin triage · Status tracking",technologies:["Java","Spring Boot","Spring Security","MySQL","JPA / Hibernate","Maven","HTML · CSS · JS","BCrypt","REST APIs"],overview:"A supporting academic prototype for clearer communication between hostel residents and wardens. Students can report issues such as cleaning, carpenter, electrical, plumbing, or other maintenance needs.",problem:"Requests made through informal channels can be difficult to prioritize, follow up, or track to resolution.",solution:"A single place for students to submit categorized complaints and for wardens or administrators to review and manage them.",features:["Categorized maintenance complaint submission","Admin view to review and set priority","Remarks and status updates: Pending, In Progress, Resolved","Progress visibility for submitted requests"],workflow:"Student submits a complaint → warden reviews and assigns priority → status and remarks are updated → student can follow progress.",future:"Notifications, analytics on recurring issues, and improved mobile-first request tracking."},
  {id:"lost-found",number:"02",category:"WEB DEVELOPMENT",filters:["web"],title:"Lost and Found Matcher",summary:"A campus-oriented reporting and discovery system that helps reunite students with lost belongings.",feature:"Lost & found listings · Search · Claim workflow",technologies:["Python","Flask","MySQL","HTML","CSS","JavaScript"],overview:"A campus resource for recording lost and found items, browsing reports, and coordinating a safe claim with the person who reported an item.",problem:"When an item is misplaced on campus, reports may be scattered across noticeboards or group chats and are easy to miss.",solution:"Organize reports by item details and category, then help students search for possible matches and contact the reporter.",features:["Submit lost or found item reports","Include descriptions and organize by category","Search listings for possible matches","Coordinate a claim and contact workflow"],workflow:"A student posts a lost or found report → listings are categorized and searchable → a possible match is identified → the parties coordinate a claim.",future:"More nuanced matching suggestions and moderation tools. The current concept does not claim AI-based matching."},
  {id:"food",number:"03",category:"CLOUD / WEB DEVELOPMENT",filters:["web","cloud"],title:"Cloud-Based Leftover Food Redistribution System",summary:"A cloud-oriented concept connecting sources of surplus food with people and organizations able to use it.",feature:"Food listings · Availability details · Redistribution tracking",technologies:["Python","Flask","MySQL","HTML","CSS","JavaScript"],overview:"A web system concept intended to make surplus food visible and easier to redistribute through timely listings and recipient coordination.",problem:"Good food can go unused when potential recipients do not know what is available or how long it will remain safe to collect.",solution:"Let donors list food with quantity and availability details so recipients can express interest and coordinate redistribution.",features:["Create listings with quantity and availability","Show donor and food details","Allow recipient interaction","Track listing and redistribution progress"],workflow:"Food donor → food listing → availability and details → recipient or organization → redistribution.",future:"A deployed version could explore cloud hosting, location-based discovery, and notification workflows. This portfolio describes a cloud-oriented concept and does not claim specific cloud services were deployed."},
  {id:"revocacred",number:"04",category:"BLOCKCHAIN CONCEPT / BACKEND / RESEARCH",filters:["blockchain"],title:"RevocaCred — Academic Credential Verification",summary:"A research-oriented prototype exploring reliable digital credential checks, authorization, and revocation concepts.",feature:"Digital credentials · JWT authorization · Revocation concepts",technologies:["Java","Spring Boot","Spring Web","Spring Security","JWT","Spring Data JPA","Hibernate","Maven"],overview:"A supporting prototype and research concept for checking the validity and status of academic digital credentials through a secured application flow.",problem:"Manual certificate checks can be slow and difficult to standardize, while credential status changes need a clear way to be represented.",solution:"Explore digital credential records, secure authentication, JWT-based authorization, and credential status or revocation concepts in a demonstrator.",features:["Represent digital credential information","Secure access with authentication and JWT-based authorization","Model credential status and revocation","Explore adaptive checkpoint concepts"],workflow:"Authenticated user submits verification details → prototype checks credential record and status → result is returned with its current state.",future:"Evaluate interoperable credential formats and decentralized verification as research directions. The prototype does not store information on Ethereum or claim a blockchain implementation."},
  {id:"segmentation",number:"05",category:"DATA SCIENCE / MACHINE LEARNING",filters:["data"],title:"Bank Customer Segmentation",summary:"A data mining study grouping customers into meaningful segments based on characteristics and behavior.",feature:"Exploratory analysis · K-Means · DBSCAN · Cluster interpretation",technologies:["Python","Pandas","NumPy","Matplotlib","Scikit-learn","Jupyter Notebook"],overview:"An academic exploration of customer data using unsupervised learning to identify groups that can be interpreted and visualized.",problem:"A single view of a diverse customer base can hide distinct patterns in customer characteristics and behavior.",solution:"Prepare and explore data, select useful features, apply clustering, and interpret the resulting customer groups.",features:["Data preprocessing and exploratory analysis","Feature selection","K-Means clustering","DBSCAN density-based clustering","Visualize and interpret clusters"],workflow:"Data → preprocessing → exploratory analysis and feature selection → clustering → cluster interpretation and visualization. DBSCAN can identify dense groups as well as noise or outliers.",future:"Compare cluster stability and test alternative feature scaling and evaluation approaches."},
  {id:"medical-risk",number:"06",category:"ARTIFICIAL INTELLIGENCE / MACHINE LEARNING",filters:["ai","data"],title:"AI-Based Medical Risk Prediction",summary:"An academic machine-learning prototype exploring how input parameters can be used to estimate potential health risks.",feature:"Data preprocessing · Feature processing · Model prediction",technologies:["Python","Pandas","NumPy","Scikit-learn","Machine Learning","Data Visualization"],overview:"A learning project demonstrating a data pipeline from medical input parameters to a model-generated risk estimate, with results presented for educational exploration.",problem:"Structured health-related data can be difficult to interpret without a repeatable preprocessing and analysis workflow.",solution:"Prepare sample data, process selected features, and apply a machine-learning model to produce a prototype risk prediction.",features:["Preprocess academic or sample medical data","Process selected input features","Run a machine-learning model","Visualize and interpret output"],workflow:"Medical data → preprocessing → feature processing → machine-learning model → risk prediction → result and interpretation.",future:"Evaluate on well-documented datasets, improve interpretability, and assess limitations with expert guidance. This is an academic prototype, not a clinically validated diagnostic system."}
];

document.addEventListener("DOMContentLoaded", () => {
  const gmailIcon = '<svg class="gmail-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M3 7.2V18a2 2 0 0 0 2 2h2V9.1L3 6.4v.8Z"/><path fill="#34A853" d="M17 9.1V20h2a2 2 0 0 0 2-2V7.2c0-.3 0-.5-.1-.8L17 9.1Z"/><path fill="#FBBC04" d="M3 7.2v1.1l4 3V9.1L3 6.4v.8Z"/><path fill="#EA4335" d="M3 6.4 12 13l9-6.6a2 2 0 0 0-2.8-1.8L12 9.4 5.8 4.6A2 2 0 0 0 3 6.4Z"/><path fill="#C5221F" d="M17 9.1v2.2l4-3V6.4l-4 2.7Z"/><path fill="#C5221F" d="M3 7.2v1.1l4 3V9.1L3 6.4v.8Z"/></svg>';
  document.querySelectorAll("[data-email]").forEach(link => {
    link.href = `mailto:${profile.email}`;
    const detailIcon = link.querySelector(".detail-icon");
    if (detailIcon) detailIcon.innerHTML = gmailIcon;
    else if (link.textContent.trim().startsWith("Email")) {
      link.classList.add("mail-link");
      link.innerHTML = `${gmailIcon}<span>Email</span><span class="social-outbound" aria-hidden="true">↗</span>`;
    }
    const address = link.querySelector("strong");
    if (address) address.textContent = profile.email;
  });
  const socialIcons = {
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.6 5.23-5.09 5.51.4.35.76 1.02.76 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.94 18.5H4.97V9h2.97v9.5ZM6.45 7.7a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19 18.5h-2.97v-4.62c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.7H9.73V9h2.85v1.3h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.56 1.98 3.56 4.56v5.18Z"/></svg>'
  };
  document.querySelectorAll("[data-social]").forEach(link => {
    const network = link.dataset.social;
    const label = network === "github" ? "GitHub" : "LinkedIn";
    link.href = profile[network];
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.classList.add("social-link");
    link.setAttribute("aria-label", `${label} (opens in a new tab)`);
    link.innerHTML = `${socialIcons[network]}<span>${label}</span><span class="social-outbound" aria-hidden="true">↗</span>`;
  });
  initNavigation(); initScrollEffects(); initTyping(); initProjectGallery(); initContactForm();
});

function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  const update = () => header?.classList.toggle("scrolled", window.scrollY > 12);
  update(); window.addEventListener("scroll", update, {passive:true});
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => { const open = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation"); });
  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open navigation"); }));
  const page = document.body.dataset.page;
  document.querySelector(`[data-link="${page}"]`)?.classList.add("active");
  if (page === "home") document.querySelectorAll("[data-section]").forEach(link => link.addEventListener("click", () => { document.querySelectorAll("[data-section]").forEach(a => a.classList.remove("active")); link.classList.add("active"); }));
}

function initScrollEffects() {
  const nodes = document.querySelectorAll(".section-heading,.about-grid,.skill-card,.explore-list>div,.featured-card,.academic-banner,.project-card,.academic-list article,.contact-grid");
  nodes.forEach(node => node.setAttribute("data-reveal", ""));
  if (!("IntersectionObserver" in window)) { nodes.forEach(node => node.classList.add("revealed")); return; }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } }), {threshold:.12});
  nodes.forEach(node => observer.observe(node));
}

function initTyping() {
  const target = document.querySelector(".typed-role"); if (!target || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const roles = ["Full-Stack Developer", "AI / ML Enthusiast", "Cloud Computing Learner", "Problem Solver"];
  let index = 0, char = roles[0].length, deleting = false;
  const tick = () => { const word = roles[index]; char += deleting ? -1 : 1; target.textContent = word.slice(0, char); let delay = deleting ? 48 : 82;
    if (!deleting && char >= word.length) { deleting = true; delay = 1500; }
    else if (deleting && char <= 0) { deleting = false; index = (index + 1) % roles.length; delay = 300; }
    window.setTimeout(tick, delay);
  }; window.setTimeout(tick, 1800);
}

function initProjectGallery() {
  const grid = document.querySelector("#projects-grid"); if (!grid) return;
  const render = filter => {
    const items = projects.filter(project => filter === "all" || project.filters.includes(filter));
    grid.innerHTML = items.map(project => `<article class="project-card" id="project-${project.id}"><div class="project-top"><span class="project-number">PROJECT / ${project.number}</span><span class="project-category">${project.category}</span></div><h3>${project.title}</h3><p>${project.summary}</p><div class="project-feature-line"><b>✳</b>${project.feature}</div><div class="tech-list">${project.technologies.slice(0,5).map(tech => `<span>${tech}</span>`).join("")}</div><button class="project-open" type="button" data-project="${project.id}">View details <span>↗</span></button></article>`).join("");
    grid.querySelectorAll(".project-open").forEach(button => button.addEventListener("click", () => openProject(button.dataset.project)));
  };
  render("all");
  document.querySelectorAll(".filter-chip").forEach(button => button.addEventListener("click", () => { document.querySelectorAll(".filter-chip").forEach(chip => { chip.classList.remove("active"); chip.setAttribute("aria-pressed", "false"); }); button.classList.add("active"); button.setAttribute("aria-pressed", "true"); render(button.dataset.filter); }));
  const modal = document.querySelector("#project-modal");
  function openProject(id) { const project = projects.find(item => item.id === id); if (!project || !modal) return;
    document.querySelector("#modal-content").innerHTML = `<p class="modal-kicker">PROJECT / ${project.number} — ${project.category}</p><h2 id="modal-title">${project.title}</h2><p class="modal-summary">${project.overview}</p><div class="modal-detail-grid"><section class="modal-detail"><h3>THE PROBLEM</h3><p>${project.problem}</p></section><section class="modal-detail"><h3>PROPOSED SOLUTION</h3><p>${project.solution}</p></section><section class="modal-detail"><h3>KEY FEATURES</h3><ul>${project.features.map(item => `<li>${item}</li>`).join("")}</ul></section><section class="modal-detail"><h3>WORKFLOW</h3><p>${project.workflow}</p></section><section class="modal-detail"><h3>FUTURE ENHANCEMENTS</h3><p>${project.future}</p></section><section class="modal-detail"><h3>TECHNOLOGIES</h3><div class="modal-tech">${project.technologies.map(item => `<span>${item}</span>`).join("")}</div></section></div>`;
    modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; modal.querySelector(".modal-close").focus();
  }
  function closeProject() { if (!modal) return; modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
  modal.querySelector(".modal-close").addEventListener("click", closeProject);
  modal.addEventListener("click", event => { if (event.target === modal) closeProject(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && modal.classList.contains("open")) closeProject(); });
  if (location.hash.startsWith("#project-")) { const id = location.hash.slice(9); if (projects.some(project => project.id === id)) setTimeout(() => document.getElementById(`project-${id}`)?.scrollIntoView({behavior:"smooth",block:"center"}), 200); }
}

function initContactForm() {
  const form = document.querySelector("#contact-form"); if (!form) return;
  const status = document.querySelector("#form-status");
  form.addEventListener("submit", event => {
    event.preventDefault(); const values = Object.fromEntries(new FormData(form)); let valid = true;
    const errors = {name: values.name.trim().length < 2 ? "Please enter at least 2 characters." : "", email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()) ? "Enter a valid email address." : "", message: values.message.trim().length < 10 ? "Please add a little more detail (10 characters minimum)." : ""};
    Object.entries(errors).forEach(([field, message]) => { const element = form.elements[field]; const feedback = form.querySelector(`[data-error="${field}"]`); feedback.textContent = message; element.setAttribute("aria-invalid", String(Boolean(message))); if (message) valid = false; });
    if (!valid) { status.textContent = "Please check the highlighted fields and try again."; form.querySelector('[aria-invalid="true"]')?.focus(); return; }
    const subject = encodeURIComponent(values.topic ? `${values.topic} — ${values.name.trim()}` : `Portfolio message from ${values.name.trim()}`);
    const body = encodeURIComponent(`Hi Alex,\n\n${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`);
    status.textContent = "Your email draft is ready. Send it from your email app to complete delivery.";
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  });
  form.querySelectorAll("input,textarea").forEach(element => element.addEventListener("input", () => { if (element.getAttribute("aria-invalid") === "true") { element.removeAttribute("aria-invalid"); form.querySelector(`[data-error="${element.name}"]`).textContent = ""; } }));
}
