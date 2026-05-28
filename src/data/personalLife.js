/**
 * Personal life & hobbies content.
 * Drop media into public/life/football/ (see paths below).
 */
export const footballHighlight = {
  title: 'Inter-Branch Football Tournament',
  role: 'Branch representative',
  description:
    'Represented my branch in the inter-branch football tournament — training together, playing under pressure, and showing up for the team.',
}

export const hobbies = [
  {
    id: 'gym',
    title: 'Gym',
    description:
      'Discipline built in one area tends to bleed into others. The gym is where I reset, especially after a long debugging session.',
  },
  {
    id: 'football',
    title: 'Football',
    description:
      'Represented my branch in the inter-branch tournament. Team sport, high stakes, and a lot of memories on the pitch.',
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description:
      'Unwinding with games after long build sessions — strategy, reflexes, and a bit of friendly competition.',
  },
]

/** Media served from public/life/football/ */
export const footballMedia = [
  {
    type: 'image',
    src: '/life/football/photo-1.jpeg',
    alt: 'Bhavesh Singh at the inter-branch football tournament',
  },
  {
    type: 'image',
    src: '/life/football/photo-2.jpeg',
    alt: 'Football tournament action shot',
  },
  {
    type: 'image',
    src: '/life/football/photo-3.jpeg',
    alt: 'Team photo from the inter-branch football tournament',
  },
  {
    type: 'video',
    src: '/life/football/tournament.mp4',
    alt: 'Inter-branch football tournament highlights',
  },
]
