export interface LabMember {
  name: string;
  title: string;
  description: string;
  photo: string;
  researchInterests: string[];
}

export interface LabLeader extends LabMember {
  education: string[];
  achievements: string[];
}

export interface ResearchArea {
  title: string;
  description: string;
  icon: string;
}

export interface Contact {
  email: string;
  title: string;
  description: string;
  message: string;
}

export interface LabData {
  labLeader: LabLeader;
  teamMembers: LabMember[];
  researchAreas: ResearchArea[];
  contact: Contact;
} 