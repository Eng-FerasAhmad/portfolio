export interface Developer {
  title: string;
  name: string;
  about: string;
  socialAccount: Array<SocialAccount>
  language: Array<string>;
}

export interface SocialAccount {
  name: string;
  url: string;
  visible: boolean;
}