import { execSync } from 'node:child_process'

export async function getGitStats() {
  const repoUrl = execSync('git config --get remote.origin.url').toString().trim()
  const commitHash = execSync('git rev-parse --short HEAD').toString().trim()
  const commitUrl = `${repoUrl}/tree/${commitHash}`

  const { hash: albatrossCommitHash, date: albatrossCommitDate } = await fetch('https://api.github.com/repos/nimiq/core-rs-albatross/commits?per_page=1')
    .then(res => res.json()).then(res => ({ hash: res[0].sha.slice(0, 7), date: res[0].commit.author.date }))
    .catch(() => ({ hash: 'unknown', date: 'unknown' }))

  return { repoUrl, commitHash, commitUrl, albatrossCommitHash, albatrossCommitDate }
}
