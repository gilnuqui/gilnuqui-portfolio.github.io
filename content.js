// ============================================================
//  YOUR PORTFOLIO CONTENT  —  this is the ONLY file you need to edit.
//
//  Rules of the road:
//   • Keep the quotes "like this" around every piece of text.
//   • Keep the commas at the end of each line.
//   • If your text contains a double quote, write it as \"  (or use 'single quotes').
//   • To remove an optional section, set it to an empty list:  []
//   • Save the file and refresh index.html to see your changes.
//   • If the page shows a red error box, you probably deleted a quote or comma.
// ============================================================

const content = {
  // ---------- About you ----------
  name: "Gil Francois Nuqui",
  tagline: "Computer Science student exploring AI agents, software development, and data engineering", // one line under your name

  // Put your photo in the assets/ folder and put its file name here.
  // Square-ish, about 600px wide, under 1 MB works best.
  photo: "assets/photo.jpg",

  // 1–3 sentences: what you care about and what you're looking for.
  mission:
    "I'm studying Computer Science at Conestoga College and currently exploring real-world problems to solve with AI agents. I'm looking for Software Developer or Data Engineer opportunities where I can build practical systems and grow alongside an engineering team.",

  // ---------- Make it yours ----------
  theme: {
    // Pick a look:
    //   "classic" = clean and friendly (the default)
    //   "techy"   = dark terminal vibes, one tab per section (always dark, always monospace)
    //   "fancy"   = big serif headings, an arched photo, swipeable project cards
    style: "fancy",

    // Pick a preset: "coral", "ocean", "grape", "forest", "sunset", "bubblegum"
    // ...or use any hex color like "#ff6b9d".
    accent: "#0D98BA",

    // Pick a font: "modern", "serif", "rounded", "mono"
    font: "rounded",

    // "auto" follows the visitor's device. You can also force "light" or "dark".
    // (The "techy" look is always dark.)
    mode: "light",
  },

  // ---------- Links (shown as buttons at the top) ----------
  // For email just write the address, e.g. "you@example.com".
  links: [
    { label: "GitHub", url: "https://github.com/gilnuqui" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/gil-francois-00435435a" },
  ],

  // ---------- Skills (optional — set to [] to hide) ----------
  skills: ["C", "JavaScript", "English"],

  // ---------- Projects ----------
  // Link to the GitHub repo (a live demo is optional — a repo is enough!).
  // tags are optional.
  projects: [],

  // ---------- Education ----------
  education: [
    {
      school: "Conestoga College",
      degree: "Bachelor of Computer Science",
      years: "Expected 2029",
    },
  ],

  // ---------- Work experience (optional — set to [] to hide) ----------
  experience: [],

  // ---------- Extracurriculars (optional — set to [] to hide) ----------
  extracurriculars: [],
};