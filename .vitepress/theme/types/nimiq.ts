export interface Peer {
  peerId: string
  x: number
  y: number
  lat: number
  lng: number
}

export enum ConsensusState {
  Idle = 'idle',
  Connecting = 'connecting',
  Established = 'established',
}

// Remove custom PlainBlock since we use the one from @nimiq/core
