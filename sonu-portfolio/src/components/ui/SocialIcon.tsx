import { Github, Linkedin, Mail, type LucideProps } from "lucide-react";

const map = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
} as const;

export function SocialIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = map[name as keyof typeof map] ?? Mail;
  return <Icon {...props} />;
}
