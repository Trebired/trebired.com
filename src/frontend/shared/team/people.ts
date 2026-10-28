type TeamRoleKey = "founder";

type TeamPerson = {
  github: string;
  role: TeamRoleKey;
};

export const teamPeople: TeamPerson[] = [
  { github: "mirmachynka", role: "founder" },
];

export type { TeamPerson, TeamRoleKey };
