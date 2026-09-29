(() => {
  const campaigns = [
    ["#d9dee7", "#ffffff", "#465365", "#2f3947", "#f7f8fa", "#283342"],
    ["#9254d8", "#b77bf2", "#5b2a86", "#31194d", "#f4eafb", "#ffffff"],
    ["#2876d2", "#5ca5ee", "#164f94", "#10345e", "#eaf3fd", "#ffffff"],
    ["#19a978", "#5bc99d", "#0d7252", "#124838", "#e9f8f2", "#ffffff"],
    ["#79b83a", "#a8dc68", "#497b21", "#304f1c", "#f0f8e7", "#ffffff"],
    ["#d9505b", "#ef7b83", "#973443", "#5f2430", "#fcecef", "#ffffff"],
    ["#8992a1", "#b9c0ca", "#566171", "#343d4a", "#f0f2f5", "#ffffff"],
    ["#cbd9e2", "#ffffff", "#4c687b", "#304957", "#f6fafc", "#263e4c"],
    ["#f5cd32", "#ffe675", "#806200", "#173a59", "#fff9dc", "#342900"],
    ["#e8789a", "#f3a5ba", "#a34162", "#652940", "#fcecf2", "#ffffff"],
    ["#299ed7", "#6ac4ed", "#176b9c", "#124461", "#e9f6fc", "#ffffff"],
    ["#ef873f", "#ffad6e", "#a64b18", "#663014", "#fff0e5", "#ffffff"]
  ];
  const [accent, strong, deep, deeper, soft, onAccent] = campaigns[new Date().getMonth()];
  const root = document.documentElement.style;
  root.setProperty("--accent", accent);
  root.setProperty("--accent-strong", strong);
  root.setProperty("--deep", deep);
  root.setProperty("--deeper", deeper);
  root.setProperty("--soft", soft);
  root.setProperty("--on-accent", onAccent);
})();
