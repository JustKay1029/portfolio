// Real GitHub data service for JustKay1029

export const DEFAULT_PROFILE = {
  name: "Kavya Gupta",
  login: "JustKay1029",
  bio: "AI & Software Engineer exploring Machine Learning, LLMs, and intelligent developer tooling.",
  public_repos: 29,
  followers: 2,
  following: 2,
  avatar_url: "https://avatars.githubusercontent.com/u/225905251?v=4",
  html_url: "https://github.com/JustKay1029",
  linkedin_url: "https://www.linkedin.com",
  linkedin_network: "500+",
  location: "India",
  blog: "https://github.com/JustKay1029",
};

// Hand-curated highlights from real GitHub repositories
export const CURATED_PROJECTS = [
  {
    name: "neetcode-gpt",
    title: "GPT Built From Scratch",
    category: "AI & Deep Learning",
    description: "Generative Pretrained Transformer neural architecture implemented from scratch, exploring self-attention, positional embeddings, and auto-regressive generation.",
    tags: ["Python", "PyTorch", "Transformers", "NLP"],
    stars: 0,
    forks: 0,
    language: "Python",
    html_url: "https://github.com/JustKay1029/neetcode-gpt",
    highlight: "Custom Attention & Decoder Architecture",
  },
  {
    name: "pr-pulse",
    title: "PR-Pulse — AI Pull Request Reviewer",
    category: "Developer Tools & AI",
    description: "AI-driven maintainer interface that automatically parses pull requests, analyzes code diffs, detects potential regressions, and synthesizes clear review conclusions.",
    tags: ["Python", "FastAPI", "GitHub API", "LLMs"],
    stars: 0,
    forks: 0,
    language: "Python",
    html_url: "https://github.com/JustKay1029/pr-pulse",
    highlight: "Autonomous PR Synthesis & Reviewing",
  },
  {
    name: "CORUS",
    title: "CORUS — AI Tool Routing Engine",
    category: "GenAI & LLMs",
    description: "Intelligent classification system that assesses prompt intent and routes tasks to optimal specialized AI models across Textual, Image, and Video modalities.",
    tags: ["TypeScript", "Next.js", "AI Routing", "Prompt Engineering"],
    stars: 1,
    forks: 0,
    language: "TypeScript",
    html_url: "https://github.com/JustKay1029/CORUS",
    highlight: "Multi-Modal AI Routing Architecture",
  },
  {
    name: "gurgaon_rent_price_predictor",
    title: "Gurgaon Real Estate Price Predictor",
    category: "Data Science & ML",
    description: "Exploratory data analysis and predictive regression model trained on real-world Kaggle real estate data to estimate urban rental valuations with feature engineering.",
    tags: ["Python", "Pandas", "Scikit-Learn", "EDA"],
    stars: 0,
    forks: 0,
    language: "Python",
    html_url: "https://github.com/JustKay1029/gurgaon_rent_price_predictor",
    highlight: "Feature Engineering on Real Kaggle Data",
  },
  {
    name: "earguard",
    title: "EarGuard — Audio Health Monitor",
    category: "Hackathon Project",
    description: "Collaborative hackathon project engineered for real-time auditory health monitoring, decibel spike threshold alerts, and audio signal processing.",
    tags: ["Python", "Audio DSP", "Hackathon", "Signal Processing"],
    stars: 0,
    forks: 0,
    language: "Python",
    html_url: "https://github.com/JustKay1029/earguard",
    highlight: "Real-Time Decibel Threshold Monitoring",
  },
  {
    name: "opensre",
    title: "OpenSRE — AI SRE Agents",
    category: "AI & Developer Tools",
    description: "Autonomous AI site reliability engineering agent toolkit designed to assist with real-time log diagnosis, incident triaging, and system observability.",
    tags: ["Python", "AI Agents", "SRE", "Observability"],
    stars: 0,
    forks: 0,
    language: "Python",
    html_url: "https://github.com/JustKay1029/opensre",
    highlight: "Autonomous Incident Diagnosis & Agent Toolkit",
  }
];

export async function fetchLiveGitHubProfile() {
  try {
    const res = await fetch('https://api.github.com/users/JustKay1029');
    if (!res.ok) throw new Error('GitHub API response not ok');
    const data = await res.json();
    return {
      name: data.name || DEFAULT_PROFILE.name,
      login: data.login || DEFAULT_PROFILE.login,
      bio: data.bio || DEFAULT_PROFILE.bio,
      public_repos: data.public_repos ?? DEFAULT_PROFILE.public_repos,
      followers: data.followers ?? DEFAULT_PROFILE.followers,
      following: data.following ?? DEFAULT_PROFILE.following,
      avatar_url: data.avatar_url || DEFAULT_PROFILE.avatar_url,
      html_url: data.html_url || DEFAULT_PROFILE.html_url,
      location: data.location || DEFAULT_PROFILE.location,
    };
  } catch (error) {
    console.warn('Using local GitHub fallback data:', error);
    return DEFAULT_PROFILE;
  }
}

export async function fetchLiveGitHubRepos() {
  try {
    const res = await fetch('https://api.github.com/users/JustKay1029/repos?sort=updated&per_page=30');
    if (!res.ok) throw new Error('GitHub Repos response not ok');
    const data = await res.json();
    return data;
  } catch (error) {
    console.warn('Using local GitHub repos fallback:', error);
    return [];
  }
}
