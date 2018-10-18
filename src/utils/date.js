const DAYS_NOMINATIVES = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Субота',
]

export const getDayNominative = date => (
  DAYS_NOMINATIVES[new Date(date).getDay()]
);
