// Single source of truth for all site content. Edit here to update the site.
export const profile = {
  name: "Rajat Nalawade",
  first: "Rajat",
  last: "Nalawade",
  role: "Graphic Designer & Video Editor",
  statement: "I turn ideas into visual experiences.",
  // From resume
  summary:
    "Deadline-driven creative focused on overseeing projects from concept through final delivery. I create brand messages, strategies and key graphic productions, backed by vendor-sourcing know-how and leadership skills built over 3+ years in the industry.",
  phone: "+91 9599561282",
  // TODO: the resume has blank email / LinkedIn fields. Fill these in.
  email: "rajatnalawade.work@gmail.com",
  emailIsPlaceholder: true,
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Behance", href: "" },
    { label: "Instagram", href: "" },
  ] as { label: string; href: string }[],
  languages: ["English", "Hindi", "Marathi"],
};

export const experience = [
  { years: "2023 — Now", title: "Graphic Designer & Video Editor", org: "Rapture Events", kind: "Work" },
  { years: "2021 — Now", title: "Freelance Video Editor", org: "YouTube", kind: "Freelance" },
  { years: "2020 — Now", title: "Freelance Graphic Designer", org: "YouTube", kind: "Freelance" },
  { years: "2020 — 2023", title: "B.Sc. Media Graphics & Animation", org: "Y.C.M.O.U", kind: "Education" },
  { years: "May 2020", title: "C.B.S.E — PCM Science", org: "Army Public School", kind: "Education" },
];

export const duties = [
  "Creative design for print materials, brochures, banners and signs.",
  "Presenting mockups to customers and collecting feedback for adjustments.",
  "Applying design fundamentals — typography, composition, layout, colour.",
  "Researching trends and emerging opportunities in the industry.",
  "Mentoring junior designers and guiding the team's design standards.",
];

export const disciplines = [
  "Graphic Design", "Social Media Creatives", "Video Editing", "Motion Graphics",
  "CGI Reels", "Print & Signage", "Visual Storytelling", "Brand Messaging",
];

// Software from resume (rated out of 6 in the resume)
export const tools = [
  { name: "Photoshop", level: 6 },
  { name: "Premiere Pro", level: 5 },
  { name: "After Effects", level: 5 },
  { name: "Illustrator", level: 4 },
  { name: "Maya", level: 5 },
  { name: "Animate", level: 5 },
];

export type Category = "Social Design" | "Reels" | "CGI" | "Films";
export type Project = {
  id: string; title: string; category: Category; blurb: string;
  type: "image" | "video"; src: string; poster?: string;
  ratio: "portrait" | "landscape" | "square"; dur?: number; year?: string;
};

const img = (id: string, title: string, blurb: string, ratio: Project["ratio"] = "square"): Project => ({
  id, title, category: "Social Design", blurb, type: "image", src: `/media/web/${id}.webp`, ratio,
});
const vid = (folder: "videos" | "cgi", id: string, file: string, title: string, category: Category, blurb: string, ratio: Project["ratio"], dur: number): Project => ({
  id, title, category, blurb, type: "video", src: `/media/v/${id}.mp4`, poster: `/media/posters/${id}.jpg`, ratio, dur,
});

export const images: Project[] = [
  img("17-meet-our-digital-experts-post", "Meet Our Digital Experts", "Team-introduction social post."),
  img("2-rapture-digital-presence-post-v2", "Rapture Digital Presence", "Brand presence post for Rapture."),
  img("2-safety-post", "Safety Post", "Awareness creative for social feeds."),
  img("2-suji-rusk-post", "Suji Rusk", "Product-led social creative."),
  img("3-construction-mistakes-to-avoid-post", "3 Construction Mistakes to Avoid", "Educational carousel-style post."),
  img("3-idiots-post", "3 Idiots", "Pop-culture themed post.", "portrait"),
  img("4-quote-post-v2", "Quote Post", "Typographic quote creative."),
  img("7700-employees-file1-v1", "7700 Employees", "Milestone announcement creative."),
  img("16328964-minimal-inspiration-1-4-11111111", "Minimal Inspiration", "Minimal layout exploration."),
];

