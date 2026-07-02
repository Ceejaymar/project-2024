# Analytics Events

Analytics uses PostHog through `src/lib/analytics.ts`. The site keeps
PostHog `autocapture` disabled and sends semantic custom events only in
production when `VITE_POSTHOG_KEY` is available.

Set `localStorage.analytics_ignore = "true"` to ignore a browser. You can also
visit `?analytics_ignore=true` to set it or `?analytics_ignore=false` to remove
it.

## Naming Convention

Custom event names keep the stable event-family prefix, then add readable
context for the PostHog activity feed:

```txt
<existing_event_prefix>: <specific action> (<placement or context>)
```

Examples:

- `cta_clicked: Explore My Projects (Hero)`
- `project_clicked: Mosaic (Case Study)`
- `outbound_clicked: Mosaic, Get Mosaic (Case Study Footer)`
- `resume_clicked: Download Resume (Experience)`
- `contact_clicked: Instagram (Footer)`
- `nav_clicked: Projects (Mobile)`
- `theme_toggled: Light to Dark`

Event-name formatting is centralized in `src/lib/analytics.ts`.

## Event Families

| Event family | Example visible event name | When it fires | Structured properties |
| --- | --- | --- | --- |
| `cta_clicked` | `cta_clicked: Explore My Projects (Hero)` | Hero CTA click | `placement`, `element_id`, `element_label`, `destination_type`, `destination` |
| `resume_clicked` | `resume_clicked: Download Resume (Experience)` | Resume open/download click | `placement`, `element_id`, `element_label`, `destination_type`, `destination` |
| `project_clicked` | `project_clicked: Mosaic (Case Study)` | Internal project case-study link click | `placement`, `element_id`, `element_label`, `destination_type`, `destination`, `project_slug`, `project_name`, `action` |
| `case_study_viewed` | `case_study_viewed: Mosaic` | Valid case-study route renders | `project_slug`, `project_name` |
| `outbound_clicked` | `outbound_clicked: Batey, Live Site (Projects Page)` | External project/product link click | `placement`, `element_id`, `element_label`, `destination_type`, `destination`, `project_slug`, `project_name`, `action` |
| `contact_clicked` | `contact_clicked: YouTube (Footer)` | Contact/social link click | `placement`, `element_id`, `element_label`, `destination_type`, `destination`, `contact_type` |
| `nav_clicked` | `nav_clicked: Projects (Desktop)` | Desktop or mobile navigation click | `placement`, `element_id`, `element_label`, `destination_type`, `destination` |
| `theme_toggled` | `theme_toggled: Light to Dark` | Intentional theme toggle click | `placement`, `element_id`, `element_label`, `from`, `to` |

`trackEvent` also adds shared custom-event context:

```ts
{
  page_path: string;
  page_type?: "home" | "projects_index" | "case_study";
  environment: string;
  user_agent_family: "firefox" | "edge" | "chrome" | "safari" | "other";
  is_webdriver: boolean;
}
```

## Placement Values

| Placement value | Activity-feed label |
| --- | --- |
| `hero` | `Hero` |
| `experience_section` | `Experience` |
| `featured_projects` | `Featured Projects` |
| `projects_page` | `Projects Page` |
| `case_study_footer` | `Case Study Footer` |
| `contact_section` | `Contact Section` |
| `footer` | `Footer` |
| `nav` | `Desktop` |
| `mobile_nav` | `Mobile` |

## One Semantic Click Event Per Action

- Internal case-study links fire `project_clicked`.
- The rendered case-study page separately fires `case_study_viewed`.
- External project links fire only `outbound_clicked`; they do not also fire
  `project_clicked`.
- Resume links fire `resume_clicked`.
- Contact and social links fire `contact_clicked`.
- Generic raw DOM events such as `clicked path`, `clicked svg`, or
  `clicked link with text` are not custom events in this codebase. If they
  appear in PostHog, verify historical data or provider dashboard settings.

## URL Handling

External destinations sent in custom events are sanitized before capture. Query
strings are removed from HTTP and HTTPS URLs. Email clicks use
`destination_type: "email"` and do not send the email address as a destination.
