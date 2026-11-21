import { LocaleRedirect } from "./LocaleRedirect";

// Static export has no server-side redirects, so `/` picks a language in the browser.
export default function Home() {
  return <LocaleRedirect />;
}
