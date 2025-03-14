const ENV = process.env.NODE_ENV === "development" ? "dev" : "prod";

const config = {
  ENV: ENV,
  WEB_DOMAIN: ENV === "dev" ? "http://localhost:3000" : "https://brianmin.com",
  API_ENDPOINT: "https://brianmin.netlify.app/api",
  INSTAGRAM_URL: "https://instagram.com/bymi15",
  YOUTUBE_URL: "https://www.youtube.com/channel/UCAlY1iJoAOwLw7yMADOj5Xw",
  LINKEDIN_URL: "https://www.linkedin.com/in/bymi15/",
  GITHUB_URL: "https://github.com/bymi15/",
  STACKOVERFLOW_URL: "https://stackoverflow.com/users/6213508/brian-min",
  CONTACT_FORM_URL: "https://formspree.io/mrgyvnnj",
  EMAIL: "bymi15@yahoo.com",
  CACHE_EXPIRY_HOURS: 24,
  CACHE_TOGGLE: true,
  PRE_RENDERING: navigator.userAgent === "ReactSnap",
};

export default config;
