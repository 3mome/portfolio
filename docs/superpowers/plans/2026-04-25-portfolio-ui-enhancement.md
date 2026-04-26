# Portfolio UI Enhancement Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Enhance the portfolio UI to be visually premium for a Senior FullStack Developer, replace all emoji tech icons with Lucide React SVG icons, and populate all content from the CV PDF.

**Architecture:** Next.js 15 with Tailwind CSS v4 custom properties (CSS variables), glassmorphism UI, dark mode primary, Lucide React for icons, bilingual EN/TH support.

**Tech Stack:** Next.js 15, Tailwind CSS v4, Lucide React, TypeScript

---

## File Structure

```
app/
  layout.tsx          — NO CHANGE (fonts already configured)
  page.tsx            — MODIFY: Hero + Skills + Projects sections with icons
  about/page.tsx      — MODIFY: Add education, certifications, tech grid with icons
  experience/page.tsx — MODIFY: Icon-accented achievement lists
  projects/page.tsx   — MODIFY: Project cards with tech icons
  contact/page.tsx   — MODIFY: Professional contact card with real icons
components/
  Navbar.tsx          — MODIFY: Real photo placeholder + refined CTA
  Footer.tsx          — MODIFY: Social icons (LinkedIn, GitHub, etc.)
  LangProvider.tsx    — NO CHANGE
  ThemeProvider.tsx   — NO CHANGE
lib/
  i18n.ts             — MODIFY: Add education, certifications, languages content
globals.css           — MODIFY: Add animation classes, refine glassmorphism
public/
  resume.pdf          — ALREADY COPIED from Supawit_CV_v13.docx.pdf
```

---

## Task 1: Install Lucide React

**Files:**
- Modify: `package.json` (add lucide-react dependency)

- [ ] **Step 1: Install lucide-react**

Run: `npm install lucide-react`

---

## Task 2: Enhance Navbar

**Files:**
- Modify: `components/Navbar.tsx`

**Changes:**
- Replace resume `a` tag text with Lucide `Download` icon + "Resume" text
- Add refined shadow/gradient on scroll if possible

```tsx
// Import at top of Navbar.tsx
import { Download, Menu, X } from "lucide-react";

// Replace the resume <a> block with:
<a
  href="/resume.pdf"
  className="px-5 py-2 rounded-full font-bold text-sm tracking-wide uppercase transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
  style={{
    background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
    color: "var(--color-on-primary)",
    fontFamily: "var(--font-manrope)",
  }}
>
  <Download size={16} />
  {t.nav.resume}
</a>
```

- [ ] **Step 1: Add lucide-react import to Navbar.tsx**
- [ ] **Step 2: Replace resume link with icon version**
- [ ] **Step 3: Commit**

---

## Task 3: Enhance Home Page (Hero + Skills + Featured Projects)

**Files:**
- Modify: `app/page.tsx`
- Modify: `lib/i18n.ts` (update content)

**Changes:**

### Hero Section:
- Replace emoji placeholder `👤` with Lucide `User` icon in a styled container
- Add floating badge with `Zap` icon for "5-Month Delivery" stat
- Refine gradient orbs to be more subtle/polished

### Skills Section:
- Replace emoji category titles with icons:
  - "Web & Mobile" → `Monitor` (Lucide)
  - "Middleware & API" → `Workflow` or `Server`
  - "Database & ORM" → `Database`
  - "Infrastructure" → `Cloud`
- Replace skill tag emojis with Lucide icons:
  - Next.js → `Hexagon`
  - Node.js → `Circle`
  - React Native → `Smartphone`
  - PHP → `Code2`
  - SAP → `Link2`
  - OPC/Kepware → `Activity`
  - MySQL → `Database`
  - MSSQL → `Database`
  - MongoDB → `Leaf`
  - REST API → `Route`
  - CI/CD → `GitBranch`
  - JWT/RBAC → `Shield`
  - Load Testing → `Gauge`
  - RFID/GPS/iBeacon → `Radio`

### Featured Projects Section:
- Add `ExternalLink` icon to project links
- Replace badge emojis with `HeartPulse`, `Building2`, `Warehouse`, `Cpu` icons

