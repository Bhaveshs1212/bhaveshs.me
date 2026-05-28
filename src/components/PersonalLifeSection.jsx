import { useState } from 'react'
import { Trophy } from 'lucide-react'
import { footballHighlight, footballMedia } from '../data/personalLife'
import OutsideTheScreen from './OutsideTheScreen'

function MediaFallback({ label = 'Photo coming soon' }) {
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-dashed border-[#2A2A2A] bg-[#0F0F10] px-4 text-center">
      <p className="text-xs text-[#9A9A9A] leading-relaxed">{label}</p>
    </div>
  )
}

function LifeImage({ src, alt }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <MediaFallback />
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
      className="size-full object-cover"
    />
  )
}

function LifeVideo({ src, alt }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <MediaFallback label="Video coming soon" />
  }

  return (
    <video
      src={src}
      controls
      playsInline
      preload="metadata"
      aria-label={alt}
      onError={() => setHasError(true)}
      className="size-full rounded-md object-cover"
    >
      Your browser does not support video playback.
    </video>
  )
}

function FootballHighlightSection() {
  const images = footballMedia.filter((item) => item.type === 'image')
  const videos = footballMedia.filter((item) => item.type === 'video')

  return (
    <section aria-label="Football highlight" className="mt-8 space-y-6">
      <div className="group rounded-lg border border-[#2A2A2A] bg-[#111]/50 p-6 transition-all duration-300 hover:border-[#3A3A3A]/80">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-[#1A1A1A]/80">
            <Trophy className="size-5 text-amber-500" />
          </div>
          <div>
            <h3 className="text-base font-medium text-[#F2F2F2]">
              {footballHighlight.title}
            </h3>
            <p className="text-sm text-[#9A9A9A]">{footballHighlight.role}</p>
          </div>
        </div>
        <p className="text-sm text-[#9A9A9A] leading-relaxed max-w-2xl">
          {footballHighlight.description}
        </p>
      </div>

      {images.length > 0 && (
        <div>
          <p className="text-xs uppercase tracking-wider text-[#9A9A9A] mb-3">Photos</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((item) => (
              <div
                key={item.src}
                className="aspect-[4/3] overflow-hidden rounded-md border border-[#2A2A2A]/80 bg-[#0F0F10]"
              >
                <LifeImage src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      )}

      {videos.length > 0 && (
        <div>
          <p className="text-xs uppercase tracking-wider text-[#9A9A9A] mb-3">Video</p>
          <div className="aspect-video overflow-hidden rounded-md border border-[#2A2A2A]/80 bg-[#0F0F10]">
            {videos.map((item) => (
              <LifeVideo key={item.src} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export function PersonalLifeAbout() {
  return (
    <div className="space-y-0">
      <OutsideTheScreen id="outside-the-screen" />
      <FootballHighlightSection />
    </div>
  )
}

export default PersonalLifeAbout
