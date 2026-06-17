# Analytics Events

Analytics uses PostHog through `src/lib/analytics.ts`. The helper disables
generic autocapture and only sends semantic events in production when
`VITE_POSTHOG_KEY` is available.

Set `localStorage.analytics_ignore = "true"` to ignore a browser. You can also
visit `?analytics_ignore=true` to set it or `?analytics_ignore=false` to remove
it.

## High Intent

| Event | When it fires | Important properties |
| --- | --- | --- |
| `resume_clicked` | A visitor opens or downloads the resume. | `location`, `destination` |
| `contact_clicked` | A visitor clicks email, LinkedIn, GitHub, or another contact/social link. | `type`, `location` |
| `project_clicked` | A visitor clicks a project case study, live site, GitHub, app store, or external project link. | `project`, `location`, `target` |
| `case_study_viewed` | A visitor lands on a dedicated case study route. | `project`, `slug` |
| `outbound_clicked` | A visitor clicks an external project/product destination. | `label`, `project`, `destination`, `location` |

## Lower Intent

| Event | When it fires | Important properties |
| --- | --- | --- |
| `cta_clicked` | The hero "Explore my projects" CTA is clicked. | `label`, `location`, `destination` |
| `nav_clicked` | A top-level desktop/mobile nav item or logo is clicked. | `label`, `destination`, `location` |
| `theme_toggled` | The visitor intentionally changes the color theme. | `from`, `to`, `location` |
| `$pageview` | PostHog's pageview capture. | PostHog defaults plus helper-independent page context |

## Shared Context

`trackEvent` adds safe shared context to semantic events:

- `path`, `pathname`, `hash`
- `referrer`
- `timestamp`
- `environment`
- `user_agent_family`
- `is_webdriver`
- `viewport_width`, `viewport_height`

The helper does not send the full user agent, fingerprint visitors, or collect
personally identifiable information.
