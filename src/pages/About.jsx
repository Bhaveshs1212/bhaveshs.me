import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import {
  CAL_COM_URL,
  EMAIL,
  RESUME_DOWNLOAD_NAME,
  RESUME_URL,
} from '../constants/profile'
import { focusAreas } from '../data/about'
import { getFeaturedProjects } from '../data/projects'
import { PersonalLifeAbout } from '../components/PersonalLifeSection'

const accentLink =
  'text-[#00adb5] hover:text-[#0097a7] transition-colors underline-offset-4 hover:underline'

function About() {
  const [emailCopied, setEmailCopied] = useState(false)
  const featuredProjects = getFeaturedProjects().slice(0, 2)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-[#F2F2F2]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16 md:pb-20 space-y-14">
        {/* Hero */}
        <section aria-label="About Me">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#F2F2F2] mb-5">
            Bhavesh Singh
          </h1>

          <div className="grid gap-8 sm:gap-6 md:grid-cols-3">
            <div className="order-2 space-y-4 sm:order-1 md:col-span-2">
              <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
                I&apos;ve been building since before I had a clear plan for it.
                Websites, side projects, internships, and full-stack products that
                taught me more than any single course could.
              </p>

              <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
                I&apos;m a developer from India who enjoys practical,
                user-focused applications — from DSA learning platforms to
                production-grade web apps. I care about clean architecture,
                readable code, and shipping things that actually work.
              </p>

              <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
                What keeps me going isn&apos;t just the technology. It&apos;s
                understanding systems, solving real problems, and getting a little
                better with every project. I&apos;m focused on strengthening my
                fundamentals while contributing to work that matters.
              </p>

              <p className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed">
                For the full picture, see my{' '}
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={accentLink}
                >
                  resume
                </a>
                ,{' '}
                <a href={RESUME_URL} download={RESUME_DOWNLOAD_NAME} className={accentLink}>
                  download a copy
                </a>
                , or{' '}
                <button type="button" onClick={copyEmail} className={accentLink}>
                  {emailCopied ? 'email copied' : 'copy my email'}
                </button>
                .
              </p>
            </div>

            <div className="relative order-1 block aspect-square sm:order-2">
              <div className="absolute inset-0 -z-10 size-full rounded-md bg-[#00adb5]/20" />
              <img
                src="/Profile-image.png"
                alt="Bhavesh Singh"
                className="size-full -rotate-3 transform rounded-md shadow-md object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Focus */}
        <section aria-label="What I focus on" className="space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-[#F2F2F2]">
            What I focus on
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-[#2A2A2A] bg-[#111]/40 p-5 transition-colors duration-300 hover:border-[#3A3A3A]"
              >
                <h3 className="text-sm font-medium text-[#F2F2F2] mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-[#9A9A9A] leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured work */}
        {featuredProjects.length > 0 && (
          <section aria-label="Selected work" className="space-y-6">
            <h2 className="text-lg sm:text-xl font-semibold text-[#F2F2F2]">
              Selected work
            </h2>
            <div className="grid gap-4">
              {featuredProjects.map((project, index) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="group block"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div
                    className={`flex flex-col gap-4 overflow-hidden rounded-lg border border-[#2A2A2A] bg-[#111]/40 p-4 sm:p-5 transition-all duration-300 hover:border-[#3A3A3A] hover:shadow-lg hover:shadow-black/20 sm:gap-5 ${
                      index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {project.hasImage() && (
                      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md border border-[#2A2A2A]/60 bg-[#1A1A1A] sm:aspect-auto sm:w-44 sm:self-stretch md:w-48">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex-1 sm:py-1">
                      <h3 className="text-base font-medium text-[#F2F2F2] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#9A9A9A] leading-relaxed">
                        {project.tagline || project.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#00adb5] hover:text-[#0097a7] transition-colors"
              onClick={() => window.scrollTo(0, 0)}
            >
              View all projects
              <ChevronRight className="size-4" />
            </Link>
          </section>
        )}

        {/* Get in touch */}
        <section aria-label="Get in Touch" className="space-y-6">
          <h2 className="text-lg sm:text-xl font-semibold text-[#F2F2F2]">
            Get in Touch
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={CAL_COM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="h-full rounded-lg border-2 border-[#00adb5]/20 bg-[#00adb5]/5 p-6 transition-all duration-300 hover:border-[#00adb5]/40 hover:bg-[#00adb5]/10">
                <h3 className="text-base font-medium text-[#F2F2F2] mb-3">
                  Book a Call
                </h3>
                <p className="text-sm text-[#9A9A9A] mb-3 leading-relaxed">
                  30 minutes. Your project, your idea, or just a conversation
                  about something you&apos;re building.
                </p>
                <div className="flex items-center gap-2 text-[#00adb5] text-sm font-medium">
                  <span>Schedule now</span>
                  <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </a>

            <Link to="/connect" className="group block h-full" onClick={() => window.scrollTo(0, 0)}>
              <div className="h-full rounded-lg border border-[#2A2A2A] bg-[#111]/40 p-6 transition-all duration-300 hover:border-[#3A3A3A] hover:bg-[#1A1A1A]/50">
                <h3 className="text-base font-medium text-[#F2F2F2] mb-3">
                  Connect
                </h3>
                <p className="text-sm text-[#9A9A9A] mb-3 leading-relaxed">
                  Email, social links, and every way to reach me in one place.
                </p>
                <div className="flex items-center gap-2 text-[#00adb5] text-sm font-medium">
                  <span>Go to connect</span>
                  <ChevronRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Outside the screen */}
        <PersonalLifeAbout />
      </div>
    </div>
  )
}

export default About
