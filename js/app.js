/**
 * LABORATORY — AI CREATIVE | Lógica Principal de Interfaz y Experiencia
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.LABORATORY_CONFIG || {};
  const portfolioData = window.LABORATORY_PORTFOLIO || [];
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==========================================================================
     1. GESTIÓN DEL LOGOTIPO ORIGINAL (INTEGRACIÓN NATURAL SIN RECUADROS)
     ========================================================================== */
  const getFaithfulLogoSvg = () => `
    <svg viewBox="0 0 520 190" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LABORATORY — AI CREATIVE">
      <defs>
        <linearGradient id="hexBlueL" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#42D6FF"/>
          <stop offset="45%" stop-color="#168BFF"/>
          <stop offset="100%" stop-color="#09357A"/>
        </linearGradient>
        <linearGradient id="hexInnerL" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#062152"/>
          <stop offset="100%" stop-color="#168BFF"/>
        </linearGradient>
        <linearGradient id="hexBlueR" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#42D6FF"/>
          <stop offset="50%" stop-color="#168BFF"/>
          <stop offset="100%" stop-color="#082D6B"/>
        </linearGradient>
        <linearGradient id="flaskLiquid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#42D6FF"/>
          <stop offset="55%" stop-color="#168BFF"/>
          <stop offset="100%" stop-color="#0044B5"/>
        </linearGradient>
        <linearGradient id="wordmarkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="75%" stop-color="#F5F7FA"/>
          <stop offset="100%" stop-color="#B8D8FF"/>
        </linearGradient>
      </defs>
      <polygon points="243,19 194,46 194,95 256,129 256,115 208,88 208,53 243,33" fill="url(#hexBlueL)" stroke="#42D6FF" stroke-width="0.9"/>
      <polygon points="194,46 208,53 208,88 194,95" fill="url(#hexInnerL)"/>
      <polygon points="277,19 326,46 326,95 264,129 264,115 312,88 312,53 277,33" fill="url(#hexBlueR)" stroke="#42D6FF" stroke-width="0.9"/>
      <polygon points="326,46 312,53 312,88 326,95" fill="#168BFF" opacity="0.65"/>
      <rect x="244" y="6" width="32" height="5" rx="1" fill="#42D6FF"/>
      <rect x="252" y="11" width="16" height="35" fill="url(#hexBlueL)"/>
      <polygon points="252,46 268,46 293,83 260,104 227,83" fill="#061229" stroke="#42D6FF" stroke-width="1.4"/>
      <polygon points="252,46 260,46 246,83 227,83" fill="#168BFF" opacity="0.38"/>
      <polygon points="229,83 291,83 260,102.5" fill="url(#flaskLiquid)"/>
      <polygon points="229,83 260,83 260,102.5" fill="#42D6FF" opacity="0.5"/>
      <circle cx="261" cy="64" r="3.4" fill="#42D6FF"/>
      <circle cx="267.5" cy="73" r="4.2" fill="#168BFF" stroke="#42D6FF" stroke-width="0.7"/>
      <g fill="url(#wordmarkGrad)" transform="translate(0, 4)">
        <path d="M 28 128 H 35 V 150 H 54 V 156 H 28 Z"/>
        <path d="M 84 128 H 91 L 106 156 H 98.5 L 87.5 135 L 76.5 156 H 69 Z"/>
        <path d="M 124 128 H 146 C 151 128 154 130.5 154 135 C 154 138 152 140.2 149 141.2 C 153 142.2 155.5 144.8 155.5 149 C 155.5 153.5 152 156 146 156 H 124 Z M 131 133.5 V 139.2 H 144.5 C 146.8 139.2 148 138 148 136.3 C 148 134.6 146.8 133.5 144.5 133.5 Z M 131 144.5 V 150.5 H 145.5 C 148 150.5 149.2 149.2 149.2 147.5 C 149.2 145.8 148 144.5 145.5 144.5 Z"/>
        <path d="M 183 128 H 199 C 206.5 128 211 132.5 211 140 V 144 C 211 151.5 206.5 156 199 156 H 183 C 175.5 156 171 151.5 171 144 V 140 C 171 132.5 175.5 128 183 128 Z M 184 134 C 179.8 134 178 136.2 178 140 V 144 C 178 147.8 179.8 150 184 150 H 198 C 202.2 150 204 147.8 204 144 V 140 C 204 136.2 202.2 134 198 134 Z"/>
        <path d="M 229 128 H 251 C 257 128 260.5 131.2 260.5 136.8 C 260.5 141.5 257.8 144.5 253 145.3 L 261.5 156 H 253.5 L 245.8 145.8 H 236 V 156 H 229 Z M 236 133.8 V 140.2 H 250 C 252.6 140.2 254 139 254 137 C 254 135 252.6 133.8 250 133.8 Z"/>
        <path d="M 291 128 H 298 L 313 156 H 305.5 L 294.5 135 L 283.5 156 H 276 Z"/>
        <path d="M 326 128 H 358 V 134 H 345.5 V 156 H 338.5 V 134 H 326 Z"/>
        <path d="M 385 128 H 401 C 408.5 128 413 132.5 413 140 V 144 C 413 151.5 408.5 156 401 156 H 385 C 377.5 156 373 151.5 373 144 V 140 C 373 132.5 377.5 128 385 128 Z M 386 134 C 381.8 134 380 136.2 380 140 V 144 C 380 147.8 381.8 150 386 150 H 400 C 404.2 150 406 147.8 406 144 V 140 C 406 136.2 404.2 134 400 134 Z"/>
        <path d="M 430 128 H 452 C 458 128 461.5 131.2 461.5 136.8 C 461.5 141.5 458.8 144.5 454 145.3 L 462.5 156 H 454.5 L 446.8 145.8 H 437 V 156 H 430 Z M 437 133.8 V 140.2 H 451 C 453.6 140.2 455 139 455 137 C 455 135 453.6 133.8 451 133.8 Z"/>
        <path d="M 473 128 H 481 L 491.5 141.5 L 502 128 H 510 L 495 147 V 156 H 488 V 147 Z"/>
      </g>
      <line x1="96" y1="179" x2="136" y2="179" stroke="#42D6FF" stroke-width="1.8"/>
      <text x="260" y="184" text-anchor="middle" fill="#42D6FF" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="15.5" letter-spacing="8.5">AI CREATIVE</text>
      <line x1="384" y1="179" x2="424" y2="179" stroke="#42D6FF" stroke-width="1.8"/>
    </svg>
  `;

  const initBrandLogo = () => {
    const logoContainers = document.querySelectorAll("[data-brand-logo]");
    logoContainers.forEach((container) => {
      container.innerHTML = getFaithfulLogoSvg();
    });
  };

  initBrandLogo();

  /* ==========================================================================
     2. MENÚ MÓVIL ACCESIBLE Y NAVEGACIÓN ACTIVA
     ========================================================================== */
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const primaryNav = document.getElementById("primaryNav");
  const navLinks = document.querySelectorAll(".nav-link");

  const closeMobileMenu = () => {
    if (!mobileMenuBtn || !primaryNav) return;
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  };

  if (mobileMenuBtn && primaryNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
      mobileMenuBtn.setAttribute("aria-expanded", String(!isExpanded));
      primaryNav.classList.toggle("is-open", !isExpanded);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileMenu();
    });
  }

  /* ==========================================================================
     3. ESCENA VISUAL DEL PERFUME PROTAGONISTA EN EL HERO (RESPALDO DE ESTUDIO)
     ========================================================================== */
  const renderHeroStudioPerfume = () => {
    const canvas = document.getElementById("heroFallbackCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;

    ctx.fillStyle = "#050608";
    ctx.fillRect(0, 0, W, H);

    // Iluminación cinematográfica lateral azul eléctrico y cian
    const glow = ctx.createRadialGradient(W * 0.52, H * 0.46, 20, W * 0.52, H * 0.46, 380);
    glow.addColorStop(0, "rgba(22, 139, 255, 0.32)");
    glow.addColorStop(0.48, "rgba(66, 214, 255, 0.11)");
    glow.addColorStop(1, "rgba(5, 6, 8, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    const floorY = 710;
    const floorGrad = ctx.createLinearGradient(0, floorY, 0, H);
    floorGrad.addColorStop(0, "#090d14");
    floorGrad.addColorStop(1, "#050608");
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, floorY, W, H - floorY);

    const bx = W * 0.52;

    // Reflejo controlado sobre superficie oscura
    ctx.save();
    ctx.globalAlpha = 0.26;
    const reflGrad = ctx.createLinearGradient(bx - 125, floorY, bx + 125, H);
    reflGrad.addColorStop(0, "rgba(66, 214, 255, 0.48)");
    reflGrad.addColorStop(0.5, "rgba(22, 139, 255, 0.18)");
    reflGrad.addColorStop(1, "rgba(5, 6, 8, 0)");
    ctx.fillStyle = reflGrad;
    ctx.beginPath();
    ctx.moveTo(bx - 122, floorY + 2);
    ctx.lineTo(bx + 122, floorY + 2);
    ctx.lineTo(bx + 145, H);
    ctx.lineTo(bx - 145, H);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    // Frasco de perfume de cristal tallado
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(bx - 88, 305);
    ctx.lineTo(bx + 88, 305);
    ctx.lineTo(bx + 126, 392);
    ctx.lineTo(bx + 122, floorY);
    ctx.lineTo(bx - 122, floorY);
    ctx.lineTo(bx - 126, 392);
    ctx.closePath();

    const glassBody = ctx.createLinearGradient(bx - 126, 305, bx + 126, floorY);
    glassBody.addColorStop(0, "#10243f");
    glassBody.addColorStop(0.24, "#080c12");
    glassBody.addColorStop(0.56, "#1a1712");
    glassBody.addColorStop(0.86, "#122b4a");
    glassBody.addColorStop(1, "#42D6FF");
    ctx.fillStyle = glassBody;
    ctx.fill();

    // Refracción interior creíble
    ctx.beginPath();
    ctx.moveTo(bx - 70, 338);
    ctx.lineTo(bx + 70, 338);
    ctx.lineTo(bx + 98, 405);
    ctx.lineTo(bx + 94, floorY - 36);
    ctx.lineTo(bx - 94, floorY - 36);
    ctx.lineTo(bx - 98, 405);
    ctx.closePath();
    const innerLiquid = ctx.createLinearGradient(bx - 98, 340, bx + 98, floorY - 36);
    innerLiquid.addColorStop(0, "rgba(22, 139, 255, 0.42)");
    innerLiquid.addColorStop(0.38, "rgba(14, 18, 25, 0.94)");
    innerLiquid.addColorStop(0.76, "rgba(195, 165, 110, 0.4)");
    innerLiquid.addColorStop(1, "rgba(66, 214, 255, 0.55)");
    ctx.fillStyle = innerLiquid;
    ctx.fill();

    // Biseles iluminados en azul eléctrico y cian
    ctx.strokeStyle = "#42D6FF";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bx - 88, 305);
    ctx.lineTo(bx - 126, 392);
    ctx.lineTo(bx - 122, floorY);
    ctx.stroke();

    ctx.strokeStyle = "#168BFF";
    ctx.lineWidth = 2.4;
    ctx.beginPath();
    ctx.moveTo(bx + 88, 305);
    ctx.lineTo(bx + 126, 392);
    ctx.lineTo(bx + 122, floorY);
    ctx.stroke();

    // Atomizador metálico y tapón de cristal
    ctx.fillStyle = "#0B0E12";
    ctx.strokeStyle = "#42D6FF";
    ctx.lineWidth = 1.5;
    ctx.fillRect(bx - 38, 266, 76, 39);
    ctx.strokeRect(bx - 38, 266, 76, 39);

    ctx.beginPath();
    ctx.moveTo(bx - 82, 152);
    ctx.lineTo(bx + 82, 152);
    ctx.lineTo(bx + 54, 266);
    ctx.lineTo(bx - 54, 266);
    ctx.closePath();
    const capGrad = ctx.createLinearGradient(bx - 82, 152, bx + 82, 266);
    capGrad.addColorStop(0, "rgba(66, 214, 255, 0.72)");
    capGrad.addColorStop(0.36, "rgba(11, 14, 18, 0.9)");
    capGrad.addColorStop(0.76, "rgba(22, 139, 255, 0.42)");
    capGrad.addColorStop(1, "rgba(245, 247, 250, 0.72)");
    ctx.fillStyle = capGrad;
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "rgba(245, 247, 250, 0.9)";
    ctx.font = "300 26px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("A U R O R A", bx, 560);
    ctx.fillStyle = "rgba(165, 173, 184, 0.78)";
    ctx.font = "500 11px sans-serif";
    ctx.fillText("EAU DE PARFUM", bx, 586);
    ctx.restore();
  };

  renderHeroStudioPerfume();

  const renderPhilosophyStudio = () => {
    const c = document.getElementById("philosophyFallbackCanvas");
    if (!c) return;
    const ctx = c.getContext("2d");
    const W = c.width;
    const H = c.height;
    ctx.fillStyle = "#050608";
    ctx.fillRect(0, 0, W, H);

    const beam = ctx.createLinearGradient(0, 80, W, H - 80);
    beam.addColorStop(0, "rgba(22, 139, 255, 0.06)");
    beam.addColorStop(0.5, "rgba(66, 214, 255, 0.35)");
    beam.addColorStop(1, "rgba(5, 6, 8, 0.9)");
    ctx.fillStyle = beam;
    ctx.beginPath();
    ctx.moveTo(0, 120);
    ctx.lineTo(W, 340);
    ctx.lineTo(W, 500);
    ctx.lineTo(0, 260);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.arc(W * 0.42, H * 0.44, 92, 0, Math.PI * 2);
    ctx.fillStyle = "#080c14";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#42D6FF";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(W * 0.42, H * 0.44, 54, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(22, 139, 255, 0.35)";
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(W * 0.72, 170);
    ctx.lineTo(W * 0.86, 390);
    ctx.lineTo(W * 0.58, 390);
    ctx.closePath();
    ctx.fillStyle = "rgba(66, 214, 255, 0.18)";
    ctx.fill();
    ctx.strokeStyle = "#F5F7FA";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "rgba(245, 247, 250, 0.75)";
    ctx.font = "600 13px sans-serif";
    ctx.fillText("CREATIVE RESEARCH · STUDIO 001", 60, H - 65);
  };

  renderPhilosophyStudio();

  /* ==========================================================================
     4. PORTAFOLIO EDITORIAL — GALERÍA, FILTROS Y ESCENAS DE ESTUDIO
     ========================================================================== */
  const portfolioGrid = document.getElementById("portfolioGrid");
  const filterTabs = document.querySelectorAll(".filter-tab");

  // Composiciones editoriales de estudio en SVG para proyectos conceptuales sin fotografía externa aún cargada
  const getStudioVisualPlaceholder = (theme) => {
    switch (theme) {
      case "moda-editorial":
        return `
          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Composición editorial de moda en estudio oscuro">
            <defs>
              <radialGradient id="modaGlow" cx="68%" cy="35%" r="55%">
                <stop offset="0%" stop-color="#168BFF" stop-opacity="0.38"/>
                <stop offset="45%" stop-color="#42D6FF" stop-opacity="0.1"/>
                <stop offset="100%" stop-color="#050608" stop-opacity="1"/>
              </radialGradient>
              <linearGradient id="coatEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#42D6FF" stop-opacity="0.75"/>
                <stop offset="30%" stop-color="#168BFF" stop-opacity="0.25"/>
                <stop offset="100%" stop-color="#0B0E12" stop-opacity="0.95"/>
              </linearGradient>
            </defs>
            <rect width="800" height="500" fill="#050608"/>
            <rect width="800" height="500" fill="url(#modaGlow)"/>
            <path d="M360 70 L495 125 L540 460 L295 460 L325 140 Z" fill="#090C10" stroke="url(#coatEdge)" stroke-width="2"/>
            <path d="M395 75 L445 260 L370 460" fill="none" stroke="#42D6FF" stroke-width="1.2" stroke-opacity="0.55"/>
            <line x1="120" y1="460" x2="680" y2="460" stroke="#168BFF" stroke-opacity="0.3" stroke-width="1"/>
          </svg>
        `;
      case "calzado-escultural":
        return `
          <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Composición escultórica de calzado sobre monolito oscuro">
            <defs>
              <radialGradient id="shoeRim" cx="52%" cy="48%" r="50%">
                <stop offset="0%" stop-color="#42D6FF" stop-opacity="0.28"/>
                <stop offset="55%" stop-color="#168BFF" stop-opacity="0.08"/>
                <stop offset="100%" stop-color="#050608" stop-opacity="1"/>
              </radialGradient>
            </defs>
            <rect width="800" height="500" fill="#050608"/>
            <rect width="800" height="500" fill="url(#shoeRim)"/>
            <polygon points="180,350 620,350 680,450 120,450" fill="#0B0E12" stroke="rgba(245,247,250,0.12)" stroke-width="1"/>
            <path d="M250 315 C310 315, 360 215, 430 220 C480 225, 530 285, 575 300 C595 308, 595 338, 565 340 L240 340 C225 340, 230 315, 250 315 Z" fill="#07090D" stroke="#42D6FF" stroke-width="2"/>
            <path d="M265 330 L555 330" stroke="#168BFF" stroke-width="3" stroke-opacity="0.7"/>
          </svg>
        `;
      case "belleza-pigmento":
        return `
          <svg viewBox="0 0 500 625" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Textura cosmética en estudio oscuro">
            <defs>
              <radialGradient id="pigmentLight" cx="50%" cy="42%" r="48%">
                <stop offset="0%" stop-color="#168BFF" stop-opacity="0.35"/>
                <stop offset="60%" stop-color="#0B0E12" stop-opacity="0.9"/>
                <stop offset="100%" stop-color="#050608" stop-opacity="1"/>
              </radialGradient>
            </defs>
            <rect width="500" height="625" fill="url(#pigmentLight)"/>
            <path d="M160 390 Q250 160 340 310 T290 470 Q190 490 160 390 Z" fill="#0B0E12" stroke="#42D6FF" stroke-width="1.8" stroke-opacity="0.75"/>
            <circle cx="255" cy="310" r="95" fill="none" stroke="rgba(245,247,250,0.12)" stroke-width="1"/>
          </svg>
        `;
      default:
        return `
          <svg viewBox="0 0 500 625" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Estudio de iluminación en negro profundo y azul eléctrico">
            <defs>
              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#168BFF" stop-opacity="0.35"/>
                <stop offset="50%" stop-color="#42D6FF" stop-opacity="0.12"/>
                <stop offset="100%" stop-color="#050608" stop-opacity="1"/>
              </linearGradient>
            </defs>
            <rect width="500" height="625" fill="#050608"/>
            <polygon points="80,0 260,0 440,625 180,625" fill="url(#beamGrad)"/>
            <rect x="175" y="185" width="150" height="255" fill="#0B0E12" stroke="#42D6FF" stroke-opacity="0.6" stroke-width="1.5"/>
          </svg>
        `;
    }
  };

  const renderPortfolio = (categoryFilter = "Todos") => {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = "";

    const filtered =
      categoryFilter === "Todos"
        ? portfolioData
        : portfolioData.filter((item) => item.category === categoryFilter);

    filtered.forEach((project) => {
      const article = document.createElement("article");
      const aspectClass =
        project.aspectRatio === "vertical" ? "aspect-vertical" : "aspect-horizontal";
      article.className = `portfolio-item ${aspectClass}`;
      article.setAttribute("tabindex", "0");
      article.setAttribute("role", "button");
      article.setAttribute(
        "aria-label",
        `Ver campaña conceptual ${project.title} de la categoría ${project.category}`
      );

      const mediaMarkup = project.imageSrc
        ? `<img src="${project.imageSrc}" alt="${project.imageAlt}" loading="lazy" width="800" height="600" />`
        : getStudioVisualPlaceholder(project.visualTheme);

      article.innerHTML = `
        <div class="portfolio-media-wrap">
          <span class="concept-badge">${project.campaignType}</span>
          <span class="format-badge">Formato ${project.videoAspect}</span>
          ${mediaMarkup}
        </div>
        <div class="portfolio-caption">
          <div class="portfolio-meta-top">
            <span class="portfolio-cat">${project.category}</span>
            <span class="portfolio-explore-hint">Explorar concepto →</span>
          </div>
          <h3 class="portfolio-title">${project.title}</h3>
          <p class="portfolio-concept-excerpt">${project.concept}</p>
        </div>
      `;

      const openHandler = () => openProjectModal(project);
      article.addEventListener("click", openHandler);
      article.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openHandler();
        }
      });

      portfolioGrid.appendChild(article);
    });
  };

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderPortfolio(tab.getAttribute("data-category"));
    });
  });

  renderPortfolio("Todos");

  /* ==========================================================================
     5. MODAL ACCESIBLE DE DETALLE DE PROYECTO (CON SOPORTE DE VIDEO 9:16 Y 16:9)
     ========================================================================== */
  const projectModal = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalMediaContainer = document.getElementById("modalMediaContainer");
  const modalCategoryEl = document.getElementById("modalCategory");
  const modalCampaignBadgeEl = document.getElementById("modalCampaignBadge");
  const modalTitleEl = document.getElementById("modalTitle");
  const modalConceptEl = document.getElementById("modalConcept");
  const modalDescEl = document.getElementById("modalDesc");
  const modalDirectionListEl = document.getElementById("modalDirectionList");
  const modalInquireBtn = document.getElementById("modalInquireBtn");

  const pauseAllVideos = () => {
    document.querySelectorAll("video").forEach((v) => {
      try {
        v.pause();
      } catch (_) {}
    });
  };

  const openProjectModal = (project) => {
    if (!projectModal) return;
    pauseAllVideos();

    modalCategoryEl.textContent = `${project.category} · Formato ${project.videoAspect}`;
    modalCampaignBadgeEl.textContent = project.campaignType;
    modalTitleEl.textContent = project.title;
    modalConceptEl.textContent = project.concept;
    modalDescEl.textContent = project.description;

    modalDirectionListEl.innerHTML = (project.creativeDirection || [])
      .map((point) => `<li>${point}</li>`)
      .join("");

    if (project.videoSrc) {
      modalMediaContainer.innerHTML = `
        <video
          controls
          playsinline
          preload="metadata"
          style="max-height: 75vh; width: 100%; object-fit: contain;"
          aria-label="Video de campaña ${project.title}"
        >
          <source src="${project.videoSrc}" type="video/mp4" />
          Tu navegador no soporta reproducción de video HTML5.
        </video>
      `;
    } else if (project.imageSrc) {
      modalMediaContainer.innerHTML = `
        <img src="${project.imageSrc}" alt="${project.imageAlt}" style="max-height: 72vh; width: 100%; object-fit: cover;" />
      `;
    } else {
      modalMediaContainer.innerHTML = getStudioVisualPlaceholder(project.visualTheme);
    }

    projectModal.classList.add("is-open");
    projectModal.setAttribute("aria-hidden", "false");
    modalCloseBtn?.focus();
  };

  const closeProjectModal = () => {
    if (!projectModal) return;
    pauseAllVideos();
    projectModal.classList.remove("is-open");
    projectModal.setAttribute("aria-hidden", "true");
  };

  modalCloseBtn?.addEventListener("click", closeProjectModal);
  modalInquireBtn?.addEventListener("click", () => {
    closeProjectModal();
  });

  projectModal?.addEventListener("click", (e) => {
    if (e.target === projectModal) closeProjectModal();
  });

  /* ==========================================================================
     6. SELECCIÓN DE PLANES CREATIVOS -> PRESELECCIÓN EN FORMULARIO
     ========================================================================== */
  const planButtons = document.querySelectorAll("[data-select-plan]");
  const planSelectField = document.getElementById("fieldPlan");
  const contactSection = document.getElementById("contacto");

  planButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedPlan = btn.getAttribute("data-select-plan");
      if (planSelectField && selectedPlan) {
        planSelectField.value = selectedPlan;
      }
      contactSection?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
      setTimeout(() => {
        document.getElementById("fieldName")?.focus();
      }, 450);
    });
  });

  /* ==========================================================================
     7. FORMULARIO DE SESIÓN CREATIVA (VALIDACIÓN REAL, SIN SIMULAR ENVÍO FALSO)
     ========================================================================== */
  const creativeForm = document.getElementById("creativeSessionForm");
  const formStatusBox = document.getElementById("formStatusBox");
  const bookingContainer = document.getElementById("bookingIntegrationNote");

  // Mostrar enlace a Calendly / Reservas únicamente si existe una URL válida configurada
  if (bookingContainer) {
    if (config.contact?.bookingUrl) {
      bookingContainer.innerHTML = `
        <a href="${config.contact.bookingUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
          Agendar directamente en calendario →
        </a>
      `;
    } else {
      bookingContainer.innerHTML = `
        <p style="font-size: 0.84rem; color: var(--text-gray);">
          Integración de agenda directa (Calendly / sistema de reservas) preparada en <code>js/config.js</code> (<code>bookingUrl</code>). Mientras no se configure una URL válida, este formulario es la vía oficial de contacto.
        </p>
      `;
    }
  }

  const validateField = (inputEl, errorEl, validatorFn, errorMessage) => {
    const isValid = validatorFn(inputEl.value.trim());
    inputEl.classList.toggle("has-error", !isValid);
    if (errorEl) {
      errorEl.textContent = isValid ? "" : errorMessage;
    }
    return isValid;
  };

  if (creativeForm) {
    creativeForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const fName = document.getElementById("fieldName");
      const fBrand = document.getElementById("fieldBrand");
      const fEmail = document.getElementById("fieldEmail");
      const fWhatsapp = document.getElementById("fieldWhatsapp");
      const fProductType = document.getElementById("fieldProductType");
      const fGoal = document.getElementById("fieldGoal");
      const fContentType = document.getElementById("fieldContentType");
      const fPlan = document.getElementById("fieldPlan");

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const v1 = validateField(fName, document.getElementById("errName"), (v) => v.length >= 2, "Ingresa tu nombre.");
      const v2 = validateField(fBrand, document.getElementById("errBrand"), (v) => v.length >= 2, "Indica el nombre de tu marca o empresa.");
      const v3 = validateField(fEmail, document.getElementById("errEmail"), (v) => emailRegex.test(v), "Ingresa un correo electrónico válido.");
      const v4 = validateField(fProductType, document.getElementById("errProductType"), (v) => v.length >= 2, "Especifica el tipo de producto.");
      const v5 = validateField(fGoal, document.getElementById("errGoal"), (v) => v.length >= 8, "Cuéntanos brevemente qué te gustaría conseguir con tu campaña.");
      const v6 = validateField(fContentType, document.getElementById("errContentType"), (v) => v.length >= 2, "Selecciona o indica el tipo de contenido de tu interés.");

      if (!(v1 && v2 && v3 && v4 && v5 && v6)) {
        formStatusBox.hidden = false;
        formStatusBox.className = "form-status-box is-error";
        formStatusBox.textContent = "Por favor revisa los campos obligatorios marcados antes de continuar.";
        return;
      }

      const payload = {
        nombre: fName.value.trim(),
        marca: fBrand.value.trim(),
        correo: fEmail.value.trim(),
        whatsapp: fWhatsapp.value.trim() || "No especificado",
        tipoProducto: fProductType.value.trim(),
        objetivoCampana: fGoal.value.trim(),
        tipoContenido: fContentType.value.trim(),
        planInteres: fPlan.value || "Por definir"
      };

      const endpoint = config.contact?.formEndpoint?.trim();

      // Si no hay un backend configurado aún, NO simulamos un envío falso:
      // validamos los datos y explicamos con transparencia qué falta configurar.
      if (!endpoint) {
        formStatusBox.hidden = false;
        formStatusBox.className = "form-status-box is-pending-config";
        formStatusBox.innerHTML = `
          <strong style="color: var(--accent-cyan); display: block; margin-bottom: 0.4rem;">
            ✓ Datos validados correctamente (Envío en espera de conexión de backend)
          </strong>
          <p style="color: var(--text-gray); margin-bottom: 0.6rem;">
            Para evitar simular un envío falso, te informamos que el formulario ha validado tu solicitud para <strong>${payload.marca}</strong> (${payload.planInteres}), pero aún falta configurar la URL del servicio receptor en <code>js/config.js</code> → <code>contact.formEndpoint</code> (por ejemplo, un endpoint de Formspree, Web3Forms o tu API de servidor).
          </p>
        `;
        return;
      }

      try {
        formStatusBox.hidden = false;
        formStatusBox.className = "form-status-box";
        formStatusBox.textContent = "Enviando solicitud de sesión creativa...";

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        formStatusBox.className = "form-status-box is-pending-config";
        formStatusBox.textContent = "Tu solicitud de sesión creativa ha sido enviada correctamente. Nos pondremos en contacto contigo.";
        creativeForm.reset();
      } catch (err) {
        formStatusBox.className = "form-status-box is-error";
        formStatusBox.textContent = "No fue posible conectar con el servidor de recepción. Verifica el endpoint configurado.";
      }
    });
  }

  /* ==========================================================================
     8. AVISO DE PRIVACIDAD Y ENLACES DEL FOOTER
     ========================================================================== */
  const privacyModal = document.getElementById("privacyModal");
  const openPrivacyBtn = document.getElementById("openPrivacyBtn");
  const closePrivacyBtn = document.getElementById("closePrivacyBtn");

  openPrivacyBtn?.addEventListener("click", () => {
    privacyModal?.classList.add("is-open");
    privacyModal?.setAttribute("aria-hidden", "false");
  });

  closePrivacyBtn?.addEventListener("click", () => {
    privacyModal?.classList.remove("is-open");
    privacyModal?.setAttribute("aria-hidden", "true");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
      privacyModal?.classList.remove("is-open");
      privacyModal?.setAttribute("aria-hidden", "true");
    }
  });
});
