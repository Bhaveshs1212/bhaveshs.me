import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { SocialIcon } from 'react-social-icons'
import {
  CAL_COM_URL,
  EMAIL,
  GMAIL_COMPOSE_URL,
  MAILTO_URL,
  SOCIAL_LINKS,
} from '../constants/profile'

function Connect() {
  const [emailCopied, setEmailCopied] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16 md:pb-20 space-y-10">
        <section aria-label="Contact" className="space-y-8">
          <h1 className="text-lg sm:text-xl font-semibold text-[#F2F2F2]">
            Let&apos;s Build Something
          </h1>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                The best things I&apos;ve built started with a message from
                someone I didn&apos;t know yet. If you have an idea, a product, a
                problem worth solving, or just want to talk about development and
                craft, my inbox is always open.
              </p>
              <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
                Reach out at{' '}
                <a href={MAILTO_URL} className="text-[#00adb5] hover:underline">
                  {EMAIL}
                </a>
                {' '}or{' '}
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-[#00adb5] hover:underline"
                >
                  {emailCopied ? 'copied to clipboard' : 'copy email'}
                </button>
                .
              </p>
            </div>

            <div className="rounded-lg border border-[#2A2A2A] bg-[#111]/40 p-5">
              <p className="text-xs uppercase tracking-wider text-[#9A9A9A] mb-2">
                Status
              </p>
              <p className="text-sm text-[#F2F2F2] font-medium mb-1">
                Open to opportunities
              </p>
              <p className="text-sm text-[#9A9A9A] leading-relaxed">
                Available for internships, collaborations, and interesting
                projects.
              </p>
            </div>
          </div>
        </section>

        {/* Quick actions */}
        <section className="grid gap-4 sm:grid-cols-2">
          <a
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="h-full rounded-lg border border-[#2A2A2A] bg-[#111]/40 p-5 transition-all duration-300 hover:border-[#3A3A3A]">
              <h2 className="text-base font-medium text-[#F2F2F2] mb-2">
                Send an email
              </h2>
              <p className="text-sm text-[#9A9A9A] mb-3 leading-relaxed">
                Opens Gmail compose with my address pre-filled.
              </p>
              <div className="flex items-center gap-2 text-[#00adb5] text-sm font-medium">
                <span>Write email</span>
                <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </a>

          <a
            href={CAL_COM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="h-full rounded-lg border-2 border-[#00adb5]/20 bg-[#00adb5]/5 p-5 transition-all duration-300 hover:border-[#00adb5]/40 hover:bg-[#00adb5]/10">
              <h2 className="text-base font-medium text-[#F2F2F2] mb-2">
                Book a call
              </h2>
              <p className="text-sm text-[#9A9A9A] mb-3 leading-relaxed">
                Pick a time that works — 30 minutes to discuss your idea or project.
              </p>
              <div className="flex items-center gap-2 text-[#00adb5] text-sm font-medium">
                <span>Schedule now</span>
                <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </a>
        </section>

        {/* Social */}
        <section className="space-y-4 pt-2">
          <h2 className="text-base font-semibold text-[#F2F2F2]">Find me here</h2>
          <p className="text-sm text-[#9A9A9A]">
            Every place I exist online, in one spot.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#2A2A2A] bg-[#111]/40 px-3 py-2 text-sm text-[#B0B0B0] transition-colors hover:border-[#3A3A3A] hover:text-[#F2F2F2]"
              >
                <SocialIcon
                  url={social.url}
                  style={{ height: 28, width: 28 }}
                  bgColor="transparent"
                  fgColor="#9A9A9A"
                />
                {social.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Connect
