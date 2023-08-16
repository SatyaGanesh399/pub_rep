export interface SkillOrJob {
  title: string;
  text: string;
}

export interface Institute {
  name: string;
  location: string;
  link: string;
}

export interface Options {
  types: string[];
  school: string[];
  graduation: string[];
  post: string[];
}

export interface Career {
  summary: string[];
  title: string;
  titleImg: string;
  titleText: string;
  description: string;
  skills: SkillOrJob[];
  options: Options;
  job: SkillOrJob[];
  personalities: SkillOrJob[];
  institute: Institute[];
  pros: string[];
  cons: string[];
}
