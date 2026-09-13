export const SERVICE_PAGES = {
  "web-design-belize": {
    title: "Web Design in Belize",
    description: "Custom website design in Belize by Luis Rodriguez. Explore tourism, restaurant and business websites, project pricing, and contact Luis directly.",
    lead: "I’m Luis Rodriguez, an independent designer and developer in Cayo, Belize. I build websites for local businesses that need customers to find their services, see their work, and get in touch.",
    sections: [
      { title: "A website built around how your customers buy", body: "A tour operator needs to explain the experience and help visitors book. A restaurant needs an easy-to-find menu. An architecture practice needs space for its projects and a clear way to request a consultation. I design the pages and interactions around that next step, with layouts that work on phones as well as desktops." },
      { title: "Belize businesses in my portfolio", body: "JetCarsBelize brings photography, live availability and guided booking into a tourism website. Midtown Belize puts food, menus and reservations at the center of a restaurant site. Cool & Sweet Ideals connects a local food brand with customers browsing its flavors. These are examples you can explore before discussing your own project." },
      { title: "Website design cost in Belize", body: "My published project range is $500–$3,000. A focused landing page and a site with booking, ordering or other custom features need different amounts of work. Send the pages you need, any existing website, and the action you want customers to take so we can discuss a suitable scope and quote. Ask about hosting, domains and third-party service costs when comparing proposals." },
      { title: "Planning for search from the start", body: "Useful service descriptions, descriptive page titles, readable headings and links between relevant pages help visitors and search engines understand a business. I also check mobile layouts, images and the path to contacting you. Publishing a website is the starting point: accurate business information and useful updates matter after launch too." },
    ],
    faq: [
      { question: "Do you work with businesses outside Cayo?", answer: "Yes. I work with businesses and founders in Belize and internationally. Share where your customers are and what you need the website to do when you get in touch." },
      { question: "Can you redesign an existing website?", answer: "Yes. Send the current URL and explain what needs to improve, such as mobile usability, project presentation or inquiries. Existing pages and URLs should be reviewed before a redesign so useful content and links are preserved." },
      { question: "Can we discuss booking or ordering features?", answer: "Yes. My portfolio includes booking and ordering experiences. The right approach depends on how your business manages availability, payments and customer requests, so those requirements need to be part of the project scope." },
    ],
    projects: ["JetCarsBelize", "Midtown Belize", "Cool & Sweet Ideals"],
  },
  "small-business-web-design": {
    title: "Small Business Web Design for US Clients",
    description: "Custom small business websites for US clients, built by Belize-based developer Luis Rodriguez. See real work, project pricing and how to get started.",
    lead: "Custom website design for US small businesses, with a direct line to the person designing and building your site. I’m Luis Rodriguez, based in Belize and working with clients internationally.",
    sections: [
      { title: "Make the next step easy", body: "A small business website should answer what you offer, who you serve and how to buy or inquire. For a service business, that may mean project photos and a quote request. For a restaurant, it may mean a menu and reservations. We can start with the customer’s main task and choose the pages and features that support it." },
      { title: "Work you can explore", body: "Florida Jet Cars is a marine showroom built around product photography and quote requests. JD Architecture combines an architecture portfolio with service discovery and consultation booking. Both show how a business can give its work room while making the next step clear. See the project collection for live links and descriptions." },
      { title: "Working with a developer in Belize", body: "I work from Cayo, Belize, rather than a US office. We can discuss your project in English by message or on a scheduled call. Share your time zone when booking so we can agree on a time that suits both of us. You can also review my experience and résumé before deciding whether the engagement is a fit." },
      { title: "Budget and scope", body: "My published project range is $500–$3,000. Page count, content, custom interactions and integrations affect the quote. A focused first version can be a useful way to get the essential pages online and plan additional features separately. Send a brief with your business, current URL, goals and budget to start the conversation." },
    ],
    faq: [
      { question: "Are you located in the United States?", answer: "No. I’m based in Belize and work with clients in the United States and internationally. You work directly with me remotely." },
      { question: "What should I send before our first conversation?", answer: "Send your business name, existing website if you have one, the customers you want to reach, examples you like, and your budget and desired launch date. That helps us discuss a realistic scope." },
      { question: "Will a new website immediately rank on Google?", answer: "No ranking or lead volume can be guaranteed. A site needs useful content and a sound technical foundation, and visibility also depends on competition, links, reputation and time." },
    ],
    projects: ["Florida Jet Cars", "JD Architecture"],
  },
  "web-app-development": {
    title: "Web App & MVP Development",
    description: "Web app and MVP development by Luis Rodriguez in Belize, working internationally. Explore product work and discuss the core flow of your app.",
    lead: "Have a product idea or a business workflow that needs more than a website? I build web apps and focused MVPs for founders and small teams in Belize and internationally.",
    sections: [
      { title: "Start with one useful flow", body: "A first version should let someone complete the task that makes the product valuable. That might be creating a signature, booking an experience or submitting information into a workflow. Before choosing screens and technology, we can map the input, the result and the steps a user needs to get there." },
      { title: "Product work to explore", body: "esigna is an AI email-signature product that turns a portrait into a bobblehead and a ready-to-use signature. JetCarsBelize combines a public website with availability and guided booking. These projects show different kinds of product interactions, from generated content to a customer booking flow." },
      { title: "Experience across the frontend and backend", body: "My background includes software engineering at BuildShip, where I worked on templates, sample apps and API-based workflows. My stack includes TypeScript, React, Next.js, NestJS and PostgreSQL. The technology choice should follow what your product needs, including its data, integrations and how it will be maintained." },
      { title: "Scope before a quote", body: "My published project range is $500–$3,000, but an app’s requirements determine whether it fits that range. Share the main workflow, who will use it and any existing system it needs to connect to. We can discuss a focused first release; a large platform may need a different budget or team." },
    ],
    faq: [
      { question: "Can we start from an idea rather than a specification?", answer: "Yes. Describe the problem, who has it and what a successful result looks like. We can use that to discuss the core workflow and an initial scope." },
      { question: "Can you connect an app to existing APIs?", answer: "API integration is part of my development background. Share the systems involved and their documentation so the required access, data and limitations can be reviewed." },
      { question: "Where can I see your technical experience?", answer: "The About and Experience pages include my previous roles, product work and technical stack. The Experience page also links to my résumé." },
    ],
    projects: ["esigna", "JetCarsBelize"],
  },
} as const;

export type ServiceSlug = keyof typeof SERVICE_PAGES;
