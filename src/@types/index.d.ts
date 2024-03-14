export interface NavLinks {
  name: string;
  id: string;
}

export interface CareerSection {
  title: string;
  date: string;
  subtitle: string;
  description: string[];
  location: string;
}

export interface Skill {
  name: string;
  iconSrc: string;
}
export interface SkillsSection {
  title: string;
  elems: Skill[];
}
