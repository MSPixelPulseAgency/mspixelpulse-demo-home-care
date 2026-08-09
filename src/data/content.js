import { images } from './images'

export const serviceAreas = ['Dayton', 'Kettering', 'Beavercreek', 'Centerville', 'Oakwood', 'Miamisburg', 'Huber Heights', 'Vandalia']

export const testimonials = [
  { quote: 'The right support can make home feel calmer for everyone. This space is ready for an approved client story.', author: 'Family Member', placeholder: true },
  { quote: 'Respect, patience and dependable communication matter. Replace this demo quote with verified feedback before launch.', author: 'Family Caregiver', placeholder: true },
  { quote: 'Care should fit the person—not the other way around. This testimonial is intentionally marked as sample content.', author: 'Adult Child', placeholder: true },
]

export const faqs = [
  ['What is home care?', 'Home care provides non-medical assistance and companionship in a person’s own home. It may include personal routines, homemaking, meals, errands and social support.'],
  ['How do we know what kind of support is needed?', 'A conversation about routines, preferences and current challenges is a helpful first step. A care plan can then be shaped around what matters most.'],
  ['How quickly can care start?', 'Timing depends on availability, location and the support requested. Contact the care team to discuss your preferred start date.'],
  ['Can care schedules change?', 'Care needs can evolve. Scheduling options and any changes should be discussed directly with the care team.'],
  ['Do you provide overnight care?', 'Overnight non-medical support is included as a configurable service in this demo. Final availability must be confirmed by the business.'],
  ['Can family members remain involved?', 'Yes. Care can be planned with family communication in mind, based on the client’s preferences and consent.'],
  ['What areas do you serve?', 'This demo is configured for Dayton and surrounding communities. The final service boundary should be confirmed before launch.'],
  ['How do we begin?', 'Start with the request care form or call the listed number once the final business details have been connected.'],
]

export const resources = [
  {
    slug: 'choosing-home-care-aging-parent',
    title: 'Choosing Home Care for an Aging Parent',
    excerpt: 'A calm framework for discussing routines, preferences and the kind of support that could help.',
    category: 'Planning Care',
    readTime: '5 min read',
    image: images.coupleHome,
    sections: [
      ['Begin with daily life', 'Start with the routines that feel easy today and the ones that have become stressful. Looking at meals, mobility, errands, personal care and social connection can make the conversation more concrete.'],
      ['Include your parent in the decision', 'Whenever possible, centre their preferences. Ask what kind of help would feel useful, what they want to keep doing independently and what makes home feel comfortable.'],
      ['Ask practical questions', 'Discuss scheduling, caregiver matching, communication, service boundaries and how changes to a care plan are handled. Keep a written list so every provider is considered consistently.'],
    ],
  },
  {
    slug: 'signs-more-support-may-help',
    title: 'Signs Your Loved One May Need More Support',
    excerpt: 'Everyday changes that may suggest it is time for a supportive family conversation.',
    category: 'Family Guidance',
    readTime: '4 min read',
    image: images.portraitHome,
    sections: [
      ['Notice patterns, not one-off moments', 'A missed meal or untidy room can happen to anyone. Repeated changes in routines, mobility, meals or social connection may be more useful signals to discuss.'],
      ['Lead with curiosity', 'Use open questions instead of assumptions. A respectful conversation can reveal whether the challenge is temporary, a preference, or an area where practical support would be welcome.'],
      ['Choose the smallest helpful step', 'Support does not need to begin with a full schedule. A few hours of companionship, homemaking or meal support may be enough to make the week feel easier.'],
    ],
  },
  {
    slug: 'safer-aging-at-home',
    title: 'Preparing a Home for Safer Aging',
    excerpt: 'Simple, non-clinical ways to make daily movement and routines easier at home.',
    category: 'At Home',
    readTime: '6 min read',
    image: images.mobility,
    sections: [
      ['Clear everyday pathways', 'Keep frequently used routes free of cords, clutter and unstable rugs. Good lighting near stairs, hallways and entrances can also make movement easier.'],
      ['Keep essentials within reach', 'Arrange commonly used items at comfortable heights and keep frequently worn clothing, kitchen basics and personal items easy to access.'],
      ['Review routines together', 'Ask which parts of the day feel awkward or tiring. Small changes to placement, timing or support can often reduce unnecessary effort.'],
    ],
  },
  {
    slug: 'questions-for-home-care-providers',
    title: 'Questions to Ask When Choosing Home Care',
    excerpt: 'A practical checklist for comparing communication, scheduling and service fit.',
    category: 'Planning Care',
    readTime: '5 min read',
    image: images.greeting,
    sections: [
      ['Understand service boundaries', 'Ask exactly what caregivers can and cannot provide. Confirm whether the service is non-medical and how changing needs are handled.'],
      ['Discuss consistency and communication', 'Learn how caregiver matching works, who your main contact will be and how family updates are shared with consent.'],
      ['Confirm the practical details', 'Review minimum visit lengths, scheduling, cancellations, rates, service areas and any required agreements before making a decision.'],
    ],
  },
  {
    slug: 'supporting-memory-changes',
    title: 'Supporting Someone Experiencing Memory Changes',
    excerpt: 'Gentle ways to support familiarity, choice and connection in everyday routines.',
    category: 'Memory Support',
    readTime: '5 min read',
    image: images.reading,
    sections: [
      ['Use familiar rhythms', 'Predictable routines can make the day easier to navigate. Familiar music, meals, activities and simple cues may support a sense of comfort.'],
      ['Keep choices manageable', 'Offer one or two clear options instead of many. Allow extra time for a response and avoid correcting every detail when reassurance is more helpful.'],
      ['Protect connection', 'Conversation, photographs, reading and favorite activities can create meaningful moments even when memories change.'],
    ],
  },
  {
    slug: 'how-respite-supports-families',
    title: 'How Respite Care Supports Families',
    excerpt: 'Why regular time to rest can strengthen the care a family provides over the long term.',
    category: 'Family Caregivers',
    readTime: '4 min read',
    image: images.coupleGarden,
    sections: [
      ['Rest is part of sustainable care', 'Family caregivers often balance work, home and care responsibilities. Planned time away can protect energy and make ongoing support more sustainable.'],
      ['Make respite predictable', 'A regular schedule can be easier for everyone than waiting for exhaustion. Familiar timing also helps the person receiving care know what to expect.'],
      ['Share the routine', 'Write down preferences, meals, activities and important contacts so another caregiver can support the day with continuity.'],
    ],
  },
]
