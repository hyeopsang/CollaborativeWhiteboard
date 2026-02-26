'use client'

type Props = {
  fps: number
  objectCount: number
  hitTestMs: number
  rttMs: number
}

export function DebugPanel({ fps, objectCount, hitTestMs, rttMs }: Props) {
  return (
    <div className="fixed right-3 top-3 z-9999 min-w-40 rounded-[10px] bg-black/70 p-2.5 text-xs leading-relaxed text-white">
      <div>FPS: {fps.toFixed(0)}</div>
      <div>Objects: {objectCount}</div>
      <div>HitTest: {hitTestMs.toFixed(2)} ms</div>
      <div>RTT: {rttMs.toFixed(0)} ms</div>
    </div>
  )
}
