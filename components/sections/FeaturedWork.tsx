"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Types ─────────────────────────────────────────────────────────────────── */
interface Feature   { img: string; title: string; desc: string }
interface FlowStep  { name: string; desc: string }
interface Milestone { marker: string; event: string }

/* ─── Project data ───────────────────────────────────────────────────────────── */
const PROJECTS = [ // prettier-ignore
  {
    id: 1, name: "GreenBite", type: "Restaurant Website", color: "#22C55E",
    desc: "A farm-to-table restaurant was haemorrhaging its busiest nights — phone calls going unanswered mid-service, a 2019 static website, and a menu four months out of date. Rebuilt in 11 days. Monthly covers tripled within 30 days of launch.",
    slides: [
      { img:"/images/gb-homepage.png",        a:"#DCFCE7", b:"#16A34A", pos:"top center" },
      { img:"/images/gb-homepage-mobile.png", a:"#4ADE80", b:"#166534", pos:"center" },
      { img:"/images/gb-seo.png",             a:"#BBF7D0", b:"#15803D", pos:"center" },
    ],
    details: {
      timeline: "11 days",
      tagline: "SEO before wireframes. Ranking before launch.",
      quote: { text: "We haven't missed a reservation since launch. The kitchen knows who's coming before we open the doors.", author: "Maria K.", role: "Owner, GreenBite" },
      metrics: [
        { label: "Days to ship",    value: "11" },
        { label: "Monthly covers",  value: "3×" },
        { label: "Page load time",  value: "<1.5s" },
        { label: "Agency retainer", value: "→ £0" },
      ],
      flow: [
        { name: "Keyword Audit",      desc: "40+ local search terms analysed before touching design. 12 high-intent targets locked — these shaped every URL, heading, and meta description on the site before a wireframe was drawn." },
        { name: "Site Architecture",  desc: "URL structure, internal linking, and page hierarchy built entirely around the keyword map. SEO strategy was decided before a wireframe existed — not bolted on afterwards." },
        { name: "Design & CMS Setup", desc: "Mobile-first visual design in Figma, built in Tailwind CSS. Sanity Studio configured with a non-technical interface — any staff member can update menus, events, and specials from their phone." },
        { name: "Booking Engine",     desc: "Custom reservation logic: party size limits, service period time slots, real-time conflict detection, 8-minute hold timeout, and instant kitchen notification the moment a booking is committed." },
        { name: "Confirmation Flow",  desc: "Guest email via Resend and SMS via Twilio both fire within 3 seconds of a booking being committed. No manual step. No delay. No missed confirmations during a busy service." },
        { name: "Launch & Indexing",  desc: "Deployed to Vercel on a custom domain. Sitemap submitted to Search Console. Schema.org markup validated for Restaurant, Menu, and LocalBusiness. Indexed and appearing in search within 36 hours of go-live." },
      ],
      features: [
        { img: "/images/gb-homepage.png",    title: "Homepage & Brand Experience",     desc: "The homepage opens with a full-bleed hero of seasonal food photography and a single above-the-fold CTA: Reserve a Table. Every section below — the provenance story, rotating menu preview, chef profile, and location map — is ordered around the decision a diner makes in the first few seconds on a phone screen. Under 1.5 seconds on mobile." },
        { img: "/images/gb-reservation.png", title: "Live Reservation System",         desc: "Guests select date, party size, and time slot on-site. The engine checks real-time availability, holds the slot for 8 minutes while the form is completed, then commits the booking and instantly notifies both the guest by email and the kitchen via the admin dashboard. No phone calls. No clipboard. No missed bookings during service." },
        { img: "/images/gb-cms.png",         title: "Staff Content Management",        desc: "Sanity Studio configured with a non-technical interface accessible from any device. Menu items, seasonal specials, opening hours, gallery photos, and event announcements are all editable without a developer. The owner updated her first seasonal menu 9 minutes after the handover call ended — on her phone, from the kitchen floor, unprompted." },
        { img: "/images/gb-seo.png",         title: "Local SEO Architecture",          desc: "Every URL, heading, meta description, image alt text, and internal link was designed around 12 high-intent local search terms before a line of code was written. Schema.org markup for Restaurant, Menu, and LocalBusiness types implemented throughout. The site tells search engines exactly what the restaurant is, what it serves, and where it is — on every page, consistently." },
        { img: "/images/gb-admin.png",       title: "Admin Reservations Dashboard",    desc: "Staff see every upcoming booking in a single clean view — guest name, party size, time slot, special requests, and table preference. No-shows are automatically flagged after 15 minutes with no action required. Weekly cover totals are summarised for the kitchen so prep quantities can be planned before service, without anyone manually counting." },
      ],
      overview: "GreenBite had been running for six years on reputation and word of mouth. The dining room filled mid-week without much effort, but weekends were a recurring problem. During Friday and Saturday service, the person running front-of-house was also the person answering reservation calls — calls that were still getting missed. A competitor two streets away had launched online booking eight months earlier and was visibly pulling the Friday night trade.\n\nThe website was a static page from 2019 with a PDF menu linked from the footer. Every menu change meant emailing the old web agency, waiting two or three days, and paying an update fee. By the time we were brought in, the online menu was four months out of date. The head chef had stopped asking for updates.\n\nWe were given one clear brief: make the site work as hard as the restaurant does. We started the same day with a keyword audit rather than design work — the search terms we identified shaped every URL and heading before a wireframe existed. The reservation system was built from scratch rather than bolted in from an off-the-shelf widget, because the client needed full control over time slots, party size caps, and the confirmation flow. We delivered in 11 days.",
      problem: "Staff were being pulled off the floor mid-service to answer phone calls that were still getting missed. The old web agency retainer was a fixed monthly cost for a site that was functionally untouched. The online menu was four months stale. And the site had almost no organic presence — a local search for the restaurant's food type and neighbourhood returned three competitors before GreenBite appeared at all.",
      milestones: [
        { marker: "Day 0",  event: "Keyword audit — 12 targets locked, old agency retainer cancelled" },
        { marker: "Day 2",  event: "Site architecture and wireframes approved by client" },
        { marker: "Day 5",  event: "Full mobile-first visual design signed off" },
        { marker: "Day 8",  event: "Booking engine in staging — CMS tested by staff on their phones" },
        { marker: "Day 11", event: "Live on custom domain, sitemap submitted to Search Console" },
        { marker: "Day 30", event: "Page one for all 12 keyword targets · monthly covers 3×" },
      ],
      beforeGallery: ["/images/a2.png", "/images/a2.png", "/images/a2.png"],
      afterGallery:  ["/images/a1.png", "/images/a3.png", "/images/a1.png"],
      tech: ["Next.js 14", "Sanity CMS", "Resend", "Twilio", "Tailwind CSS", "Vercel", "Google Analytics 4"],
      outcome: "Monthly reservation volume in the first full month after launch was three times the same month the prior year. The head chef updates the seasonal menu herself now — the last invoice from the old web agency was settled the day before we went live. The front-of-house team has not answered a single reservation call during service since go-live. Every target keyword is on the first page of results within 30 days of the sitemap being submitted.",
      gallery: ["/images/a1.png", "/images/a2.png", "/images/a3.png"],
      videoUrl: "/videos/greenbite.mp4",
    },
  },
  {
    id: 2, name: "LuxStay", type: "Hotel Booking Platform", color: "#F97316",
    desc: "A 14-room boutique hotel was handing 30% of every booking to Booking.com — with no access to a single guest's email address to show for it. Built a fully owned direct-booking platform in 3 weeks. Recovered the entire build cost in saved commission within six weeks.",
    slides: [
      { img:"/images/ls-hero.png",      a:"#FED7AA", b:"#EA580C", pos:"top center", bg:"#F8F8F8" },
      { img:"/images/ls-homepage.png",  a:"#FB923C", b:"#C2410C", pos:"top center" },
      { img:"/images/ls-rooms.png",     a:"#FFEDD5", b:"#F97316", pos:"center" },
    ],
    details: {
      timeline: "3 weeks",
      tagline: "The goal wasn't a better website. It was making Booking.com irrelevant.",
      quote: { text: "We went from paying 30% per booking to keeping everything. Six weeks in, the platform had already paid for itself.", author: "James O.", role: "Owner, LuxStay" },
      metrics: [
        { label: "OTA commission",  value: "→ 0%" },
        { label: "Direct bookings", value: "2×" },
        { label: "ROI breakeven",   value: "6 wks" },
        { label: "Time to ship",    value: "3 wks" },
      ],
      flow: [
        { name: "Guest Discovers",  desc: "Finds the hotel via Google or a direct referral. Lands on an SEO-optimised homepage that ranks for the hotel's name, location, and room category — without any OTA in the way." },
        { name: "Views Rooms",      desc: "Browses room types with photography, full amenities list, and live nightly pricing. Each room type has its own page — built to rank and convert." },
        { name: "Selects Dates",    desc: "Interactive availability calendar shows open nights in real time. Unavailable dates are automatically blocked — no double bookings, no manual management." },
        { name: "Pays Deposit",     desc: "Stripe checkout collects a configurable deposit — set per room type by the owner. Secure card payment. Confirmation in under 4 seconds." },
        { name: "Gets Confirmed",   desc: "Instant confirmation email lands with booking summary, check-in time, directions, and any pre-arrival instructions the hotel wants to include." },
        { name: "Reminder Sent",    desc: "Automated balance-due and pre-arrival email fires 48 hours before check-in via Resend. No manual follow-up. No missed payments. No chasing guests." },
      ],
      features: [
        { img: "/images/ls-homepage.png",  title: "Homepage & Direct Booking",       desc: "The homepage is built around one goal: converting a browsing guest into a direct booking without an OTA in the way. Full-bleed hero, room previews, live availability widget, trust signals, and a single above-the-fold CTA. SEO-structured from the ground up — ranking for the hotel's name, location, and room categories from day one." },
        { img: "/images/ls-rooms.png",    title: "Room Detail Pages",               desc: "Each room type has its own SEO-optimised page: photography, full amenities list, seasonal pricing, and a direct 'Check Availability' CTA. Designed to convert a browsing guest into a direct booking without touching an OTA. Every page is structured for search — title, meta, and schema markup implemented throughout." },
        { img: "/images/ls-calender.png", title: "Live Availability Calendar",      desc: "Room availability is managed entirely from the hotel's custom admin panel — no third-party booking engine, no monthly SaaS subscription. Staff set blackout dates, adjust pricing by season, and manage room allocation in real time. The calendar syncs instantly across every view on the site." },
        { img: "/images/ls-checkout.png",  title: "Stripe Deposit & Auto Reminders", desc: "Guests pay a configurable deposit at booking time. The balance-due reminder fires automatically 48 hours before check-in, formatted to match the hotel's brand. No manual follow-up required. No missed payments. The entire post-booking communication runs itself." },
        { img: "/images/ls-revenue.png",   title: "Revenue & Occupancy Dashboard",   desc: "The admin panel shows the owner a live view of upcoming bookings, monthly revenue by room type, and occupancy rate by week. For the first time in the property's history, every pricing and availability decision is backed by actual data rather than gut feel and a paper diary." },
      ],
      overview: "LuxStay is a 14-room boutique hotel that had built its entire reservations operation on top of Booking.com and Airbnb. It worked — until the owner ran the numbers. Every booking was costing 30% in OTA commission. In a strong summer week, that was thousands handed to a platform. Worse, the hotel had zero access to guest contact details. By contract, the OTAs owned that relationship. There was no email list, no repeat-guest programme, and no way to know who had actually stayed.\n\nWe replaced that dependency with a fully owned booking infrastructure: a custom Next.js site with live room availability, Stripe deposit checkout, automated email sequences, and an admin panel the front desk team uses every day.\n\nThe scope was deliberately tight. Three weeks is not enough time to build everything — so we built only what mattered: one availability model, one checkout flow, one confirmation template. We resisted every feature request that didn't directly affect booking conversion. The result went live on day 21.",
      problem: "The hotel was paying Booking.com 30% per reservation with no alternative. In peak season that translated to thousands per week handed to an OTA. They had no guest email list, no way to send an early-bird promotion, and no visibility into which room types were actually driving revenue. Their website was a static page with a phone number and a Booking.com iframe — which, by design, sent every browsing guest straight back to the OTA to complete the booking.",
      milestones: [
        { marker: "Day 0",  event: "Discovery — full booking journey mapped end-to-end" },
        { marker: "Day 4",  event: "UI design approved — mobile checkout flow prioritised" },
        { marker: "Day 12", event: "Core availability engine and booking flow complete" },
        { marker: "Day 18", event: "Stripe integration + automated reminder emails live" },
        { marker: "Day 21", event: "Launched on custom domain — first direct booking same day" },
        { marker: "Week 8", event: "Direct bookings doubled · OTA commission at zero" },
      ],
      beforeGallery: ["/images/ls-before.png"],
      afterGallery:  ["/images/ls-homepage.png"],
      tech: ["Next.js 14", "Stripe", "Resend", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel", "Google Analytics 4"],
      outcome: "In the first two months post-launch, direct bookings doubled compared to the same period the prior year. The hotel recovered the full platform build cost in saved OTA commission within six weeks. The owner now runs seasonal promotions directly to a growing list of past guests and has full revenue and occupancy visibility for the first time in the property's history. The Booking.com widget was taken off the old site on launch day and has not been restored.",
      gallery: ["/images/ls-hero.png"],
      videoUrl: "/videos/luxstay.mp4",
    },
  },
  {
    id: 3, name: "TaskFlow", type: "SaaS Web App", color: "#3B82F6",
    desc: "A 12-person creative agency was running live projects across Notion, Slack, three spreadsheets, and a shared Google Drive — and losing clients because nobody could see what was happening. Custom project management platform with a white-labelled client portal, shipped in 5 weeks. Zero manual status reports on day one.",
    slides: [
      { img:"/images/a7.png", a:"#DBEAFE", b:"#1D4ED8" },
      { img:"/images/a8.png", a:"#93C5FD", b:"#1E40AF" },
      { img:"/images/a9.png", a:"#BFDBFE", b:"#2563EB" },
    ],
    details: {
      timeline: "5 weeks",
      tagline: "Two days of discovery. Five weeks to ship. Zero rewrites.",
      quote: { text: "The first Monday after launch, nobody wrote a status email. That had never happened before. The client portal alone re-engaged two accounts we'd lost.", author: "Priya M.", role: "Managing Director" },
      metrics: [
        { label: "Hours saved / wk",  value: "6+" },
        { label: "Tools replaced",    value: "4" },
        { label: "Onboarding time",   value: "−80%" },
        { label: "Client NPS delta",  value: "+42" },
      ],
      flow: [
        { name: "PM Creates Project", desc: "Sets up a project with brief, deliverables, and deadlines — all in one place, visible to the whole team the moment it's created. No separate Slack message, no Notion doc to update." },
        { name: "Tasks Assigned",     desc: "Work is broken into tasks with owners, due dates, priority levels, and file attachment slots. Every task is visible to the whole team — no context lives in anyone's inbox." },
        { name: "Team Collaborates",  desc: "Status updates, comments, and file changes propagate instantly to every team member via WebSockets. No page refresh required. Three people working the same account simultaneously see the same state." },
        { name: "Files Delivered",    desc: "Deliverables are uploaded directly to tasks — designs, copy docs, exported assets. Every upload is versioned. The client is notified automatically when a deliverable is ready." },
        { name: "Client Reviews",     desc: "The client logs into a read-only, white-labelled portal — their brand, not the agency's tool. They see project progress, milestones, and uploaded deliverables. No internal discussion, no pricing, no admin is visible." },
        { name: "Digest Sent",        desc: "Every Monday at 8am, an automated status digest is emailed to all stakeholders — aggregated from live task data. No human writes it. No one forgets to send it on a heavy week." },
      ],
      features: [
        { img: "/images/a7.png", title: "Real-Time Task Board",             desc: "Task creation, assignment, status updates, and comments all propagate instantly via WebSockets. No page refresh, no 'did you see my update?' messages. When multiple people are working the same account simultaneously, they see the same state — always. The board was designed around how this specific agency works, not around a generic PM framework." },
        { img: "/images/a8.png", title: "White-Labelled Client Portal",     desc: "A separately branded, read-only view the agency sends to each client — their logo, their colours, their project. Clients see live progress, milestone status, and uploaded deliverables. None of the internal discussion, billable hours, or team notes are ever visible. Two previously churned clients re-engaged after seeing a demo of the portal during the sales call." },
        { img: "/images/a9.png", title: "Automated Weekly Digest",          desc: "A scheduled function aggregates task completion data every Sunday night and emails a formatted status report to all stakeholders at 8am Monday. The format was designed by the agency's most senior PM to match exactly what she had been writing manually every Friday afternoon — word for word, minus the 90 minutes it took her to produce it." },
        { img: "/images/a7.png", title: "File Deliverables & Version History", desc: "Files attach directly to the tasks they belong to — designs, copy docs, exported assets. Every upload is versioned so the team can roll back without hunting through email chains. Clients download final deliverables from the portal without needing a shared Drive folder, a WeTransfer link, or a follow-up Slack message." },
        { img: "/images/a8.png", title: "Team Workload View",               desc: "A capacity overview showing every team member's active tasks, due dates, and estimated hours for the week. The MD reviews it every Monday morning to spot overloaded team members before they become a delivery risk. She described it as the most useful thing we built — something that was simply not possible when work was scattered across four separate tools." },
      ],
      overview: "A 12-person creative agency was drowning in tool fragmentation. Client projects lived in Notion, conversations happened in Slack threads that quickly became unsearchable, timelines were tracked in three different spreadsheets, and client updates were written manually every Friday afternoon by whoever had time. No one had a single view of what was happening across all live accounts simultaneously — and clients had zero visibility unless someone wrote them an email.\n\nThe agency had trialled Asana and Monday.com. Both were rejected within weeks: too generic, too much configuration required before they became useful, and neither offered the feature the agency needed most — a clean, white-labelled client-facing view that showed progress without exposing internal discussion or pricing.\n\nWe spent two days in discovery sessions with the full team — PMs, designers, and the MD — mapping the exact lifecycle of a project from brief to final delivery. Every step was documented, every tool involved identified. The custom build decision came down to one non-negotiable requirement: a client portal that looked and felt like the agency's own product, not a third-party tool they were renting access to.",
      problem: "Project managers were spending more than 6 hours every week writing manual status emails to clients — often on Friday afternoons, often incomplete. New hires took three full days to get up to speed because context was scattered across Notion, Slack, email threads, and whoever's memory happened to hold the relevant detail. Two clients had churned in the previous quarter citing 'lack of visibility' in their exit interviews. Both had stopped receiving timely updates during a period of heavy delivery.",
      milestones: [
        { marker: "Day 0",   event: "2-day discovery sprint with full team — workflow mapped in detail" },
        { marker: "Day 7",   event: "Data model, API architecture, and WebSocket strategy finalised" },
        { marker: "Day 21",  event: "Internal alpha — real-time task board live and tested by the team" },
        { marker: "Day 28",  event: "White-labelled client portal shipped to first test account" },
        { marker: "Day 35",  event: "Full agency team migrated to production" },
        { marker: "Month 1", event: "Zero manual status reports · new hire onboarding −80%" },
      ],
      beforeGallery: ["/images/a8.png", "/images/a8.png", "/images/a8.png"],
      afterGallery:  ["/images/a7.png", "/images/a9.png", "/images/a7.png"],
      tech: ["Next.js 14", "Socket.io", "Resend", "Prisma", "PostgreSQL", "Cloudinary", "Tailwind CSS", "Vercel", "Railway"],
      outcome: "Within the first month, manual status reporting dropped to zero across the entire team — not as a policy, but because the portal made it unnecessary. Both clients who had churned citing lack of visibility were re-engaged after seeing a live demo of the portal. New hire onboarding dropped from three days to half a day. The agency's senior PM described the first Monday after launch as 'the first time I started the week without writing emails'.",
      gallery: ["/images/a7.png", "/images/a8.png", "/images/a9.png"],
    },
  },
  {
    id: 4, name: "ShopEase", type: "E-commerce Platform", color: "#A855F7",
    desc: "A fashion brand had been selling 200+ SKUs on Daraz for three years — paying 15% commission per sale and owning none of their customers. Built a fully owned storefront with bKash + Stripe checkout, custom inventory admin, and a promotions engine in 4 weeks. Repeat purchase rate up 60%.",
    slides: [
      { img:"/images/a13.png", a:"#EDE9FE", b:"#7C3AED" },
      { img:"/images/a13.png", a:"#C084FC", b:"#6D28D9" },
      { img:"/images/a13.png", a:"#F3E8FF", b:"#9333EA" },
    ],
    details: {
      timeline: "4 weeks",
      tagline: "Three years of sales. Zero customers owned. We fixed that.",
      quote: { text: "We built three years of sales on a platform that owned all our customers. Now we own them. The repeat rate tells the whole story.", author: "Rafi H.", role: "Founder" },
      metrics: [
        { label: "Platform commission", value: "→ 0%" },
        { label: "Time to ship",        value: "4 wks" },
        { label: "SKUs at launch",      value: "200+" },
        { label: "Repeat rate",         value: "+60%" },
      ],
      flow: [
        { name: "Customer Browses",  desc: "Lands on the storefront and filters by category, size, or colour. Sub-1-second page loads even on a 4G connection — designed for a mobile-first customer base." },
        { name: "Product Detail",    desc: "Views a variant selector, real-time stock level, photography, and full product description. Stock updates live from the admin panel — out-of-stock variants are automatically disabled." },
        { name: "Adds to Cart",      desc: "Cart persists across sessions. Applying a coupon code triggers the discount engine — percentage, flat-rate, or minimum-order rules all configurable by the owner without a developer." },
        { name: "Checks Out",        desc: "Two-step checkout: delivery address, then payment. Stripe for card payments, bKash for mobile money — both available in a single flow, both confirmed within seconds." },
        { name: "Order Confirmed",   desc: "SMS and email confirmation fire within 5 seconds of the order being placed. The order appears instantly in the admin dashboard, ready for fulfilment." },
        { name: "Admin Fulfils",     desc: "Staff pick, pack, and mark orders shipped from the admin panel. The customer receives an automatic tracking notification. No manual emails, no spreadsheet updates." },
      ],
      features: [
        { img: "/images/a13.png", title: "Storefront & Product Catalogue",     desc: "A fast, mobile-first storefront with category navigation, variant selectors (size, colour, and any custom attribute), real-time stock indicators, and sub-1-second page loads. Every product page is SEO-structured — title, description, and image alt text indexed from day one. The entire 200+ SKU catalogue was migrated from Daraz via bulk CSV import on launch day." },
        { img: "/images/a13.png", title: "Dual-Payment Checkout",               desc: "Stripe for card payments and bKash for Bangladeshi mobile money — both in a single, two-step checkout flow. The bKash integration required direct merchant API work: sandbox testing, callback signature verification, and handling three distinct payment failure states that the official documentation significantly understates. All edge cases were caught and resolved during a two-day QA sprint before go-live." },
        { img: "/images/a13.png", title: "Product & Inventory Admin",           desc: "The founder adds products, configures variants, adjusts stock levels, and fulfils orders entirely from the custom admin panel — no developer required for any routine operation. Stock levels update in real time across the storefront. An out-of-stock variant cannot be added to cart. Bulk CSV import handled the initial 200+ SKU migration in under an hour." },
        { img: "/images/a13.png", title: "Coupon & Promotions Engine",          desc: "Time-limited discount codes, percentage or flat-rate offers, minimum order value thresholds, and single-use influencer codes — all configurable from the admin panel. The founder ran a launch promotion on day one of go-live without any developer involvement. It generated 47 orders in the first 24 hours." },
        { img: "/images/a13.png", title: "Customer Accounts & Order History",   desc: "Customers create accounts, view their full order history, save delivery addresses, and re-order previous purchases in two taps. Every account builds a purchase history that feeds directly into the owner's marketing — the monthly email campaigns powered by this data now drive more than 60% of all repeat orders." },
      ],
      overview: "The client had been selling exclusively on Daraz for three years. The volume was there. The margin wasn't. Every sale cost 15% in platform commission, and in return the business received no customer contact data — not a single email address from three years of transactions. There was no email list, no way to run a promotion outside of Daraz's paid ad system, and no visibility into which products were actually driving profit.\n\nWhen a new competitor entered the category, undercut on price, and used Daraz's promoted listings to take the top search positions, the business had no direct channel to respond. No customer list to email. No brand presence off the platform. No data on who their best customers were or what they bought repeatedly.\n\nWe built a fully owned e-commerce operation in four weeks: a storefront, dual payment checkout, inventory and order management, a promotions engine, and customer accounts — with all 200+ SKUs migrated from Daraz on launch day. The bKash integration was the most technically demanding piece of the project. The merchant API documentation is sparse, the sandbox environment diverges from production in ways that aren't documented, and the payment failure states require custom handling that isn't covered in any official guide. We resolved all of it in a two-day QA sprint before going live.",
      problem: "The 15% Daraz commission was the visible cost. The structural damage was deeper: three years of sales volume built on a platform that owned every customer relationship. No email list. No repeat-purchase capability. No ability to know which products were selling to whom, or why. When a competitor outspent them on Daraz ads and took the top listings, the business had no owned channel to fall back on and no customer base to speak to directly.",
      milestones: [
        { marker: "Day 0",   event: "Scope locked — 200+ SKUs catalogued from Daraz export" },
        { marker: "Day 3",   event: "Design system, product UI, and checkout flow approved" },
        { marker: "Day 14",  event: "Core storefront, cart, and Stripe checkout built" },
        { marker: "Day 22",  event: "bKash merchant API integrated and QA'd — all edge cases resolved" },
        { marker: "Day 28",  event: "Live — full catalogue migrated, launch promotion active" },
        { marker: "Month 3", event: "Platform commission → 0% · repeat purchase rate +60%" },
      ],
      beforeGallery: ["/images/a13.png", "/images/a13.png", "/images/a13.png"],
      afterGallery:  ["/images/a13.png", "/images/a13.png", "/images/a13.png"],
      tech: ["Next.js 14", "Stripe", "bKash Merchant API", "Prisma", "PostgreSQL", "Cloudinary", "Resend", "Vercel"],
      outcome: "The full 200+ SKU catalogue was live on the owned storefront within 28 days of kickoff. In the first quarter, the business retained the equivalent of six months of Daraz commission fees. Repeat purchase rate rose 60% compared to the Daraz period — directly attributable to owning the customer email list and running monthly re-engagement promotions for the first time. The founder called it 'the most valuable thing we've ever invested in'.",
      gallery: ["/images/a13.png", "/images/a13.png", "/images/a13.png"],
    },
  },
  {
    id: 5, name: "MediBook", type: "Healthcare App", color: "#0D9488",
    desc: "Booking a verified specialist in Ghana could take days of phone calls, referrals, and physical visits — and for patients outside the major cities, it often meant a full day of travel. Built a cross-platform Flutter app with live availability, video consultations, and Paystack mobile money in 8 weeks. 40+ doctors live at launch.",
    slides: [
      { img:"/images/a13.png", a:"#CCFBF1", b:"#0F766E" },
      { img:"/images/a14.png", a:"#5EEAD4", b:"#0D9488" },
      { img:"/images/a14.png", a:"#99F6E4", b:"#115E59" },
    ],
    details: {
      timeline: "8 weeks",
      tagline: "Every technical call made around one question: what does this patient actually need?",
      quote: { text: "Patients from regions where specialist care was a full day's travel away are now booking in under 3 minutes. That's what the product is actually for.", author: "Dr. Kwame A.", role: "Co-founder, MediBook" },
      metrics: [
        { label: "Doctors at launch", value: "40+" },
        { label: "Avg booking time",  value: "<3 min" },
        { label: "Regions covered",   value: "6" },
        { label: "Time to ship",      value: "8 wks" },
      ],
      flow: [
        { name: "Patient Searches",   desc: "Filters verified doctors by specialty, region, language spoken, consultation type (in-person or video), and real-time appointment availability. Results are ranked by next available slot." },
        { name: "Views Profile",      desc: "Reads the doctor's credentials, verified registration number, patient ratings, consultation fee, and available time slots — all in a single screen." },
        { name: "Selects Slot",       desc: "Taps an available time on the doctor's live calendar. The slot is held for 5 minutes while payment is processed — preventing double-bookings without requiring upfront commitment." },
        { name: "Pays via Paystack",  desc: "Card or mobile money payment processed via Paystack — the dominant payment infrastructure in Ghana. Receipt fires via push notification and email in under 4 seconds." },
        { name: "Gets Confirmed",     desc: "Booking confirmed simultaneously on both the patient's and doctor's dashboards. Reminder push notifications fire 24 hours and 1 hour before the appointment." },
        { name: "Joins Consultation", desc: "Agora-powered video call with a waiting room UI, session recording consent screen, and in-call doctor notes. Automatic reconnection on drop. No third-party app required." },
      ],
      features: [
        { img: "/images/a13.png", title: "Verified Doctor Directory",       desc: "40 doctors across 8 specialties were verified before launch — credentials, medical registration numbers, and practice locations all manually reviewed by the MediBook team. Patients filter by specialty, availability, language spoken, consultation type, and fee range. Search results rank by next available slot rather than by any paid placement." },
        { img: "/images/a14.png", title: "Real-Time Appointment Booking",   desc: "Patients select an available slot on the doctor's live calendar — the slot is held for 5 minutes while payment is processed. Confirmation lands via push notification and email the moment the booking is committed. A reminder push fires 24 hours before the appointment and again 1 hour before. No phone call required at any step." },
        { img: "/images/a14.png", title: "In-App Video Consultations",      desc: "Agora SDK powers the video consultations after evaluation against Daily.co and Twilio on Flutter SDK stability and call quality at low bandwidth. The waiting room UI, consent flow, automatic reconnection logic, and post-call notes interface were all built custom. Patients from 6 regions outside Accra have used this feature to access specialists they could not previously reach without travelling." },
        { img: "/images/a14.png", title: "Paystack Mobile Money Payments",  desc: "Card and mobile money payments are both natively integrated via Paystack — chosen specifically because mobile money is the primary transaction method for the target patient base in Ghana. Payment confirmation appears in under 4 seconds. Doctors receive weekly automated settlements via the platform dashboard with a full transaction breakdown per appointment." },
        { img: "/images/a13.png", title: "Patient Records & Appointment History", desc: "Patients access their full appointment history, upcoming bookings, and downloadable post-consultation notes from a single screen. Every past interaction is stored — enabling genuine continuity of care across multiple visits without a patient needing to re-explain their history to each new practitioner." },
      ],
      overview: "MediBook was built to fix a structural gap in access to specialist healthcare. In Ghana's major cities, finding a verified doctor involves navigating informal referral networks, calling multiple clinics, and hoping for availability. Outside those cities, the barrier is significantly higher — a patient in a secondary region needing a cardiologist or dermatologist might face a full day of travel with no guarantee the specialist is available when they arrive.\n\nWe built a cross-platform Flutter app covering the complete patient journey: discover a verified doctor, check live appointment availability, book and pay, attend an in-person or video consultation, and access past records and consultation notes.\n\nFlutter was chosen over separate native iOS and Android builds because an 8-week timeline cannot support two codebases at once. A single codebase shipping to both platforms simultaneously was non-negotiable. Firebase handled real-time availability syncing and push notifications without requiring a custom notification infrastructure from scratch. Agora was selected for video consultations after evaluating three SDK options — Agora's Flutter plugin was the most stable of the three at the time of evaluation, and its performance on variable mobile connections was demonstrably better in testing.",
      problem: "No reliable, public directory of verified Ghanaian doctors existed in digital form. Patients relied on personal referrals or walked into clinics hoping the right specialist was available. Doctors managed their appointment books via paper calendars and phone calls — a system that produced regular double-bookings and high no-show rates. For patients outside the two major cities, seeing a specialist meant a day of travel with no certainty of outcome.",
      milestones: [
        { marker: "Day 0",  event: "Product scope defined — Flutter architecture and data model planned" },
        { marker: "Day 7",  event: "Doctor profile system and real-time availability engine designed" },
        { marker: "Day 28", event: "iOS + Android alpha shipped to internal testers" },
        { marker: "Day 42", event: "Agora video consultations and Paystack payments fully integrated" },
        { marker: "Day 49", event: "40 doctors onboarded, credentialed, and verified" },
        { marker: "Day 56", event: "Public launch across 6 regions" },
      ],
      beforeGallery: ["/images/a14.png", "/images/a14.png", "/images/a14.png"],
      afterGallery:  ["/images/a13.png", "/images/a14.png", "/images/a13.png"],
      tech: ["Flutter 3", "Dart", "Firebase Auth", "Firestore", "FCM", "Agora SDK", "Paystack", "Cloud Functions", "Google Maps SDK"],
      outcome: "MediBook launched with 40 verified doctors across 8 medical specialties. Average time from opening the app to a confirmed, paid booking is under 3 minutes. The video consultation feature is being used by patients in 6 regions — patients who previously had no digital pathway to a verified specialist without physically travelling. The founding team entered a seed funding process using the launch adoption figures as their primary proof of product-market fit.",
      gallery: ["/images/a13.png", "/images/a14.png", "/images/a14.png"],
    },
  },
  {
    id: 6, name: "NexusBot", type: "AI Support Agent", color: "#6366F1",
    desc: "A SaaS company's support team was fielding 200+ tickets a week with 3 agents — 78% of them variations of the same 20 questions. Built a GPT-4 RAG agent trained on their own product documentation. Live in 3 weeks. 78% of tickets now resolved with zero human involvement, response time under 2 seconds.",
    slides: [
      { img:"/images/a14.png", a:"#E0E7FF", b:"#4338CA" },
      { img:"/images/a14.png", a:"#A5B4FC", b:"#3730A3" },
      { img:"/images/a14.png", a:"#C7D2FE", b:"#4F46E5" },
    ],
    details: {
      timeline: "3 weeks",
      tagline: "Grounded AI or no AI. Their docs, not the model's imagination.",
      quote: { text: "78% of tickets handled without a human, and our two best agents are now entirely focused on strategic accounts. That was the goal from day one.", author: "Sarah L.", role: "Head of Support Operations" },
      metrics: [
        { label: "Tickets deflected", value: "78%" },
        { label: "Response time",     value: "<2s" },
        { label: "Support cost",      value: "−55%" },
        { label: "Time to ship",      value: "3 wks" },
      ],
      flow: [
        { name: "Knowledge Ingested",    desc: "Product docs, help articles, FAQs, and historical support ticket resolutions are chunked, embedded, and indexed into a Pinecone vector store. The index rebuilds nightly — new documentation is live in the bot the next morning." },
        { name: "Customer Asks",         desc: "The customer types a question into the chat widget. The query is embedded in real time using OpenAI's embedding model and sent to the retrieval layer." },
        { name: "Context Retrieved",     desc: "The top-k most semantically relevant documentation chunks are pulled from Pinecone by vector similarity. Only content from the client's own knowledge base is used — GPT-4's general training data is excluded by design." },
        { name: "GPT-4 Answers",         desc: "The retrieved chunks and the original query are sent to GPT-4 with a system prompt that constrains it to the provided context. The answer is grounded, traceable, and sourced from actual product documentation." },
        { name: "Confidence Scored",     desc: "A proprietary confidence layer evaluates the retrieval quality and the response before anything is sent. Low confidence scores trigger escalation — the bot doesn't guess when it doesn't know." },
        { name: "Answered or Escalated", desc: "High confidence: the answer is streamed to the customer in under 2 seconds. Low confidence: the conversation is escalated to a human agent with the full thread, the original query, and the retrieved context already attached." },
      ],
      features: [
        { img: "/images/a14.png", title: "Chat Widget & Streaming UI",          desc: "The customer-facing widget is deliberately minimal — a floating button, a clean chat panel, and streamed response rendering with full markdown support. It opens instantly, requires no login, and is configured to match the client's brand colours and tone. Perceived response latency is under 1 second even before the first token streams back from the model." },
        { img: "/images/a14.png", title: "Grounded RAG Pipeline",               desc: "Every response is generated from retrieved chunks of the client's own documentation — not from GPT-4's general knowledge. The knowledge base is re-indexed nightly, so updated documentation is reflected in bot responses without any manual intervention. The admin dashboard shows which specific doc chunks informed each response — answers are fully traceable, not opaque." },
        { img: "/images/a14.png", title: "Confidence-Based Escalation",         desc: "A custom confidence scoring layer evaluates each response before it is sent. If retrieval confidence falls below threshold, the bot does not guess — it escalates to a human agent with the full conversation history, the original query, and the retrieved context already packaged. Support agents only receive tickets that genuinely require human judgement, with all context pre-gathered." },
        { img: "/images/a14.png", title: "One-Line Embed & Admin Dashboard",    desc: "NexusBot deploys on any site or app with a single script tag — no engineering involvement, no build pipeline changes. The client's non-technical customer success team installed it in 4 minutes on their first attempt. The admin dashboard lets non-technical staff review flagged conversations, mark incorrect answers for retraining, and trigger a knowledge base rebuild from a single button." },
        { img: "/images/a14.png", title: "Multi-Language & Helpdesk Webhooks", desc: "The bot auto-detects the customer's query language and responds in kind — English, French, Spanish, and Arabic handled without any configuration. Escalated conversations push directly into the client's existing helpdesk via webhook, appearing as new tickets in Intercom or Zendesk with the full NexusBot conversation thread, retrieved context, and confidence score all pre-attached." },
      ],
      overview: "The client runs a B2B SaaS product with a rapidly growing user base and a support team that hadn't scaled with it. Three agents were handling over 200 tickets a week. An analysis of the previous quarter's ticket data revealed that 78% of incoming queries were variations of the same 20 questions — all of them answered somewhere in the product documentation. The documentation existed. Customers just weren't reading it, and agents were answering the same questions on repeat, every day.\n\nAverage first response time was over 4 hours. Two of the three agents were spending the majority of their working week on tier-1 queries that required no human judgement. The head of support wanted to redeploy both of them to strategic account work — but couldn't justify it until tier-1 volume was handled elsewhere.\n\nWe built a GPT-4 retrieval-augmented generation pipeline trained exclusively on the client's own product documentation, help articles, and historical ticket resolutions. The architecture requirement was non-negotiable: every answer had to be grounded in the client's actual documentation, not generated from general model knowledge. We evaluated Pinecone, Weaviate, and pgvector as the vector store — Pinecone was selected for its query latency consistency at the expected volume. The embed-via-script-tag deployment model was a product decision made on day one, because any non-technical person in the organisation needed to be able to ship it independently.",
      problem: "Three support agents, 200+ tickets per week, 4-hour average first response time. 78% of those tickets were questions already answered in the product documentation — the knowledge existed, but it was inaccessible to customers and too slow to retrieve manually at scale. Onboarding a new support agent took two weeks and still produced inconsistent answers for anything beyond the most common questions. The head of support wanted to redeploy two agents entirely to proactive customer success work, but couldn't do it until tier-1 ticket volume was handled another way.",
      milestones: [
        { marker: "Day 0",   event: "Knowledge base audit — 340 documentation pages chunked and embedded" },
        { marker: "Day 3",   event: "RAG pipeline built, first retrieval accuracy tests passing" },
        { marker: "Day 8",   event: "Confidence scoring layer calibrated against 200 historical support tickets" },
        { marker: "Day 10",  event: "Embed script, streaming UI, and admin dashboard complete" },
        { marker: "Day 21",  event: "Live on client site — all support channels active" },
        { marker: "Month 1", event: "78% ticket deflection · avg response time <2s · two agents redeployed" },
      ],
      beforeGallery: ["/images/a14.png", "/images/a14.png", "/images/a14.png"],
      afterGallery:  ["/images/a14.png", "/images/a14.png", "/images/a14.png"],
      tech: ["GPT-4 (OpenAI)", "LangChain", "Pinecone", "FastAPI", "Next.js 14", "Python 3.11", "Vercel", "Intercom", "Zendesk"],
      outcome: "In the first full month of deployment, NexusBot resolved 78% of incoming support tickets without any human involvement. Average first response time dropped from over 4 hours to under 2 seconds. The overall support team ticket load fell by 55%. Both agents the head of support had wanted to redeploy to strategic account work were redeployed within 30 days of launch. The knowledge base now updates automatically each night — no maintenance required.",
      gallery: ["/images/a14.png", "/images/a14.png", "/images/a14.png"],
    },
  },
];

/* ─── Helpers ────────────────────────────────────────────────────────────────── */
const IMG_V = 2;
function imgSrc(s: string) { return `${s}?v=${IMG_V}`; }
type Slide = { img?: string; a?: string; b?: string; pos?: string; bg?: string };
function slideBg(s: Slide) { return s.a ? `linear-gradient(140deg,${s.a},${s.b})` : "transparent"; }

const N_SLIDES = 3;
const IMG_MS   = 3200;

/* ─── Section heading ────────────────────────────────────────────────────────── */
function SHead({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex-1 h-px" style={{ background: `${color}20` }} />
      <span
        className="shrink-0 text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full"
        style={{
          color,
          background: `${color}10`,
          border: `1.5px solid ${color}28`,
        }}
      >
        {label}
      </span>
      <div className="flex-1 h-px" style={{ background: `${color}20` }} />
    </div>
  );
}

/* ─── Feature Showcase ───────────────────────────────────────────────────────── */
function FeatureShowcase({ features, color }: { features: Feature[]; color: string }) {
  const [active, setActive] = useState(0);
  const f = features[active];

  return (
    <div>
      {/* Large image */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ aspectRatio: "16/9", border: `1.5px solid ${color}20` }}>
        <AnimatePresence mode="wait">
          <motion.img key={active}
            src={imgSrc(f.img)} alt={f.title}
            className="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] object-contain"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }} />
        </AnimatePresence>

        {/* Counter badge */}
        <div className="absolute top-3 right-3 pointer-events-none">
          <span className="text-[10px] font-black px-2.5 py-1 rounded-full"
            style={{ background: color, color: "#fff" }}>
            {active + 1} / {features.length}
          </span>
        </div>

        {/* Prev / Next arrows on image */}
        {features.length > 1 && (
          <>
            <button onClick={() => setActive(i => (i - 1 + features.length) % features.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M8 2L4 6.5L8 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={() => setActive(i => (i + 1) % features.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M5 2L9 6.5L5 11" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Title + description — animated on change */}
      <AnimatePresence mode="wait">
        <motion.div key={active}
          className="mt-4 flex flex-col gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}>
          <h4 className="font-display font-black text-[16px] sm:text-[17px] text-txt leading-tight">{f.title}</h4>
          <p className="text-[13px] text-txt-2 leading-[1.8]">{f.desc}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─── Scroll arrow button (shared) ──────────────────────────────────────────── */
function ScrollBtn({ dir, color, onClick }: { dir: "left" | "right"; color: string; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-150 hover:scale-110 border-2"
      style={{ borderColor: `${color}30`, background: `${color}10`, color }}>
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        {dir === "left"
          ? <path d="M8 2L4 6.5L8 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          : <path d="M5 2L9 6.5L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        }
      </svg>
    </button>
  );
}

/* ─── Flow Diagram ───────────────────────────────────────────────────────────── */
function FlowDiagram({ flow, color }: { flow: FlowStep[]; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * 180, behavior: "smooth" });

  return (
    <div>
      {/* Scroll controls */}
      <div className="flex justify-end gap-2 mb-3">
        <ScrollBtn dir="left"  color={color} onClick={() => scroll(-1)} />
        <ScrollBtn dir="right" color={color} onClick={() => scroll(1)}  />
      </div>

      <div ref={ref} className="overflow-x-auto pb-3 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
        <div className="flex items-start gap-0 min-w-max">
          {flow.map((step, i) => (
            <div key={i} className="flex items-start shrink-0">
              <div className="w-40 flex flex-col gap-2.5 p-4 rounded-2xl"
                style={{ background: `${color}08`, border: `1.5px solid ${color}20` }}>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-black text-white"
                    style={{ background: color }}>
                    {i + 1}
                  </div>
                  <p className="font-display font-black text-[12px] text-txt leading-tight">{step.name}</p>
                </div>
                <p className="text-[11px] text-txt-2 leading-[1.6]">{step.desc}</p>
              </div>
              {i < flow.length - 1 && (
                <div className="flex items-center self-start mt-5 px-1.5 shrink-0">
                  <svg width="22" height="10" viewBox="0 0 22 10" fill="none">
                    <line x1="0" y1="5" x2="16" y2="5" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"/>
                    <path d="M13 2L19 5L13 8" stroke={color} strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Before / After Gallery ─────────────────────────────────────────────────── */
function BeforeAfterGallery({
  beforeGallery, afterGallery, color
}: { beforeGallery: string[]; afterGallery: string[]; color: string }) {
  const [tab, setTab] = useState<"before" | "after">("before");
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const [paused, setPaused] = useState(false);
  useEffect(() => { setIdx(0); }, [tab]);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setTab(prev => prev === "before" ? "after" : "before"), 3000);
    return () => clearInterval(t);
  }, [paused]);

  const images = tab === "before" ? beforeGallery : afterGallery;
  const isBefore = tab === "before";
  const dotColor = isBefore ? "#9ca3af" : color;

  function go(d: 1 | -1) {
    setDir(d);
    setIdx(prev => (prev + d + images.length) % images.length);
  }

  const imgVariants = {
    enter: { opacity: 0, scale: 1.06, filter: "blur(6px)" },
    show:  { opacity: 1, scale: 1,    filter: "blur(0px)" },
    exit:  { opacity: 0, scale: 0.96, filter: "blur(6px)" },
  };

  /* ── Tabbed slider layout ── */
  return (
    <div>
      {/* Tabs + counter */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          {(["before", "after"] as const).map(t => (
            <button key={t} onClick={() => { setTab(t); setPaused(true); }}
              className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border-2 transition-all duration-200"
              style={{
                borderColor: tab === t ? (t === "before" ? "#9ca3af" : color) : "#F0DDB0",
                background:  tab === t ? (t === "before" ? "#9ca3af" : color) : "transparent",
                color:       tab === t ? "#fff" : "#6B4E1A",
              }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Image + side arrows */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ border: `1.5px solid ${isBefore ? "#e5e7eb" : `${color}30`}`, aspectRatio: "16/9" }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.img key={`${tab}-${idx}`}
            src={imgSrc(images[idx])} alt=""
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: isBefore ? "grayscale(65%) brightness(0.88)" : "none" }}
            variants={imgVariants}
            initial="enter" animate="show" exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }} />
        </AnimatePresence>

        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: isBefore ? "rgba(0,0,0,0.45)" : `${color}CC`, color: "#fff" }}>
            {tab}
          </span>
        </div>

        {images.length > 1 && (
          <button onClick={() => go(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7L9 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        {images.length > 1 && (
          <button onClick={() => go(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(4px)" }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5 2L10 7L5 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
            className="rounded-full transition-all duration-200"
            style={{ width: i === idx ? 18 : 6, height: 6, background: i === idx ? dotColor : `${dotColor}40` }} />
        ))}
      </div>
    </div>
  );
}

/* ─── Results Timeline ───────────────────────────────────────────────────────── */
function ResultsTimeline({ milestones, color }: { milestones: Milestone[]; color: string }) {
  const last = milestones.length - 1;
  const ITEM_W = 136;
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * ITEM_W * 2, behavior: "smooth" });

  return (
    <div>
      {/* Scroll controls */}
      <div className="flex justify-end gap-2 mb-3">
        <ScrollBtn dir="left"  color={color} onClick={() => scroll(-1)} />
        <ScrollBtn dir="right" color={color} onClick={() => scroll(1)}  />
      </div>

    <div ref={ref} className="overflow-x-auto pb-4 -mx-1 px-1" style={{ scrollbarWidth: "none" }}>
      <div className="relative" style={{ width: ITEM_W * milestones.length, minWidth: "100%" }}>

        {/* ── Top row: time markers ── */}
        <div className="flex mb-3">
          {milestones.map((m, i) => (
            <div key={i} className="flex flex-col items-center" style={{ width: ITEM_W }}>
              <span className="text-[9px] font-black uppercase tracking-[0.18em] leading-none"
                style={{ color: i === last ? color : `${color}65` }}>
                {m.marker}
              </span>
            </div>
          ))}
        </div>

        {/* ── Middle: track + dots ── */}
        <div className="relative flex items-center" style={{ height: 32 }}>
          {/* Full track */}
          <div className="absolute inset-x-[68px]" style={{ top: 15, height: 2, background: `${color}18`, borderRadius: 2 }} />
          {/* Filled progress (all but last gap) */}
          <div className="absolute" style={{ left: 68, top: 15, height: 2, width: `calc(100% - 136px)`, background: `${color}35`, borderRadius: 2 }} />

          {milestones.map((_, i) => {
            const isLast = i === last;
            return (
              <div key={i} className="flex justify-center items-center relative z-10 shrink-0" style={{ width: ITEM_W }}>
                {/* Outer ring for last */}
                {isLast && (
                  <div className="absolute w-7 h-7 rounded-full" style={{ background: `${color}18` }} />
                )}
                <div className="rounded-full border-[2.5px] border-surface"
                  style={{
                    width:      isLast ? 14 : 10,
                    height:     isLast ? 14 : 10,
                    background: isLast ? color : `${color}55`,
                    boxShadow:  isLast ? `0 0 0 4px ${color}22, 0 0 16px ${color}50` : "none",
                  }} />
              </div>
            );
          })}
        </div>

        {/* ── Bottom row: event labels ── */}
        <div className="flex mt-3">
          {milestones.map((m, i) => {
            const isLast = i === last;
            return (
              <div key={i} className="flex flex-col items-center px-2" style={{ width: ITEM_W }}>
                <p className={`text-center leading-snug ${isLast ? "text-[12px] font-black" : "text-[11px] font-medium"}`}
                  style={{ color: isLast ? color : "#6B4E1A" }}>
                  {m.event}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
    </div>
  );
}

/* ─── Video Section ──────────────────────────────────────────────────────────── */
function VideoSection({ url, color }: { url: string; color: string }) {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  function handleMetadata(e: React.SyntheticEvent<HTMLVideoElement>) {
    const v = e.currentTarget;
    setAspectRatio(v.videoWidth / v.videoHeight);
  }
  const isPortrait = aspectRatio !== null && aspectRatio < 1;
  return (
    <div>
      <SHead label="Founder Insight" color={color} />
      <div className={`rounded-2xl overflow-hidden ${isPortrait ? "mx-auto" : "w-full"}`}
        style={{ border: `1.5px solid ${color}20`, maxWidth: isPortrait ? 220 : "100%" }}>
        <video src={url} controls playsInline preload="metadata" onLoadedMetadata={handleMetadata}
          className="w-full block" style={{ background: "#000" }} />
      </div>
    </div>
  );
}

/* ─── Modal Founder Video ────────────────────────────────────────────────────── */
function ModalVideo({ url, color }: { url: string; color: string }) {
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);

  function toggleMute() {
    if (!ref.current) return;
    ref.current.muted = !muted;
    setMuted(!muted);
  }

  function fmt(s: number) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  function onTime() {
    if (!ref.current) return;
    const c = ref.current.currentTime;
    const d = ref.current.duration || 1;
    setCurrent(c);
    setProgress((c / d) * 100);
  }

  function onMeta() {
    if (ref.current) setDuration(ref.current.duration);
  }

  return (
    <div className="relative p-2 pb-3 pr-3">
      {/* Offset accent cards for depth */}
      <div className="absolute inset-0 rounded-2xl" style={{ background: `${color}20`, transform: "rotate(2.5deg) translate(5px, 5px)" }} />
      <div className="absolute inset-0 rounded-2xl" style={{ background: `${color}12`, transform: "rotate(-1deg) translate(2px, 3px)" }} />

      {/* Video */}
      <div className="relative overflow-hidden rounded-xl">
        <video ref={ref} src={url} autoPlay muted loop playsInline className="w-full h-auto block"
          onTimeUpdate={onTime} onLoadedMetadata={onMeta} />

        {/* Controls */}
        <div className="absolute bottom-2 left-0 right-0 px-2 flex items-center justify-between z-10">
          <span className="text-[9px] tabular-nums px-1.5 py-0.5 rounded"
            style={{ color: "rgba(255,255,255,0.8)", background: "rgba(0,0,0,0.38)", backdropFilter: "blur(6px)" }}>
            {fmt(current)} / {fmt(duration)}
          </span>
          <div className="flex items-center gap-1">
            <button onClick={() => { if (ref.current) ref.current.currentTime = Math.max(0, ref.current.currentTime - 5); }}
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(4px)" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-4"/>
              </svg>
            </button>
            <button onClick={() => { if (ref.current) ref.current.currentTime = Math.min(ref.current.duration, ref.current.currentTime + 5); }}
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(4px)" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.49-4"/>
              </svg>
            </button>
            <button onClick={toggleMute}
              className="w-6 h-6 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(4px)" }}>
              {muted ? (
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
              ) : (
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div ref={barRef} className="absolute bottom-0 left-0 right-0 h-1 z-10 cursor-pointer"
          style={{ background: "rgba(255,255,255,0.15)" }}
          onMouseDown={onBarMouseDown}>
          <div className="h-full" style={{ width: `${progress}%`, background: color }} />
        </div>
      </div>
    </div>
  );
}

/* ─── Case Study Modal ───────────────────────────────────────────────────────── */
function CaseStudyModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const d = project.details;
  const c = project.color;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-dark/75 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative z-10 w-full sm:max-w-3xl max-h-[96vh] sm:max-h-[90vh] flex flex-col bg-surface rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{ boxShadow: `0 0 0 2px ${c}35, 0 40px 100px rgba(0,0,0,0.35)` }}
        initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ── Sticky header ── */}
        <div className="shrink-0 flex items-center justify-between px-5 py-3.5 border-b-2 border-border bg-surface z-20">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c }} />
              <span className="font-display font-black text-[15px] text-txt leading-none">{project.name}</span>
              <span className="hidden sm:inline-flex items-center text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                style={{ color: c, background: `${c}10`, border: `1.5px solid ${c}25` }}>
                {project.type}
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 pl-[18px]">
              <svg width="9" height="9" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="9" width="14" height="10" rx="2" stroke="#B08040" strokeWidth="2"/>
                <path d="M7 9V6a3 3 0 016 0v3" stroke="#B08040" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[9px] font-bold leading-none" style={{ color: "#B08040" }}>Client and project names anonymised by mutual agreement</span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[11px] font-bold text-txt-2 hidden sm:inline">⏱ {d.timeline}</span>
            <button onClick={onClose}
              className="w-8 h-8 rounded-full border-2 border-border flex items-center justify-center text-[11px] font-black text-txt-2 hover:border-txt hover:text-txt transition-colors">
              ✕
            </button>
          </div>
        </div>

        {/* ── Scrollable body ── */}
        <div className="flex-1 overflow-y-auto">

          {/* Hero — identity overlaid on image */}
          <div className="relative w-full" style={{ aspectRatio: d.gallery.length === 1 ? "unset" : "16/8", height: d.gallery.length === 1 ? 340 : "unset" }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeImg} className={d.gallery.length === 1 ? "w-full h-full p-6" : "absolute inset-0"}
                style={{ background: project.slides[activeImg]?.bg ?? slideBg(project.slides[activeImg]) }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}>
                <img src={imgSrc(d.gallery[activeImg])} alt={project.name}
                  className={d.gallery.length === 1 ? "w-full h-full object-contain" : "absolute inset-0 w-full h-full object-cover object-top"} />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.22em] mb-2" style={{ color: c }}>{project.type}</p>
                <h3 className="font-display font-black text-3xl sm:text-[32px] text-white leading-none tracking-tight">{project.name}</h3>
              </div>
              {d.gallery.length > 1 && (
                <div className="flex gap-1.5 shrink-0">
                  {d.gallery.map((img, i) => (
                    <button key={i} onClick={() => setActiveImg(i)}
                      className="w-11 h-8 rounded-xl overflow-hidden border-2 transition-all duration-200"
                      style={{ borderColor: i === activeImg ? c : "rgba(255,255,255,0.18)", opacity: i === activeImg ? 1 : 0.4 }}>
                      <img src={imgSrc(img)} alt="" className="w-full h-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Metrics band — dark, high contrast */}
          <div className="grid grid-cols-4 divide-x divide-white/8" style={{ background: "#130C00" }}>
            {d.metrics.map((m) => (
              <div key={m.label} className="flex flex-col items-center justify-center py-5 px-3 text-center gap-1.5">
                <p className="font-display font-black text-xl sm:text-2xl leading-none" style={{ color: c }}>{m.value}</p>
                <p className="text-[9px] font-bold uppercase tracking-wider text-white/40 leading-tight">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="px-6 sm:px-8 py-9 flex flex-col gap-11">

            {/* Tagline */}
            <p className="font-display font-black text-[17px] sm:text-xl text-txt leading-snug"
              style={{ borderLeft: `3px solid ${c}`, paddingLeft: 18 }}>
              {d.tagline}
            </p>

            {/* Client quote */}
            <div className="py-7 text-center border-y-2 border-border">
              <p className="text-4xl font-black select-none leading-none mb-3"
                style={{ color: `${c}20`, fontFamily: "Georgia, serif" }}>"</p>
              <p className="text-base sm:text-[17px] font-bold italic text-txt leading-relaxed max-w-lg mx-auto">
                {d.quote.text}
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-[11px] font-black text-white"
                  style={{ background: c }}>
                  {d.quote.author.split(" ").map((w: string) => w[0]).join("").slice(0, 2)}
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-black text-txt leading-tight">{d.quote.author}</p>
                  <p className="text-[11px] text-txt-2 mt-0.5">{d.quote.role}</p>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 mt-4 px-2.5 py-1 rounded-full"
                style={{ background: "#FFF3D9", border: "1.5px solid #F0DDB0" }}>
                <svg width="9" height="9" viewBox="0 0 20 20" fill="none">
                  <rect x="3" y="9" width="14" height="10" rx="2" stroke="#B08040" strokeWidth="2"/>
                  <path d="M7 9V6a3 3 0 016 0v3" stroke="#B08040" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span className="text-[9px] font-bold leading-none" style={{ color: "#B08040" }}>Client and project names anonymised by mutual agreement</span>
              </div>
            </div>

            {/* Before & After — full width */}
            <div>
              <SHead label="Before & After" color={c} />
              <BeforeAfterGallery beforeGallery={d.beforeGallery} afterGallery={d.afterGallery} color={c} />
            </div>

            {/* Founder Insight */}
            {d.videoUrl && (
              <div>
                <SHead label="Founder Insight" color={c} />
                <div className="flex flex-col sm:flex-row items-stretch gap-4 rounded-2xl overflow-hidden"
                  style={{ border: `1.5px solid ${c}20` }}>
                  {/* Video */}
                  <div className="sm:w-60 shrink-0 p-[3px]">
                    <ModalVideo url={d.videoUrl} color={c} />
                  </div>
                  {/* Separator */}
                  <div className="hidden sm:flex flex-col items-center justify-center gap-1.5 shrink-0 px-1">
                    <div className="w-px flex-1" style={{ background: `linear-gradient(to bottom, transparent, ${c}30)` }} />
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: `${c}60` }} />
                    <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: `${c}60` }} />
                    <div className="w-px flex-1" style={{ background: `linear-gradient(to top, transparent, ${c}30)` }} />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col justify-center px-5 py-5 gap-2.5">
                    <p className="font-display font-black text-txt text-[15px] leading-snug">
                      Hear it from the founder
                    </p>
                    <p className="text-txt-2 text-[12px] leading-relaxed">
                      The real challenge, what we built, and what changed — briefly explained.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Overview */}
            <div>
              <SHead label="Overview" color={c} />
              {d.overview.split("\n\n").map((para: string, i: number) => (
                <p key={i} className={`text-[13px] sm:text-sm text-txt-2 leading-[1.8] ${i > 0 ? "mt-4" : ""}`}>{para}</p>
              ))}
            </div>

            {/* Problem */}
            <div className="rounded-2xl p-5 sm:p-6" style={{ background: `${c}07`, border: `1.5px solid ${c}18` }}>
              <SHead label="The Problem" color={c} />
              <p className="text-[13px] sm:text-sm text-txt-2 leading-[1.8]">{d.problem}</p>
            </div>

            {/* Product flow */}
            <div>
              <SHead label="How It Works — Full Flow" color={c} />
              <FlowDiagram flow={d.flow} color={c} />
            </div>

            {/* Features */}
            <div>
              <SHead label="What We Built" color={c} />
              <FeatureShowcase features={d.features} color={c} />
            </div>

            {/* Timeline */}
            <div>
              <SHead label="Project Timeline" color={c} />
              <ResultsTimeline milestones={d.milestones} color={c} />
            </div>

            {/* Tech stack */}
            <div>
              <SHead label="Tech Stack" color={c} />
              <div className="flex flex-wrap gap-2">
                {d.tech.map((t: string) => (
                  <span key={t} className="text-[11px] font-bold font-mono px-3 py-1.5 rounded-lg"
                    style={{ border: `1.5px solid ${c}28`, color: c, background: `${c}07` }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="border-t-2 border-border pt-8">
              <SHead label="The Outcome" color={c} />
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                {d.metrics.map(m => (
                  <div key={m.label} className="flex items-baseline gap-2">
                    <span className="font-display font-black text-2xl leading-none" style={{ color: c }}>{m.value}</span>
                    <span className="text-[11px] font-semibold text-txt-2 uppercase tracking-wider">{m.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[13px] sm:text-sm text-txt-2 leading-[1.85]">{d.outcome}</p>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main section ───────────────────────────────────────────────────────────── */
export default function FeaturedWork() {
  const [pi,     setPi]     = useState(0);
  const [si,     setSi]     = useState(0);
  const [dir,    setDir]    = useState<1|-1>(1);
  const [openId, setOpenId] = useState<number|null>(null);

  const openProject = PROJECTS.find(p => p.id === openId) ?? null;
  const p = PROJECTS[pi];

  useEffect(() => {
    setSi(0);
    const t = setInterval(() => { setDir(1); setSi(prev => (prev + 1) % N_SLIDES); }, IMG_MS);
    return () => clearInterval(t);
  }, [pi]);

  function jumpTo(idx: number) { setDir(idx >= pi ? 1 : -1); setPi(idx); }

  const slideVariants = {
    enter: (d: number) => ({ x: d * 48, opacity: 0, scale: 0.97 }),
    show:  { x: 0, opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d * -36, opacity: 0, scale: 1.02 }),
  };
  const left  = p.slides[(si - 1 + N_SLIDES) % N_SLIDES];
  const ctr   = p.slides[si];
  const right = p.slides[(si + 1) % N_SLIDES];

  return (
    <>
      <section id="work" className="py-12 lg:py-20 bg-bg overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8 text-center">
            <span className="section-pill mb-3">Our Work</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-txt mt-3">
              Work That <span className="gradient-text">Speaks for Itself</span>
            </h2>
            <div className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 rounded-full"
              style={{ background: "#FFF3D9", border: "1.5px solid #F0DDB0" }}>
              <svg width="11" height="11" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="9" width="14" height="10" rx="2" stroke="#B08040" strokeWidth="2"/>
                <path d="M7 9V6a3 3 0 016 0v3" stroke="#B08040" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span className="text-[10px] font-bold text-txt-3 leading-none">Client and project names anonymised by mutual agreement</span>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

            {/* ── Project list ── */}
            <div className="w-full lg:w-56 shrink-0 flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {PROJECTS.map((proj, i) => (
                <button key={proj.id} onClick={() => jumpTo(i)}
                  className="flex items-center gap-2.5 px-3.5 py-3 rounded-xl border-2 text-left transition-all duration-200 shrink-0 lg:shrink lg:w-full"
                  style={{
                    borderColor: i === pi ? proj.color    : "#F0DDB0",
                    background:  i === pi ? `${proj.color}10` : "transparent",
                    boxShadow:   i === pi ? `3px 3px 0 ${proj.color}50` : "none",
                  }}>
                  <div className="w-2 h-2 rounded-full shrink-0 transition-colors"
                    style={{ background: i === pi ? proj.color : "#D4B483" }} />
                  <div className="min-w-0">
                    <p className="font-display font-black text-sm truncate leading-tight"
                      style={{ color: i === pi ? proj.color : "#6B4E1A" }}>
                      {proj.name}
                    </p>
                    <p className="text-[10px] text-txt-2 truncate hidden lg:block mt-0.5">{proj.type}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* ── Carousel + info ── */}
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="relative overflow-hidden rounded-2xl" style={{ height: 400 }}>
                <div className="absolute hidden lg:block rounded-xl overflow-hidden"
                  style={{ width:"40%", height:"80%", top:"10%", left:"-19%" }}>
                  <AnimatePresence mode="sync">
                    <motion.div key={`L-${pi}-${si}`} className="absolute inset-0"
                      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                      transition={{ duration:0.5 }} style={{ background: slideBg(left) }}>
                      {left.img && <img src={imgSrc(left.img)} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: left.pos ?? "center" }} />}
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
                    style={{ background:"linear-gradient(to right,transparent,#FFFBF0)" }} />
                  <div className="absolute inset-0 bg-bg/50 pointer-events-none" />
                </div>
                <div className="absolute inset-0 lg:inset-auto lg:top-0 lg:left-[18%] lg:w-[64%] lg:h-full overflow-hidden rounded-2xl z-10"
                  style={{ boxShadow:`0 0 0 2px ${p.color}22, 0 8px 32px rgba(0,0,0,0.14), 0 24px 60px ${p.color}38` }}>
                  <AnimatePresence mode="sync" custom={dir}>
                    <motion.div key={`C-${pi}-${si}`} className="absolute inset-0" custom={dir}
                      variants={slideVariants} initial="enter" animate="show" exit="exit"
                      transition={{ duration:0.5, ease:[0.25,0.46,0.45,0.94] }}
                      style={{ background: slideBg(ctr) }}>
                      {ctr.img && <img src={imgSrc(ctr.img)} alt={p.name} className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: ctr.pos ?? "center" }} />}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="absolute hidden lg:block rounded-xl overflow-hidden"
                  style={{ width:"40%", height:"80%", top:"10%", left:"79%" }}>
                  <AnimatePresence mode="sync">
                    <motion.div key={`R-${pi}-${si}`} className="absolute inset-0"
                      initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
                      transition={{ duration:0.5 }} style={{ background: slideBg(right) }}>
                      {right.img && <img src={imgSrc(right.img)} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: right.pos ?? "center" }} />}
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
                    style={{ background:"linear-gradient(to left,transparent,#FFFBF0)" }} />
                  <div className="absolute inset-0 bg-bg/50 pointer-events-none" />
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-3">
                {Array.from({ length: N_SLIDES }).map((_, i) => (
                  <button key={i} onClick={() => { setDir(i > si ? 1 : -1); setSi(i); }}
                    className="rounded-full transition-all duration-300"
                    style={{ width: i===si ? 20 : 7, height: 7, background: i===si ? p.color : `${p.color}35` }} />
                ))}
              </div>
              <div className="mt-2 h-[2px] rounded-full overflow-hidden bg-border">
                <motion.div key={`${pi}-${si}`} className="h-full rounded-full" style={{ background: p.color }}
                  initial={{ width:"0%" }} animate={{ width:"100%" }}
                  transition={{ duration: IMG_MS/1000, ease:"linear" }} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={pi} className="mt-5 flex items-end justify-between gap-6"
                  initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-6 }}
                  transition={{ duration:0.3 }}>
                  <div className="min-w-0">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border-2 mb-2"
                      style={{ color: p.color, borderColor:`${p.color}35`, background:`${p.color}10` }}>
                      {p.type}
                    </span>
                    <h3 className="font-display font-black text-xl text-txt leading-tight">{p.name}</h3>
                    <p className="text-sm text-txt-2 mt-1 leading-relaxed max-w-md">{p.desc}</p>
                  </div>
                  <button onClick={() => setOpenId(p.id)}
                    className="btn-cartoon shrink-0 px-5 py-2.5 text-sm rounded-xl whitespace-nowrap">
                    Case Study →
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      <AnimatePresence>
        {openProject && <CaseStudyModal project={openProject} onClose={() => setOpenId(null)} />}
      </AnimatePresence>
    </>
  );
}