export const videos: Project[] = [
  vid("videos", "forbes-marshall-shinkawa-40-years-rndr-1", "Forbes Marshall Shinkawa 40 years rndr 1.mp4", "Forbes Marshall x Shinkawa — 40 Years", "Films", "Anniversary film.", "landscape", 119),
  vid("videos", "kia-carens-reel-rndr2", "Kia Carens Reel rndr2.mp4", "Kia Carens", "Films", "Automotive reel edit.", "landscape", 101),
  vid("videos", "ivalua-our-values-video-fhd", "Ivalua Our Values Video FHD.mp4", "Ivalua — Our Values", "Films", "Corporate values film.", "landscape", 39),
  vid("videos", "trending-viral-reel-2024-lamborghini", "Trending Viral Reel 2024 Lamborghini.mp4", "Lamborghini — Viral Reel", "Reels", "Trend-driven 4K reel.", "landscape", 13),
  vid("videos", "korea-reel", "KOREA REEL.mp4", "Korea Reel", "Reels", "Travel-style vertical reel.", "portrait", 67),
  vid("videos", "nyati-video-invite-v2", "Nyati Video Invite v2.mp4", "Nyati — Video Invite", "Reels", "Event invite video.", "portrait", 35),
  vid("videos", "ai-reel-sandhar", "Ai Reel Sandhar.mp4", "AI Reel — Sandhar", "Reels", "AI-assisted brand reel.", "portrait", 33),
  vid("videos", "6-together-we-thrive-reel-v5", "6 Together We Thrive Reel v5.mp4", "Together We Thrive", "Reels", "Team culture reel.", "portrait", 23),
  vid("videos", "6-blackstone-ongoing-projects-reel", "6 BlackStone Ongoing Projects Reel.mp4", "BlackStone — Ongoing Projects", "Reels", "Project showcase reel.", "portrait", 22),
  vid("videos", "cityglide-pan-india-presence-reel", "CityGlide PAN India Presence Reel.mp4", "CityGlide — PAN India Presence", "Reels", "Network presence reel.", "portrait", 21),
  vid("videos", "horeca-call-order-get-it-delivered-reel-v2", "Horeca Call, Order, Get it Delivered Reel v2.mp4", "Horeca — Call, Order, Delivered", "Reels", "Service explainer reel.", "portrait", 21),
  vid("videos", "rndr2-portrait", "rndr2 portrait.mp4", "Render 2 — Portrait", "Reels", "Portrait render edit.", "portrait", 13),
  vid("videos", "super-coconut-reel-v5", "Super Coconut Reel v5.mp4", "Super Coconut", "Reels", "Product reel.", "portrait", 12),
  vid("videos", "300-cities-presence-reel", "300+ Cities Presence Reel.mp4", "300+ Cities Presence", "Reels", "Reach-focused reel.", "portrait", 10),
  vid("videos", "vapo-do-vapo-reel-edit", "Vapo Do Vapo Reel Edit.mp4", "Vapo Do Vapo", "Reels", "Fast-cut reel edit.", "portrait", 7),
  vid("cgi", "sk-fortune-cgi-reel", "SK Fortune CGI Reel.mp4", "SK Fortune — CGI", "CGI", "CGI walkthrough reel.", "portrait", 18),
  vid("cgi", "nyati-burger-cgi-reel-final-2nd-august-2024", "Nyati Burger CGI Reel FINAL 2nd August 2024.mp4", "Nyati Burger — CGI", "CGI", "CGI reel (Aug 2024).", "portrait", 25),
  vid("cgi", "khed-cgi-file-2", "Khed CGI File 2.mp4", "Khed — CGI", "CGI", "CGI project reel.", "portrait", 11),
  vid("cgi", "bird-cgi-3", "Bird CGI 3.mp4", "Bird — CGI", "CGI", "CGI animation.", "portrait", 5),
];

export const projects: Project[] = [...videos, ...images];
export const categories: ("All" | Category)[] = ["All", "Films", "Reels", "CGI", "Social Design"];
// Showreel: the long-form cinematic pieces
export const reelFeatured = videos.filter((v) => v.category === "Films");

