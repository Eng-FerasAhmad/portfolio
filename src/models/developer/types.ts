export interface Developer {
  title: string;
  name: string;
  dateOfBirth: string;
  nationality: string;
  address: string;
  maritalStatus: string;
  about: string;
  education: Array<Education>;
  socialAccount: Array<SocialAccount>
}

export interface Education {
  title: string;
  start: string;
  end: string;
  country: string;
  visible: boolean;
}

export interface SocialAccount {
  name: string;
  url: string;
  visible: boolean;
}