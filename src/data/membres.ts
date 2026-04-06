export interface Membre {
  nom: string;
  pseudo: string;
  role: string;
  tiktok?: string | null;
  discord?: string | null;
  photo: string;
}

export const membres: Membre[] = [
  {
    nom: "À définir",
    pseudo: "Jean Moula",
    role: "Membre",
    tiktok: "https://tiktok.com/@shizuka2t",
    discord: null,
    photo: "/membres/placeholder.jpg",
  },
  {
    nom: "À définir",
    pseudo: "Jack Moula",
    role: "Membre",
    tiktok: "https://tiktok.com/@wesky030",
    discord: null,
    photo: "/membres/placeholder.jpg",
  },
  {
    nom: "À définir",
    pseudo: "Chris Moula",
    role: "Membre",
    tiktok: null,
    discord: null,
    photo: "/membres/placeholder.jpg",
  },
  {
    nom: "À définir",
    pseudo: "Ryad Moula",
    role: "Membre",
    tiktok: null,
    discord: null,
    photo: "/membres/placeholder.jpg",
  },
  {
    nom: "À définir",
    pseudo: "Ben Moula",
    role: "Membre",
    tiktok: null,
    discord: null,
    photo: "/membres/placeholder.jpg",
  },
  {
    nom: "À définir",
    pseudo: "Yanis Moula",
    role: "Membre",
    tiktok: null,
    discord: null,
    photo: "/membres/placeholder.jpg",
  },
];
