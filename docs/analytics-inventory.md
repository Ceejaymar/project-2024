# Analytics Inventory

This document describes the current analytics implementation for the `los.codes`
portfolio after the readable event-name update.

## 1. Analytics Provider and Configuration

- **Provider:** PostHog.
- **Package:** `posthog-js`.
- **Initialization:** `src/main.tsx`.
- **React provider:** `PostHogProvider` wraps `<App />` in `src/main.tsx`.
- **Custom event helper:** `trackEvent` in `src/lib/analytics.ts`.
- **Event-name factories:** `src/lib/analytics.ts`.
- **Production gating:** PostHog initializes only when `import.meta.env.PROD` is
  true, `VITE_POSTHOG_KEY` exists, and analytics ignore mode is off.
- **Ignore workflow:** Set `localStorage.analytics_ignore = "true"` or visit
  `?analytics_ignore=true`. Visit `?analytics_ignore=false` to remove it.
- **Autocapture:** Disabled with `autocapture: false`.
- **Pageview capture:** Enabled through PostHog with `capture_pageview: true`.
- **Pageleave capture:** Disabled with `capture_pageleave: false`.
- **Web vitals:** Not enabled by app code. If visible in PostHog, verify
  provider dashboard settings.
- **Session replay / heatmaps:** Not configured in app code. Requires provider
  dashboard verification.
- **Bot filtering:** Custom events include `is_webdriver` and
  `user_agent_family`, but no traffic is dropped by app code.
- **URL handling:** Custom external destinations are sanitized by removing query
  strings. Custom events do not send the current full URL.

## 2. Complete Event Inventory

