import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/space-grotesk/400.css'
import '@fontsource/space-grotesk/500.css'
import '@fontsource/space-grotesk/700.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppV5 from '@/AppV5.tsx'
import '@/lib/gsap.ts'
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider.tsx'
import './index.css'
import './v5.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SmoothScrollProvider>
      <AppV5 />
    </SmoothScrollProvider>
  </StrictMode>,
)
