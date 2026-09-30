import { permanentRedirect } from 'next/navigation';

export default function AuthorRedirect() {
  permanentRedirect('/authors/ameet-nangia');
}
