const pexels = (id, name, alt, credit) => ({
  src: `/images/${name}.webp`,
  alt,
  credit,
  source: `https://www.pexels.com/photo/${id}/`,
})

export const images = {
  companionship: pexels('elderly-care-at-home-generational-connection-29373893', 'caregiver-companionship', 'Caregiver and older woman sharing a warm conversation at home', 'Jsme MILA'),
  coupleGarden: pexels('smiling-elderly-couple-on-lawn-near-house-19956463', 'senior-couple-garden', 'Older couple smiling together on a lawn near their home', 'Rollz International'),
  gardenPortrait: pexels('portrait-of-elderly-woman-in-garden-16218038', 'senior-garden-portrait', 'Older woman smiling in a lush green garden', 'Lucas Gabriel'),
  coupleHome: pexels('close-up-photo-of-an-elderly-couple-8815914', 'senior-couple-at-home', 'Older couple smiling warmly together at home', 'Kampus Production'),
  personalCare: pexels('elderly-woman-receiving-home-care-assistance-29372693', 'home-care-assistance', 'Caregiver offering attentive personal support to an older woman', 'Jsme MILA'),
  portraitHome: pexels('a-portrait-of-a-happy-elderly-woman-5473068', 'happy-senior-at-home', 'Happy older woman relaxing in a comfortable home setting', 'Polina Tankilevitch'),
  couplePorch: pexels('an-elderly-couple-standing-on-a-porch-23021512', 'senior-couple-porch', 'Older couple enjoying a sunny moment together on a porch', 'Abdulmutalip BOZKUS'),
  supportMan: pexels('caring-senior-assistance-in-cozy-home-setting-29372722', 'caregiver-supporting-senior-man', 'Caregiver supporting an older man in a cozy home', 'Jsme MILA'),
  cookingWoman: pexels('an-elderly-woman-preparing-food-in-the-kitchen-18941332', 'senior-cooking-at-home', 'Older woman preparing food in a warm home kitchen', 'Vaivography Photos'),
  reading: pexels('photo-of-an-elderly-woman-reading-a-book-7394785', 'senior-reading-at-home', 'Older woman reading comfortably at home', 'Ivan S'),
  greeting: pexels('elderly-caregiver-shaking-hands-with-senior-woman-29372534', 'caregiver-warm-greeting', 'Caregiver warmly greeting an older woman at home', 'Jsme MILA'),
  cookingMan: pexels('elderly-man-preparing-food-8805508', 'senior-man-meal-prep', 'Older man preparing fresh vegetables in his kitchen', 'Mike Jones'),
  mobility: pexels('elderly-care-routine-in-a-cozy-home-setting-29372715', 'caregiver-mobility-support', 'Caregiver providing gentle mobility support at home', 'Jsme MILA'),
  coupleCooking: pexels('an-elderly-couple-preparing-food-8805843', 'senior-couple-cooking', 'Older couple enjoying meal preparation together', 'Mike Jones'),
  coupleWalk: pexels('elderly-couple-walking-by-the-seaside-33714173', 'senior-couple-walking', 'Older couple enjoying a peaceful walk together', 'Miruna Daiana'),
  familyHome: pexels('elderly-man-and-woman-in-home-11441175', 'senior-family-at-home', 'Older adults sharing a relaxed moment in a welcoming home', 'Mehmet Turgut Kirkgoz'),
}

export const imageList = Object.values(images)
