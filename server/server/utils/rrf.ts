/**
 * Reciprocal Rank Fusion - combines multiple ranked lists into a single ranking.
 * @param rankings Array of ranked ID lists (best first)
 * @param k Ranking constant (default 60, standard RRF value)
 * @returns Fused ranking of IDs sorted by combined score
 */
export function rrf(rankings: string[][], k = 60): string[] {
  const scores = new Map<string, number>()
  for (const ranking of rankings) {
    ranking.forEach((id, rank) => {
      scores.set(id, (scores.get(id) || 0) + 1 / (k + rank + 1))
    })
  }
  return [...scores.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id)
}
