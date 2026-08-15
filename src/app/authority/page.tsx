import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: '/authority',
  },
  robots: {
    index: false,
    follow: false,
  },
};

import { redirect } from "next/navigation";

export default function AuthorityDashboard() {
    redirect("/authority/leads");
}
