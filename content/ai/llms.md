---
icon: i-lucide-file-text
title: llms.txt
description: Use the generated llms.txt endpoints that Docus publishes for language models and agents.
navigation:
  title: llms.txt
  order: 3
---

Docus publishes model-friendly text indexes for this site. They are generated from the live Developer Center content, so assistants can discover pages without scraping HTML.

<UButton to="/llms.txt" label="Open llms.txt" icon="i-tabler:file-text" trailing-icon="i-tabler:arrow-up-right" color="primary" class="mt-4 mr-3 rounded-full" />
<UButton to="/llms-full.txt" label="Open llms-full.txt" icon="i-tabler:file-text" trailing-icon="i-tabler:arrow-up-right" color="neutral" variant="outline" class="mt-4 rounded-full" />

## Available Files

| File | Purpose |
|:---|:---|
| `/llms.txt` | Compact site index with page titles, descriptions, and URLs |
| `/llms-full.txt` | Expanded export with full page content in a single text file |

On the public deployment, these files are available at:

- `https://nimiq.com/developers/llms.txt`
- `https://nimiq.com/developers/llms-full.txt`

## When To Use Each One

Use `llms.txt` when you want a lightweight overview of the site and page list.

Use `llms-full.txt` when you want a single text export that includes the actual documentation content.

## Notes

- `llms-full.md` redirects to `llms-full.txt` for compatibility.
- The files are generated from site content, so they stay aligned with the published docs instead of a separate hand-maintained export.
