(() => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("#site-nav-links");
  if (toggle && links) {
    const close = () => {
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("is-open");
    };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("is-open", !open);
    });
    links
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", close));
  }

  const input = document.querySelector("#article-search");
  const select = document.querySelector("#article-category");
  const cards = [...document.querySelectorAll(".article-card")];
  const count = document.querySelector("#article-count");
  if (!input || !select || !count) return;

  const update = () => {
    const query = input.value.trim().toLowerCase();
    const category = select.value || "All";
    let visible = 0;
    cards.forEach((card) => {
      const matches =
        (!query || card.dataset.search?.includes(query)) &&
        (category === "All" || card.dataset.category === category);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} guide${visible === 1 ? "" : "s"} found`;
  };
  input.addEventListener("input", update);
  select.addEventListener("change", update);
  update();
})();
