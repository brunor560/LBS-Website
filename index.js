<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LBS Systems</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Dancing+Script:wght@600&display=swap" rel="stylesheet">
        <style>
            *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

            :root {
            --bg-dark:   #1e2526;
            --bg-mid:    #2d3e45;
            --bg-card:   #ffffff;
            --teal:      #1a8a7a;
            --teal-dark: #14706300;
            --teal-hover:#16796b;
            --text:      #ffffff;
            --text-muted:#c5d0d2;
            --radius:    14px;
        }

            html { scroll-behavior: smooth; }

            body {
            font-family: 'Inter', sans-serif;
            background: var(--bg-dark);
            color: var(--text);
            min-height: 100vh;
        }

            /* ── NAV ── */
            nav {
            position: fixed; top: 0; left: 0; right: 0; z-index: 200;
            background: var(--bg-dark);
            display: flex; align-items: center; justify-content: space-between;
            padding: 0 2.5rem;
            height: 60px;
        }

            .nav-left {
            display: flex; gap: 2rem; align-items: center;
        }

            .nav-left a {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text);
            text-decoration: none;
            transition: color 0.2s;
        }
            .nav-left a:hover { color: #5ecfc3; }

            .nav-brand {
            position: absolute; left: 50%; transform: translateX(-50%);
            font-size: 1.05rem;
            font-weight: 700;
            letter-spacing: 0.04em;
            color: var(--text);
            text-decoration: none;
        }

            .nav-right {
            display: flex; align-items: center; gap: 1rem;
        }

            .btn-teal {
            background: var(--teal);
            color: #fff;
            border: none;
            border-radius: 999px;
            padding: 0.5rem 1.25rem;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            transition: background 0.2s, transform 0.15s;
            display: inline-flex; align-items: center;
        }
            .btn-teal:hover { background: var(--teal-hover); transform: translateY(-1px); }

            .cart-icon {
            color: var(--text);
            font-size: 1.3rem;
            cursor: pointer;
            text-decoration: none;
            display: flex; align-items: center;
        }

            /* ── HERO ── */
            .hero {
            min-height: 100vh;
            background: var(--bg-dark);
            display: flex; align-items: center; justify-content: center;
            padding: 80px 4rem 4rem;
            position: relative;
            overflow: hidden;
        }

            /* subtle texture overlay */
            .hero::before {
            content: '';
            position: absolute; inset: 0;
            background-image:
            radial-gradient(circle at 20% 50%, rgba(26,138,122,0.06) 0%, transparent 60%),
            radial-gradient(circle at 80% 50%, rgba(26,138,122,0.04) 0%, transparent 60%);
            pointer-events: none;
        }

            .hero-inner {
            max-width: 1100px; width: 100%;
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 4rem; align-items: center;
            position: relative; z-index: 1;
        }

            .hero-text h1 {
            font-size: clamp(2.8rem, 5vw, 4.2rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1rem;
        }

            .hero-text p {
            font-family: 'Dancing Script', cursive;
            font-size: 1.7rem;
            color: var(--text-muted);
            letter-spacing: 0.01em;
        }

            /* LBS Logo SVG recreation */
            .lbs-logo-wrap {
            display: flex; align-items: center; justify-content: center;
        }

            .lbs-logo {
            width: 100%;
            max-width: 460px;
        }

            /* ── SECTION SHARED ── */
            .section {
            background: var(--bg-mid);
            padding: 5rem 4rem;
        }

            .section-inner {
            max-width: 1100px; margin: 0 auto;
        }

            .section-title {
            font-size: 1.6rem;
            font-weight: 800;
            margin-bottom: 2.5rem;
            color: var(--text);
        }

            /* ── MERCH ── */
            .merch-grid {
            display: flex; gap: 1.5rem; flex-wrap: wrap;
        }

            .merch-card {
            background: #fff;
            border-radius: var(--radius);
            overflow: hidden;
            width: 260px;
            cursor: pointer;
            text-decoration: none;
            display: block;
            transition: transform 0.2s, box-shadow 0.2s;
        }
            .merch-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 30px rgba(0,0,0,0.35);
        }

            .merch-img {
            width: 100%; height: 220px;
            object-fit: cover;
            background: #f0f0f0;
            display: flex; align-items: center; justify-content: center;
            overflow: hidden;
        }

            /* Placeholder product images using CSS art */
            .merch-img.shirt {
            background: #1a1a1a;
            position: relative;
        }

            .merch-img.sticker {
            background: #2a2a2a;
        }

            .merch-info {
            padding: 0.9rem 1rem 1rem;
        }

            .merch-name {
            font-size: 0.95rem;
            font-weight: 700;
            color: #111;
            margin-bottom: 0.25rem;
        }

            .merch-price {
            font-size: 0.9rem;
            font-weight: 500;
            color: #333;
        }

            /* ── COACHES ── */
            .coaches {
            background: var(--bg-mid);
            padding: 5rem 4rem;
        }

            .coaches-inner {
            max-width: 1100px; margin: 0 auto;
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 5rem; align-items: center;
        }

            .coaches-text h2 {
            font-size: 1.7rem;
            font-weight: 800;
            margin-bottom: 1.2rem;
        }

            .coaches-text p {
            font-size: 1rem;
            color: var(--text-muted);
            line-height: 1.7;
            margin-bottom: 2rem;
            max-width: 380px;
        }

            .coaches-photos {
            display: grid;
            grid-template-rows: 1fr 1fr;
            gap: 6px;
            border-radius: var(--radius);
            overflow: hidden;
            max-height: 620px;
        }

            .coach-photo {
            width: 100%; height: 300px;
            object-fit: cover;
            background: #3a4a52;
            display: flex; align-items: center; justify-content: center;
            color: #6a8a92;
            font-size: 0.85rem;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
        }

            /* ── FOOTER ── */
            footer {
            background: var(--bg-dark);
            border-top: 1px solid rgba(255,255,255,0.07);
            padding: 2rem 4rem;
            display: flex; justify-content: space-between; align-items: center;
            flex-wrap: wrap; gap: 1rem;
        }

            .footer-brand {
            font-size: 1rem;
            font-weight: 700;
            color: var(--text);
        }

            .footer-sub {
            font-size: 0.8rem;
            color: #6a8a92;
            font-family: 'Dancing Script', cursive;
            font-size: 1rem;
        }

            .footer-links {
            display: flex; gap: 1.5rem; list-style: none;
        }
            .footer-links a {
            font-size: 0.8rem;
            color: #6a8a92;
            text-decoration: none;
            transition: color 0.2s;
        }
            .footer-links a:hover { color: #5ecfc3; }

            /* Responsive */
            @media (max-width: 768px) {
            .hero-inner, .coaches-inner { grid-template-columns: 1fr; gap: 2rem; }
            nav { padding: 0 1.2rem; }
            .section, .coaches { padding: 3rem 1.5rem; }
            footer { padding: 2rem 1.5rem; }
        }

            /* Smooth fade in */
            .fade-in {
            opacity: 0; transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
            .fade-in.visible { opacity: 1; transform: none; }
        </style>
    </head>
    <body>

    <!-- NAV -->
    <nav>
        <div class="nav-left">
            <a href="#home">Coaching Info</a>
            <a href="#merch">LBS Merch</a>
        </div>
        <a href="#home" class="nav-brand">LBS Systems</a>
        <div class="nav-right">
            <a href="#merch" class="btn-teal">Shop All</a>
            <a href="#merch" class="cart-icon" aria-label="Cart">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
            </a>
        </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="home">
        <div class="hero-inner">
            <div class="hero-text fade-in">
                <h1>Welcome To LBS</h1>
                <p>Lifting Beyond Satisfaction</p>
            </div>
            <div class="lbs-logo-wrap fade-in" style="transition-delay:0.15s">
                <!-- LBS Logo SVG recreation matching the barbell/block logo from site -->
                <svg class="lbs-logo" viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="LBS Systems logo with barbell">
                    <!-- Left barbell collar + plates -->
                    <rect x="0" y="88" width="18" height="44" rx="3" fill="white"/>
                    <rect x="18" y="78" width="14" height="64" rx="3" fill="white"/>
                    <rect x="32" y="95" width="50" height="30" rx="2" fill="white"/>
                    <!-- Right barbell collar + plates -->
                    <rect x="462" y="88" width="18" height="44" rx="3" fill="white"/>
                    <rect x="448" y="78" width="14" height="64" rx="3" fill="white"/>
                    <rect x="398" y="95" width="50" height="30" rx="2" fill="white"/>
                    <!-- Bar connecting -->
                    <rect x="82" y="103" width="316" height="14" rx="4" fill="white"/>

                    <!-- LBS Block Letters with outline style -->
                    <!-- L -->
                    <g>
                        <rect x="90" y="28" width="72" height="164" rx="6" fill="none" stroke="white" stroke-width="6"/>
                        <rect x="90" y="28" width="72" height="164" rx="6" fill="white" fill-opacity="0.08"/>
                        <text x="126" y="131" font-family="'Inter', sans-serif" font-weight="900" font-size="100" fill="white" text-anchor="middle" dominant-baseline="middle">L</text>
                    </g>
                    <!-- B -->
                    <g>
                        <rect x="172" y="28" width="72" height="164" rx="6" fill="none" stroke="white" stroke-width="6"/>
                        <rect x="172" y="28" width="72" height="164" rx="6" fill="white" fill-opacity="0.08"/>
                        <text x="208" y="131" font-family="'Inter', sans-serif" font-weight="900" font-size="100" fill="white" text-anchor="middle" dominant-baseline="middle">B</text>
                    </g>
                    <!-- S -->
                    <g>
                        <rect x="254" y="28" width="72" height="164" rx="6" fill="none" stroke="white" stroke-width="6"/>
                        <rect x="254" y="28" width="72" height="164" rx="6" fill="white" fill-opacity="0.08"/>
                        <text x="290" y="131" font-family="'Inter', sans-serif" font-weight="900" font-size="100" fill="white" text-anchor="middle" dominant-baseline="middle">S</text>
                    </g>

                    <!-- EST.2025 -->
                    <text x="355" y="185" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="white" letter-spacing="2">EST.2025</text>
                </svg>
            </div>
        </div>
    </section>

    <!-- MERCH -->
    <section class="section fade-in" id="merch">
        <div class="section-inner">
            <div class="section-title">Shop Newest LBS Merch!</div>
            <div class="merch-grid">

                <!-- Shirt card → Bonfire -->
                <a class="merch-card" href="https://www.bonfire.com/store/lbs-systems/" target="_blank" rel="noopener noreferrer" aria-label="LBS x LWKY Competition Shirt on Bonfire">
                    <div class="merch-img shirt">
                        <!-- CSS t-shirt illustration -->
                        <svg width="160" height="200" viewBox="0 0 160 200" xmlns="http://www.w3.org/2000/svg">
                            <!-- shirt body -->
                            <path d="M30 55 L10 80 L35 90 L35 175 L125 175 L125 90 L150 80 L130 55 L105 45 Q80 65 55 45 Z"
                                  fill="#1a1a1a" stroke="#333" stroke-width="1.5"/>
                            <!-- collar -->
                            <path d="M55 45 Q80 68 105 45" fill="none" stroke="#444" stroke-width="2"/>
                            <!-- LBS text on chest -->
                            <text x="80" y="120" font-family="Inter,sans-serif" font-weight="800" font-size="18"
                                  fill="white" text-anchor="middle" opacity="0.9">LBS</text>
                            <text x="80" y="138" font-family="Inter,sans-serif" font-weight="500" font-size="8"
                                  fill="#888" text-anchor="middle" letter-spacing="2">SYSTEMS</text>
                        </svg>
                    </div>
                    <div class="merch-info">
                        <div class="merch-name">LBS x LWKY Competition Shirt</div>
                        <div class="merch-price">$30.00</div>
                    </div>
                </a>

                <!-- Sticker card → Bonfire -->
                <a class="merch-card" href="https://www.bonfire.com/store/lbs-systems/" target="_blank" rel="noopener noreferrer" aria-label="LBS Sticker on Bonfire">
                    <div class="merch-img sticker" style="background:#222; display:flex; align-items:center; justify-content:center;">
                        <!-- sticker illustration -->
                        <svg width="180" height="120" viewBox="0 0 180 120" xmlns="http://www.w3.org/2000/svg">
                            <!-- water bottle shape -->
                            <rect x="60" y="5" width="60" height="110" rx="12" fill="#d4c99a" stroke="#b0a870" stroke-width="1.5"/>
                            <rect x="72" y="0" width="36" height="14" rx="5" fill="#333"/>
                            <!-- cap -->
                            <rect x="68" y="5" width="44" height="18" rx="4" fill="#111"/>
                            <!-- LBS label on bottle -->
                            <rect x="65" y="42" width="50" height="36" rx="4" fill="#1a1a1a" opacity="0.85"/>
                            <text x="90" y="62" font-family="Inter,sans-serif" font-weight="800" font-size="15"
                                  fill="white" text-anchor="middle">LBS</text>
                            <text x="90" y="74" font-family="Inter,sans-serif" font-weight="500" font-size="7"
                                  fill="#aaa" text-anchor="middle" letter-spacing="1">SYSTEMS</text>
                        </svg>
                    </div>
                    <div class="merch-info">
                        <div class="merch-name">LBS Sticker</div>
                        <div class="merch-price">$1.50</div>
                    </div>
                </a>

            </div>
        </div>
    </section>

    <!-- COACHES -->
    <section class="coaches fade-in" id="coaches">
        <div class="coaches-inner">
            <div class="coaches-text">
                <h2>Meet The Coaches</h2>
                <p>Are you ready to make the next step forward? Join our team to work with one of our amazing coaches!</p>
                <a href="https://lbs-systems.square.site/s/shop" target="_blank" rel="noopener noreferrer" class="btn-teal" style="font-size:0.9rem; padding:0.75rem 1.6rem; border-radius:999px;">
                    Click Here To Work With US!
                </a>
            </div>
            <div class="coaches-photos">
                <!-- Photo placeholders styled to match the original's look -->
                <div class="coach-photo" style="background: linear-gradient(135deg, #2a3a42 0%, #1e2d34 100%); position:relative; overflow:hidden;">
                    <!-- Trophy / competition scene placeholder -->
                    <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <!-- background stripes mimicking USA Powerlifting banner -->
                        <rect width="500" height="300" fill="#1e2d34"/>
                        <rect x="0" y="0" width="180" height="300" fill="#c0392b" opacity="0.7"/>
                        <rect x="180" y="0" width="30" height="300" fill="#e74c3c" opacity="0.4"/>
                        <!-- simple figure holding trophy -->
                        <circle cx="280" cy="100" r="40" fill="#4a5a62"/>
                        <rect x="248" y="140" width="64" height="100" rx="8" fill="#111"/>
                        <!-- trophy -->
                        <path d="M300 70 Q320 50 315 80 L305 90 L300 70Z" fill="#f0c040" opacity="0.9"/>
                        <text x="140" y="260" font-family="Inter,sans-serif" font-weight="900" font-size="48"
                              fill="white" opacity="0.15" letter-spacing="-1">POWERLIFTING</text>
                        <text x="250" y="280" font-family="Inter,sans-serif" font-weight="600" font-size="12"
                              fill="#6a8a92" text-anchor="middle" letter-spacing="2">COMPETITION PHOTO</text>
                    </svg>
                </div>
                <div class="coach-photo" style="background: linear-gradient(135deg, #1e2d34 0%, #2a3a42 100%); position:relative; overflow:hidden;">
                    <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <rect width="500" height="300" fill="#1e2d34"/>
                        <!-- platform scene -->
                        <rect x="0" y="200" width="500" height="100" fill="#111"/>
                        <rect x="150" y="170" width="200" height="30" rx="4" fill="#222"/>
                        <!-- figures -->
                        <circle cx="180" cy="150" r="25" fill="#3a4a52"/>
                        <rect x="158" y="175" width="44" height="70" rx="6" fill="#2a3540"/>
                        <circle cx="280" cy="145" r="30" fill="#3a4a52"/>
                        <rect x="255" y="175" width="50" height="75" rx="6" fill="#111"/>
                        <circle cx="370" cy="155" r="22" fill="#3a4a52"/>
                        <rect x="350" y="177" width="40" height="65" rx="6" fill="#2a3540"/>
                        <text x="250" y="280" font-family="Inter,sans-serif" font-weight="600" font-size="12"
                              fill="#6a8a92" text-anchor="middle" letter-spacing="2">MEET DAY PHOTO</text>
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div>
            <div class="footer-brand">LBS Systems</div>
            <div class="footer-sub">Lifting Beyond Satisfaction</div>
        </div>
        <ul class="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#coaches">Coaching Info</a></li>
            <li><a href="#merch">LBS Merch</a></li>
            <li><a href="https://www.bonfire.com/store/lbs-systems/" target="_blank" rel="noopener">Bonfire Store</a></li>
        </ul>
        <div style="font-size:0.75rem; color:#4a6068;">© 2025 LBS Systems. Est. 2025.</div>
    </footer>

    <script>
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
        });
    }, { threshold: 0.1 });
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    </script>
    </body>
</html>