```tsx
// In page.tsx, add imports:
import { Monitor, Server, Database, Cloud, Hexagon, Circle, Smartphone, Code2, Link2, Activity, Leaf, Route, GitBranch, Shield, Gauge, Radio, ExternalLink, Zap, HeartPulse, Building2, Warehouse, Cpu, User } from "lucide-react";
```

- [ ] **Step 1: Add Lucide imports to page.tsx**
- [ ] **Step 2: Update skill categories with icons**
- [ ] **Step 3: Update skill tags with icons**
- [ ] **Step 4: Update project badges with icons**
- [ ] **Step 5: Update project links with ExternalLink icons**
- [ ] **Step 6: Update hero avatar with icon**
- [ ] **Step 7: Commit**

---

## Task 4: Enhance About Page

**Files:**
- Modify: `app/about/page.tsx`
- Modify: `lib/i18n.ts` (add education, certifications, languages sections)

**Changes:**
- Replace emoji icons in philosophy cards with `Architecture` and `PackageCheck` icons
- Add new "Education" section with degree info from CV
- Add new "Certifications" section
- Add new "Languages" section with Thai/English proficiency
- Enhance tech stack grid — replace emoji icons with Lucide brand-colored icons:
  - Next.js → `Hexagon` (color: primary)
  - Node.js → `Circle` (color: #3c873a)
  - PHP → `Code2` (color: #777bb4)
  - React Native → `Smartphone` (color: #61dafb)
  - MySQL → `Database` (color: #00758f)
  - MSSQL → `Database` (color: #cc2927)
  - SAP → `Link2` (color: #0078d4)
  - JWT/RBAC → `ShieldCheck` (color: #10b981)
  - CI/CD → `GitBranch` (color: #f97316)

```tsx
// Add imports to about/page.tsx:
import { Architecture, PackageCheck, GraduationCap, Award, Languages, Hexagon, Circle, Code2, Smartphone, Database, Link2, ShieldCheck, GitBranch } from "lucide-react";
```

- [ ] **Step 1: Add Lucide imports to about/page.tsx**
- [ ] **Step 2: Replace philosophy card emojis with icons**
- [ ] **Step 3: Add Education section with GraduationCap icon**
- [ ] **Step 4: Add Certifications section with Award icon**
- [ ] **Step 5: Add Languages section with proper icons**
- [ ] **Step 6: Enhance tech stack grid with brand icons**
- [ ] **Step 7: Update i18n.ts with new content sections**
- [ ] **Step 8: Commit**

---

## Task 5: Enhance Experience Page

**Files:**
- Modify: `app/experience/page.tsx`
- Modify: `lib/i18n.ts` (add role period in Thai format)

**Changes:**
- Replace emoji icons in Core Expertise strip with Lucide icons:
  - "🌐 Next.js / Node.js / PHP" → `Monitor` + `Code2`
  - "📱 React Native iOS & Android" → `Smartphone`
  - "🗄️ MySQL · MSSQL · MongoDB" → `Database`
  - "🔗 SAP · OPC · IoT Integration" → `Link2` + `Activity`
  - "🔒 JWT Authentication & RBAC" → `ShieldCheck`
  - "⚡ CI/CD & Load Testing" → `GitBranch` + `Gauge`
  - "📊 Real-Time Dashboards" → `BarChart3`
  - "🚀 Production Infrastructure" → `Rocket`
- Add `Building2` icon for CNMI role header
- Add `Factory` icon for TOYOTA role header

```tsx
// Add imports to experience/page.tsx:
import { Monitor, Code2, Smartphone, Database, Link2, Activity, ShieldCheck, GitBranch, Gauge, BarChart3, Rocket, Building2, Factory } from "lucide-react";
```

- [ ] **Step 1: Add Lucide imports to experience/page.tsx**
- [ ] **Step 2: Replace Core Expertise strip icons**
- [ ] **Step 3: Add company icons to role card headers**
- [ ] **Step 4: Commit**

---

## Task 6: Enhance Projects Page

**Files:**
- Modify: `app/projects/page.tsx`
- Modify: `lib/i18n.ts` (update project descriptions to match CV)

**Changes:**
- Replace emoji icons in project cards with tech icons:
  - Next.js → `Hexagon`
  - Stripe → `CreditCard`
  - Docker → `Container`
  - Go → `Circle`
  - AWS → `Cloud`
  - Terraform → `Mountain`
  - Python → `Code2`
  - PyTorch → `Flame`
  - Web3 → `Globe`
  - Solidity → `FileCode`
  - React → `React`
- Add `ArrowRight` icon to view details links
- Make project cards more visually distinct with gradient overlays

```tsx
// Add imports to projects/page.tsx:
import { Hexagon, CreditCard, Container, Circle, Cloud, Mountain, Code2, Flame, Globe, FileCode, React, ArrowRight } from "lucide-react";
```

- [ ] **Step 1: Add Lucide imports to projects/page.tsx**
- [ ] **Step 2: Replace project card tech icons**
- [ ] **Step 3: Add ArrowRight icons to links**
- [ ] **Step 4: Update i18n.ts project content from CV**
- [ ] **Step 5: Commit**

---

## Task 7: Enhance Contact Page

**Files:**
- Modify: `app/contact/page.tsx`
- Modify: `lib/i18n.ts` (add real contact info)

**Changes:**
- Replace emoji icons with Lucide icons:
  - Email → `Mail`
  - LinkedIn → `Linkedin` (Lucide Linkedin)
  - GitHub → `Github`
  - Twitter → `Twitter`
- Use `MapPin` icon for location if displayed
- Add real contact info from CV (email, LinkedIn, GitHub URLs)
- Add `Calendar` icon for availability status
- Refine "Open to Opportunities" badge with `CheckCircle` icon

```tsx
// Add imports to contact/page.tsx:
import { Mail, Linkedin, Github, Twitter, MapPin, Calendar, CheckCircle, Send } from "lucide-react";
```

- [ ] **Step 1: Add Lucide imports to contact/page.tsx**
- [ ] **Step 2: Replace emoji icons with Lucide icons**
- [ ] **Step 3: Add real contact information**
- [ ] **Step 4: Refine form submit button with Send icon**
- [ ] **Step 5: Update i18n.ts with real contact data**
- [ ] **Step 6: Commit**

---

## Task 8: Enhance Footer

**Files:**
- Modify: `components/Footer.tsx`

**Changes:**
- Replace text social links with Lucide social icons:
  - LinkedIn → `Linkedin`
  - GitHub → `Github`
  - Twitter → `Twitter`
  - Dribbble → `Dribble` (or `Instagram`)
- Add hover effect with color change to match theme

```tsx
// Add imports to Footer.tsx:
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";

// Replace social link text labels with icon components
```

- [ ] **Step 1: Add Lucide imports to Footer.tsx**
- [ ] **Step 2: Replace text links with icon buttons**
- [ ] **Step 3: Add hover color transitions**
- [ ] **Step 4: Commit**

---

## Task 9: Add Animations & Refine CSS

**Files:**
- Modify: `app/globals.css`

**Changes:**
- Add fade-in animation for sections on scroll
- Add hover scale animation for cards
- Add gradient text animation for headings
- Refine glassmorphism effect with better blur values
- Add smooth page transitions
- Add tech icon hover effects (glow + scale)

```css
/* Add to globals.css */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradientShift 4s ease infinite;
}

/* Icon hover glow effect */
.icon-glow:hover {
  filter: drop-shadow(0 0 8px currentColor);
  transform: scale(1.1);
  transition: all 0.3s ease;
}
```

- [ ] **Step 1: Add animation keyframes to globals.css**
- [ ] **Step 2: Add animation utility classes**
- [ ] **Step 3: Commit**

---

## Task 10: Final Review & Testing

**Files:**
- All modified files

- [ ] **Step 1: Run dev server and verify all pages load without errors**
- [ ] **Step 2: Verify all icons render correctly**
- [ ] **Step 3: Test dark/light mode toggle**
- [ ] **Step 4: Test language toggle (EN/TH)**
- [ ] **Step 5: Test resume download link**
- [ ] **Step 6: Final commit with summary**