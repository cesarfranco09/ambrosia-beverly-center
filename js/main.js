/*
 * Ambrosia — site behaviour
 *
 * SITE CONFIG: fill these in as soon as the restaurant confirms them.
 * Anything left empty is simply hidden on the page.
 */
const SITE_CONFIG = {
  phone: "",            // e.g. "(310) 555-0123"
  email: "",            // e.g. "hello@ambrosiala.com" (reservation requests are emailed here)
  formEndpoint: "",     // optional: Formspree / Basin / Getform URL; takes priority over email
  reservationUrl: "",   // optional: OpenTable / Resy / Tock link; the Reserve form will redirect there
  lunchDinnerHours: "", // e.g. "Daily · 11:00 AM – 10:00 PM"
  instagram: ""         // e.g. "https://instagram.com/ambrosia.la"
};

document.documentElement.classList.add("js");

/* ---------- Header: solid on scroll, mobile toggle ---------- */
(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");

  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  };
  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

  // Highlight the nav link for the section in view
  const links = [...nav.querySelectorAll('a[href^="#"]:not(.btn)')];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }
})();

/* ---------- Menus ---------- */
(() => {
  const menus = window.AMBROSIA_MENUS || [];
  const tabsEl = document.getElementById("menu-tabs");
  const panelsEl = document.getElementById("menu-panels");
  if (!tabsEl || !panelsEl || !menus.length) return;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtPrice = (p) => {
    if (!p) return "";
    if (/^[+]/.test(p)) return "+$" + p.slice(1);
    return /^\d/.test(p) ? "$" + p : p;
  };

  const itemHTML = (item) => `
    <div class="menu-item${item.featured ? " featured" : ""}">
      <div class="mi-row">
        <span class="mi-name">${esc(item.name)}${item.tag ? `<span class="mi-tag">${esc(item.tag)}</span>` : ""}</span>
        ${item.price ? `<span class="mi-dots" aria-hidden="true"></span><span class="mi-price">${esc(fmtPrice(item.price))}</span>` : ""}
      </div>
      ${item.desc ? `<p class="mi-desc">${esc(item.desc)}</p>` : ""}
    </div>`;

  const sectionHTML = (sec) => `
    <section class="menu-section">
      ${sec.hideName ? "" : `<h3 class="menu-section-title">${esc(sec.name)}</h3>`}
      ${sec.items.map(itemHTML).join("")}
      ${sec.extras ? `<div class="menu-extras"><h4>${esc(sec.extras.title)}</h4>${sec.extras.items.map(itemHTML).join("")}</div>` : ""}
    </section>`;

  menus.forEach((menu, i) => {
    const tab = document.createElement("button");
    tab.className = "menu-tab";
    tab.type = "button";
    tab.id = `tab-${menu.id}`;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", `panel-${menu.id}`);
    tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
    tab.tabIndex = i === 0 ? 0 : -1;
    tab.textContent = menu.label;
    tabsEl.appendChild(tab);

    const panel = document.createElement("div");
    panel.className = "menu-panel";
    panel.id = `panel-${menu.id}`;
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    panel.hidden = i !== 0;

    const isHH = menu.id === "happy-hour";
    const colsClass = isHH ? "hh" : menu.id === "cafe" ? "compact" : "";
    panel.innerHTML = `
      <header class="menu-panel-head">
        <div class="mp-brand">AMBROSIA</div>
        <div class="mp-title${menu.id === "brunch" ? " script" : ""}">${esc(menu.title)}</div>
        ${menu.note ? `<div class="mp-note">${esc(menu.note)}</div>` : ""}
      </header>
      <div class="menu-cols ${colsClass}">${menu.sections.map(sectionHTML).join("")}</div>`;
    panelsEl.appendChild(panel);
  });

  const tabs = [...tabsEl.querySelectorAll(".menu-tab")];
  const select = (id, focus) => {
    tabs.forEach((t) => {
      const on = t.id === `tab-${id}`;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      if (on && focus) t.focus();
    });
  };

  tabsEl.addEventListener("click", (e) => {
    const t = e.target.closest(".menu-tab");
    if (t) select(t.id.replace("tab-", ""));
  });
  tabsEl.addEventListener("keydown", (e) => {
    const idx = tabs.indexOf(document.activeElement);
    if (idx < 0) return;
    let next = null;
    if (e.key === "ArrowRight") next = (idx + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (idx - 1 + tabs.length) % tabs.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = tabs.length - 1;
    if (next !== null) { e.preventDefault(); select(tabs[next].id.replace("tab-", ""), true); }
  });

  // Links elsewhere on the page that open a specific menu
  document.querySelectorAll("[data-menu-tab]").forEach((a) =>
    a.addEventListener("click", () => select(a.dataset.menuTab))
  );
})();

/* ---------- Config-driven bits: hours, contact, social ---------- */
(() => {
  const c = SITE_CONFIG;
  if (c.lunchDinnerHours) {
    const row = document.createElement("div");
    row.innerHTML = `<dt>Lunch &amp; Dinner</dt><dd></dd>`;
    row.querySelector("dd").textContent = c.lunchDinnerHours;
    document.getElementById("hours-list").appendChild(row);
  }
  const lines = [];
  if (c.phone) lines.push(`<a href="tel:${c.phone.replace(/[^\d+]/g, "")}">${c.phone}</a>`);
  if (c.email) lines.push(`<a href="mailto:${c.email}">${c.email}</a>`);
  if (lines.length) {
    document.getElementById("contact-lines").innerHTML = lines.join("<br>");
    document.getElementById("contact-block").hidden = false;
  }
  const social = [];
  if (c.phone) social.push(`<a href="tel:${c.phone.replace(/[^\d+]/g, "")}">${c.phone}</a>`);
  if (c.instagram) social.push(`<a href="${c.instagram}" target="_blank" rel="noopener">Instagram</a>`);
  document.getElementById("footer-social").innerHTML = social.join(" · ");
  document.getElementById("year").textContent = new Date().getFullYear();
})();

/* ---------- Reservation form ---------- */
(() => {
  const form = document.getElementById("reserve-form");
  const status = document.getElementById("form-status");
  if (!form) return;

  const date = form.elements.date;
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  date.min = today.toISOString().slice(0, 10);

  const setStatus = (msg, isError) => {
    status.textContent = msg;
    status.classList.toggle("error", !!isError);
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let ok = true;
    [...form.querySelectorAll("[required]")].forEach((el) => {
      const valid = el.checkValidity();
      el.closest(".field").classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    if (!ok) { setStatus("Please complete the highlighted fields.", true); return; }

    const data = Object.fromEntries(new FormData(form));
    const c = SITE_CONFIG;

    if (c.reservationUrl) { window.location.href = c.reservationUrl; return; }

    if (c.formEndpoint) {
      setStatus("Sending your request…");
      try {
        const res = await fetch(c.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(res.statusText);
        form.reset();
        setStatus("Thank you! We've received your request and will confirm shortly.");
      } catch {
        setStatus("Sorry, something went wrong. Please try again or call us.", true);
      }
      return;
    }

    if (c.email) {
      const body = [
        `Name: ${data.name}`, `Phone: ${data.phone}`, `Email: ${data.email}`,
        `Guests: ${data.party}`, `Date: ${data.date}`, `Time: ${data.time}`,
        data.notes ? `Notes: ${data.notes}` : ""
      ].filter(Boolean).join("\n");
      const subject = `Reservation request: ${data.party} guests on ${data.date} at ${data.time}`;
      window.location.href = `mailto:${c.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("Your email app is opening with your request. Just press send.");
      return;
    }

    setStatus("Online reservations are coming soon. Until then, walk-ins are always welcome at the Beverly Center.");
  });

  form.addEventListener("input", (e) => {
    const field = e.target.closest(".field");
    if (field && e.target.checkValidity()) field.classList.remove("invalid");
  });
})();

/* ---------- Reveal on scroll ---------- */
(() => {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); io.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el, i) => {
    // small stagger for siblings in the same row
    const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => c.classList.contains("reveal")) : [];
    el.style.transitionDelay = `${Math.min(sibs.indexOf(el), 5) * 90}ms`;
    io.observe(el);
  });
})();
