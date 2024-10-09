export enum Color {
  BLUE= 'blue',
  PURPLE = 'purple',
  GREEN = 'green',
  ORANGE = 'orange'
}
export const strengthOptions: Array<{ strength: string; color: Color }> = [
  {
    strength: 'Achiever',
    color: Color.PURPLE,
  },
  {
    strength: 'Arranger',
    color: Color.PURPLE,
  },
  {
    strength: 'Belief',
    color: Color.PURPLE,
  },
  {
    strength: 'Consistency',
    color: Color.PURPLE,
  },
  {
    strength: 'Deliberative',
    color: Color.PURPLE,
  },
  {
    strength: 'Discipline',
    color: Color.PURPLE,
  },
  {
    strength: 'Focus',
    color: Color.PURPLE,
  },
  {
    strength: 'Responsibility',
    color: Color.PURPLE,
  },
  {
    strength: 'Restorative',
    color: Color.PURPLE,
  },
  {
    strength: 'Activator',
    color: Color.ORANGE,
  },
  {
    strength: 'Command',
    color: Color.ORANGE,
  },
  {
    strength: 'Communication',
    color: Color.ORANGE,
  },
  {
    strength: 'Competition',
    color: Color.ORANGE,
  },
  {
    strength: 'Maximizer',
    color: Color.ORANGE,
  },
  {
    strength: 'Self-Assurance',
    color: Color.ORANGE,
  },
  {
    strength: 'Significance',
    color: Color.ORANGE,
  },
  {
    strength: 'Woo',
    color: Color.ORANGE,
  },
  {
    strength: 'Adaptability',
    color: Color.BLUE,
  },
  {
    strength: 'Connectedness',
    color: Color.BLUE,
  },
  {
    strength: 'Developer',
    color: Color.BLUE,
  },
  {
    strength: 'Empathy',
    color: Color.BLUE,
  },
  {
    strength: 'Harmony',
    color: Color.BLUE,
  },
  {
    strength: 'Includer',
    color: Color.BLUE,
  },
  {
    strength: 'Individualization',
    color: Color.BLUE,
  },
  {
    strength: 'Positivity',
    color: Color.BLUE,
  },
  {
    strength: 'Relator',
    color: Color.BLUE,
  },
  {
    strength: 'Analytical',
    color: Color.GREEN,
  },
  {
    strength: 'Context',
    color: Color.GREEN,
  },
  {
    strength: 'Futuristic',
    color: Color.GREEN,
  },
  {
    strength: 'Ideation',
    color: Color.GREEN,
  },
  {
    strength: 'Input',
    color: Color.GREEN,
  },
  {
    strength: 'Intellection',
    color: Color.GREEN,
  },
  {
    strength: 'Learner',
    color: Color.GREEN,
  },
  {
    strength: 'Strategic',
    color: Color.GREEN,
  },
].sort((a, b) => {
  return a.strength.localeCompare(b.strength)
});
