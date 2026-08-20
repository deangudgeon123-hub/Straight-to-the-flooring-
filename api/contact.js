export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const endpoint = process.env.FORMSPREE_ENDPOINT
  if (!endpoint) {
    return res.status(503).json({ error: 'Contact form is not configured yet.' })
  }

  const { name, phone, service, message, company } = req.body || {}

  // Simple honeypot for bots.
  if (company) {
    return res.status(200).json({ ok: true })
  }

  if (!name || !phone || !service || !message) {
    return res.status(400).json({ error: 'Please complete all required fields.' })
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        service,
        message,
        _subject: `New flooring quote request from ${name}`,
      }),
    })

    if (!response.ok) {
      return res.status(502).json({ error: 'The enquiry service could not accept the message.' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(500).json({ error: 'Something went wrong sending the enquiry.' })
  }
}
