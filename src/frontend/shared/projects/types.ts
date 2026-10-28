export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  description: string;
  href: string;
  id: string;
  image: string;
  isOwn?: boolean;
  kind: string;
  tags: string[];
  title: string;
  year: string;
};

export type Service = {
  no: string;
  text: string;
  title: string;
};
