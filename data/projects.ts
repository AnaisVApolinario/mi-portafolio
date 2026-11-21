export type Project = {
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  docsUrl?: string;
  image?: string;
  note?: string;
};

export const projects: Project[] = [ ];