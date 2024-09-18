/// <reference types="vite/client" />

interface Window {
  rs_toast?: RsToastProps
  rs_loading?: RsLoadingProps
  rs_activity_cache: any
}

interface RsToastProps {
  show?: (text: string, duration?: number) => void
  hidden?: () => void
}
interface RsLoadingProps {
  show?: () => void
  hidden?: () => void
}
