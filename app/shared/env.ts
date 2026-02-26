export const env = {
  WS_URL: process.env.NEXT_PUBLIC_WS_URL ?? 'ws://localhost:4000',
  DEBUG_PANEL: process.env.NEXT_PUBLIC_DEBUG_PANEL === '1',
} as const