| Event name pattern | Source type | Trigger | File / component | Exact properties currently sent | Example property values | Intended meaning | Intent level | Problems / notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Pageview` / `$pageview` | Provider automatic event | PostHog pageview capture | `src/main.tsx`, PostHog client | Provider default payload | Requires provider dashboard verification | Visitor loaded a page | Diagnostic only | SPA route-change behavior depends on PostHog behavior/settings. |
| `Pageleave` / `$pageleave` | Provider automatic event | Page leave/unload | `src/main.tsx`, PostHog client | None expected from app config | N/A | Visitor left a page | Diagnostic only | `capture_pageleave: false`; verify provider/history if it appears. |
| `Web vitals` / `$web_vitals` | Provider automatic event | Provider performance capture | Provider-side settings | No app-defined payload | Requires provider dashboard verification | Performance diagnostics | Diagnostic only | No app code enables this. |
| `clicked path` | Provider autocapture event | Generic DOM click | No current repo source | No custom payload | Requires provider dashboard verification | Historical/generic click capture | Noisy / likely not useful | App keeps `autocapture: false`. |
| `clicked svg` | Provider autocapture event | Generic DOM click | No current repo source | No custom payload | Requires provider dashboard verification | Historical/generic click capture | Noisy / likely not useful | App keeps `autocapture: false`. |
| `clicked link with text "..."` | Provider autocapture event | Generic DOM link click | No current repo source | No custom payload | Requires provider dashboard verification | Historical/generic click capture | Noisy / likely not useful | App keeps `autocapture: false`. |
| `cta_clicked: <Label> (<Placement>)` | Custom event | CTA click | `Header` | Shared base + `placement`, `element_id`, `element_label`, `destination_type`, `destination` | `cta_clicked: Explore My Projects (Hero)` | Visitor clicked a CTA | Medium intent | Only hero projects CTA currently uses this family. |
| `resume_clicked: <Label> (<Placement>)` | Custom event | Resume link click | `Header`, `Experience` | Shared base + `placement`, `element_id`, `element_label`, `destination_type`, `destination` | `resume_clicked: Download Resume (Experience)` | Visitor opened/downloaded resume | High intent | Click event cannot confirm PDF load/download completion. |
| `project_clicked: <Project> (Case Study)` | Custom event | Internal case-study link click | `ProjectCard`, `ProjectCardCompact`, `CaseStudyLayout` | Shared base + `placement`, `element_id`, `element_label`, `destination_type`, `destination`, `project_slug`, `project_name`, `action` | `project_clicked: Mosaic (Case Study)` | Visitor clicked into a case study | High intent | Separate from completed view. |
| `case_study_viewed: <Project>` | Custom event | Valid case-study route renders | `CaseStudy` | Shared base + `project_slug`, `project_name` | `case_study_viewed: Mosaic` | Visitor actually viewed a case study | High intent | Direct entries lack origin context unless provider session data is used. |
| `outbound_clicked: <Project>, <Label> (<Placement>)` | Custom event | External project/product link click | `ProjectCard`, `ProjectCardCompact`, `CaseStudyLayout` | Shared base + `placement`, `element_id`, `element_label`, `destination_type`, `destination`, `project_slug`, `project_name`, `action` | `outbound_clicked: Batey, Live Site (Projects Page)` | Visitor clicked an external project/product destination | High intent | Sends sanitized external URL without query string. |
| `contact_clicked: <Contact> (<Placement>)` | Custom event | Contact/social link click | `Contact`, `Footer` | Shared base + `placement`, `element_id`, `element_label`, `destination_type`, `destination`, `contact_type` | `contact_clicked: Instagram (Footer)` | Visitor clicked a contact/social action | High intent | Email click does not send email address as destination. |
| `nav_clicked: <Label> (Desktop/Mobile)` | Custom event | Main nav item or logo click | `Navbar`, `MobileNavigation` | Shared base + `placement`, `element_id`, `element_label`, `destination_type`, `destination` | `nav_clicked: Projects (Mobile)` | Visitor used navigation | Low intent | Mobile menu open/close is not tracked. |
| `theme_toggled: <From> to <To>` | Custom event | Theme toggle click | `App`, `ThemeToggle` | Shared base + `placement`, `element_id`, `element_label`, `from`, `to` | `theme_toggled: Light to Dark` | Visitor intentionally changed theme | Low intent | System preference changes are not tracked. |

Shared custom event base:

```ts
{
  page_path: string;
  page_type?: "home" | "projects_index" | "case_study";
  environment: string;
  user_agent_family: "firefox" | "edge" | "chrome" | "safari" | "other";
  is_webdriver: boolean;
}
```

## 3. Event-by-Event Detail

### `cta_clicked: Explore My Projects (Hero)`

**Source:** Custom event

**Triggered by:** Hero “Explore my projects” CTA.

**Code location:** `src/components/header/Header.tsx`

**Current event payload:**

```ts
{
  page_path: "/",
  page_type: "home",
  environment: "production",
  user_agent_family: "chrome",
  is_webdriver: false,
  placement: "hero",
  element_id: "hero_explore_projects",
  element_label: "Explore My Projects",
  destination_type: "internal",
  destination: "#projects"
}
```

**Assessment:** Useful medium-intent navigation signal.

### `resume_clicked: Get My Resume (Hero)`

**Source:** Custom event

**Triggered by:** Hero resume link.

**Code location:** `src/components/header/Header.tsx`

**Current event payload:**

```ts
{
  placement: "hero",
  element_id: "hero_resume",
  element_label: "Get My Resume",
  destination_type: "download",
  destination: "/carlos-martinez-resume.pdf"
}
```

**Assessment:** High intent.

### `resume_clicked: Download Resume (Experience)`

**Source:** Custom event

**Triggered by:** Experience-section resume download link.

**Code location:** `src/components/experience/Experience.tsx`

**Current event payload:**

```ts
{
  placement: "experience_section",
  element_id: "experience_download_resume",
  element_label: "Download Resume",
  destination_type: "download",
  destination: "/carlos-martinez-resume.pdf"
}
```

**Assessment:** High intent. This replaces the old misleading placement value
`projects`.

### `project_clicked: Mosaic (Case Study)`

**Source:** Custom event

**Triggered by:** Internal project case-study link click.

**Code location:** `ProjectCard`, `ProjectCardCompact`, `CaseStudyLayout`

**Current event payload:**

```ts
{
  placement: "featured_projects" | "projects_page" | "case_study_footer",
  element_id: "project_mosaic_case_study",
  element_label: "Read Case Study",
  destination_type: "internal",
  destination: "/projects/mosaic",
  project_slug: "mosaic",
  project_name: "Mosaic",
  action: "case_study"
}
```

**Assessment:** High intent. This is now reserved for internal case-study
clicks, so external links do not duplicate it.

### `case_study_viewed: Mosaic`

**Source:** Custom event

**Triggered by:** Valid case-study route renders.

**Code location:** `src/pages/caseStudy/CaseStudy.tsx`

**Current event payload:**

```ts
{
  project_slug: "mosaic",
  project_name: "Mosaic"
}
```

**Assessment:** High intent and intentionally separate from
`project_clicked`.

### `outbound_clicked: <Project>, <Label> (<Placement>)`

**Source:** Custom event

**Triggered by:** External project/product links, including live sites, GitHub,
App Store links, and Mosaic’s product site.

**Code location:** `ProjectCard`, `ProjectCardCompact`, `CaseStudyLayout`

**Current event payload:**

```ts
{
  placement: "featured_projects" | "projects_page" | "case_study_footer",
  element_id: "project_resplash_github",
  element_label: "GitHub",
  destination_type: "external",
  destination: "https://github.com/Ceejaymar/resplash",
  project_slug: "resplash",
  project_name: "Resplash",
  action: "github"
}
```

**Assessment:** High intent. One external click now emits only this semantic
event. Project metadata can provide an optional analytics display name, such as
`Batey` for the UI title `Batéy Fashion`.

### `contact_clicked: <Contact> (<Placement>)`

**Source:** Custom event

**Triggered by:** Contact-section email/LinkedIn or footer social links.

**Code location:** `src/components/contact/Contact.tsx`,
`src/components/footer/Footer.tsx`

**Current event payload:**

```ts
{
  placement: "contact_section" | "footer",
  element_id: "footer_instagram",
  element_label: "instagram",
  destination_type: "external" | "email",
  destination: "https://instagram.com/steadyonthego",
  contact_type: "email" | "linkedin" | "github" | "youtube" | "instagram"
}
```

**Assessment:** High intent. The old `other` bucket is no longer used.

### `nav_clicked: <Label> (Desktop/Mobile)`

**Source:** Custom event

**Triggered by:** Desktop nav/logo clicks and mobile nav item clicks.

**Code location:** `src/components/navbar/Navbar.tsx`,
`src/components/mobileNavigation/MobileNavigation.tsx`

**Current event payload:**

```ts
{
  placement: "nav" | "mobile_nav",
  element_id: "nav_projects",
  element_label: "Projects",
  destination_type: "internal",
  destination: "#projects"
}
```

**Assessment:** Low intent but useful navigation context.

### `theme_toggled: Light to Dark`

**Source:** Custom event

**Triggered by:** Intentional theme toggle.

**Code location:** `src/App.tsx`

**Current event payload:**

```ts
{
  placement: "nav",
  element_id: "theme_toggle",
  element_label: "Theme toggle",
  from: "light",
  to: "dark"
}
```

**Assessment:** Complete for intentional theme changes.

## 4. Current User Journey Coverage

| User journey | Can current events identify it? | Events involved | What is missing? |
| --- | --- | --- | --- |
| Visitor lands on homepage | Partially | Provider `Pageview` | Exact provider payload requires dashboard verification. |
| Visitor clicks “Explore my projects” | Yes | `cta_clicked: Explore My Projects (Hero)` | Nothing material. |
| Visitor opens the full projects page | Partially | Provider `Pageview`, `nav_clicked` if reached via nav | The inline homepage projects-page text link is not custom tracked. |
| Visitor opens the Mosaic case study | Yes | `project_clicked: Mosaic (Case Study)`, `case_study_viewed: Mosaic` | Direct entry has no click-origin event. |
| Visitor clicks a project live site | Yes | `outbound_clicked` | No click-completion confirmation after leaving site. |
| Visitor clicks a GitHub repository | Yes | `outbound_clicked` with `action: "github"` | Nothing material. |
| Visitor clicks the Mosaic site | Yes | `outbound_clicked: Mosaic, Get Mosaic (Case Study Footer)` | Nothing material. |
| Visitor opens/downloads resume | Yes | `resume_clicked` | Cannot confirm PDF load/download completion. |
| Visitor clicks email/contact | Yes | `contact_clicked` | Email address is intentionally not sent as destination. |
| Visitor clicks footer social links | Yes | `contact_clicked` | Nothing material. |
| Visitor toggles theme | Yes | `theme_toggled` | System preference changes are not tracked. |
| Visitor returns on another day | Partially | Provider identity/session behavior | Requires provider dashboard verification. |

## 5. Noise, Duplicates, and Potential Bot Signals

- External project links no longer emit both `project_clicked` and
  `outbound_clicked`.
- Internal case-study clicks and completed case-study views remain separate on
  purpose.
- No document-level click listener exists.
- PostHog `autocapture` remains disabled.
- Raw events such as `clicked path`, `clicked svg`, and
  `clicked link with text` are not custom events in this codebase. If they
  appear after deployment, check PostHog dashboard settings or historical data.
- Custom events include `is_webdriver`, but no bot-like sessions are filtered
  by app code.

## 6. Current Event Contract

```ts
type Placement =
  | "hero"
  | "nav"
  | "mobile_nav"
  | "experience_section"
  | "featured_projects"
  | "projects_page"
  | "project_card"
  | "case_study_footer"
  | "contact_section"
  | "footer";

