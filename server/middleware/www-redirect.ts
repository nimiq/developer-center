export default defineEventHandler((event) => {
  const host = getRequestHost(event)
  if (host.startsWith('www.')) {
    const apexHost = host.slice(4)
    const url = getRequestURL(event)
    url.host = apexHost
    return sendRedirect(event, url.toString(), 301)
  }
})
