export const GA_MEASUREMENT_ID = 'G-7G3YGL026Q'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function pageview(url: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

export function trackOutboundClick(linkType: 'linkedin' | 'github' | 'email', location: string) {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  window.gtag('event', 'portfolio_outbound_click', {
    link_type: linkType,
    location,
  })
}
