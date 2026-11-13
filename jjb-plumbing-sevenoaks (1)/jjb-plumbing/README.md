# JJB Plumbing and Heating (Sevenoaks) – website

## Quick start (no tools needed)
The `website/` folder is the complete site, with every file at the top level and no sub-folders:
index.html, about.html, services.html, gallery.html, contact.html, 404.html,
styles.css, main.js, chatbot.js, site-config.js, the images, site.webmanifest, robots.txt and sitemap.xml.

- **Open locally:** double-click `index.html`.
- **GitHub + Vercel:** upload ALL files from `website/` (or the WEBSITE zip) to the TOP of the repository, not inside a folder. In Vercel choose Framework Preset "Other", with no build command and no output directory.
- **Netlify:** drag the `website` folder onto app.netlify.com/drop.
- **cPanel:** upload all files into `public_html`.

## Quote form – one-time activation
The form and chat assistant email requests to Jjbplumbing@hotmail.com through FormSubmit. The FIRST time the form
is used, FormSubmit sends an activation email to that inbox (check junk). Click "Activate" once; after that every
request arrives by email.

## Please confirm with the client
- **Services:** Yell blocks automated access, so the service list is typical plumbing & heating work. Check it with Jorge.
- **Gas Safe:** gas safety checks and landlord certificates must be done by a Gas Safe registered engineer. Add Jorge's Gas Safe number, or remove that service if it doesn't apply.
- **Address, opening hours, reviews:** not supplied. Add reviews in `src/site.config.js` (`reviews`, `rating`).
- **Domain:** www.jjbplumbingandheating.co.uk is a placeholder. Update `url` in `src/site.config.js`.
- **Photos** are royalty-free Unsplash stock images, labelled on the Gallery page as illustrative.

## Editing (optional, needs Node.js)
Sources are in `src/` and `public/assets/`. Run `npm run build` and then `node flatten.js` to regenerate `website/`.
The `server.js` file adds an optional live AI chat (needs ANTHROPIC_API_KEY).
