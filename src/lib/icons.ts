import type { LucideIcon } from "lucide-react";
import {
  MapPin,
  Bell,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Mail,
} from "lucide-react";

// Pick ONLY the icons your app should use.
// Add/remove here to control what's allowed.
export const ICONS = {
  map: MapPin,
  bell: Bell,
  phone: Phone,
  ig: Instagram,
  fb: Facebook,
  twitter: Twitter,
  mail: Mail,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