type ProjectAction =
  | "case_study"
  | "live_site"
  | "github"
  | "app_store"
  | "website";

type ContactType =
  | "email"
  | "linkedin"
  | "github"
  | "youtube"
  | "instagram";
```

Recommended next review items:

- Decide whether the homepage “check out my full Projects page” text link
  should become a tracked CTA.
- Decide whether project titles should gain separate analytics display names if
  the activity feed should use shorter names than the UI.
- Review PostHog dashboard settings for web vitals, historical autocapture
  events, session replay, heatmaps, and owner traffic exclusion.

## 7. Recommended Dashboard / Reporting Views

| Report | Events used | Useful breakdown properties | Decision supported |
| --- | --- | --- | --- |
| High-intent actions by day | `resume_clicked`, `project_clicked`, `case_study_viewed`, `outbound_clicked`, `contact_clicked` | Event name, `placement`, `project_name`, `action`, `contact_type` | See meaningful engagement at a glance. |
| Resume clicks by placement | `resume_clicked` | `placement`, `element_label` | Compare hero vs Experience resume intent. |
| Project interest by project and action | `project_clicked`, `outbound_clicked` | `project_name`, `project_slug`, `action`, `placement` | Rank project interest. |
| Case study views by project | `case_study_viewed` | `project_name`, `project_slug` | Understand case-study readership. |
| External clicks by destination type | `outbound_clicked`, `contact_clicked` | `destination_type`, `action`, `contact_type` | Understand external conversion paths. |
| Homepage → projects → case study funnel | Provider pageview, `cta_clicked`, `nav_clicked`, `project_clicked`, `case_study_viewed` | `page_path`, `placement`, `project_name` | Understand portfolio depth. |
| Homepage → resume-click funnel | Provider pageview, `resume_clicked` | `placement` | Understand hiring-intent paths. |
| Low-value/noisy events to hide | Provider autocapture/history, web vitals | Event name | Keep the activity feed readable. |

## 8. QA Checklist

For future analytics changes, verify:

- Exactly one intended semantic click event fires.
- Event name begins with the expected stable prefix.
- Event name is readable without opening properties.
- Required structured properties are present.
- External project links do not also fire `project_clicked`.
- Generic `clicked path` or `clicked svg` is not emitted by custom code.
- Keyboard activation triggers the same event as pointer activation.
- `analytics_ignore` suppresses custom events.
- Navigation still works normally.
- External links preserve safe `target` and `rel` behavior.

## Files Inspected

- `package.json`
- `docs/analytics-events.md`
- `src/main.tsx`
- `src/lib/analytics.ts`
- `src/App.tsx`
- `src/pages/home/HomePage.tsx`
- `src/pages/projects/ProjectsPage.tsx`
- `src/pages/caseStudy/CaseStudy.tsx`
- `src/components/header/Header.tsx`
- `src/components/experience/Experience.tsx`
- `src/components/projects/Projects.tsx`
- `src/components/projectCard/ProjectCard.tsx`
- `src/components/projectCardCompact/ProjectCardCompact.tsx`
- `src/components/navbar/Navbar.tsx`
- `src/components/mobileNavigation/MobileNavigation.tsx`
- `src/components/themeToggle/ThemeToggle.tsx`
- `src/components/contact/Contact.tsx`
- `src/components/footer/Footer.tsx`
- `src/components/externalLink/ExternalLink.tsx`
- `src/case-studies/components/CaseStudyLayout.tsx`
- `src/case-studies/mosaic/MosaicCaseStudy.tsx`
- `src/case-studies/mosaic/mosaicCaseStudyData.ts`
- `src/portfolio-data.ts`
- `src/types.ts`
