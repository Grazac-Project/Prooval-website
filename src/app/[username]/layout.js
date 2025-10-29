import { getMentorsBySlug } from "@/api/authentication/auth";

export async function generateMetadata({ params }) {
  try {
    const { username } = params;
    const response = await getMentorsBySlug(username);
    const mentorData = response.data.data.data;
    const mentor = mentorData.mentor;

    return {
      title: `${mentor.firstName} ${mentor.lastName} | Prooval Mentor`,
      description: `Book a session with ${mentor.firstName} ${
        mentor.lastName
      }, ${mentor.role} at ${mentor.company}. Expert in ${mentor.skills
        ?.slice(0, 3)
        .join(", ")}${mentor.skills?.length > 3 ? "..." : ""}`,
      openGraph: {
        title: `${mentor.firstName} ${mentor.lastName} | Prooval Mentor`,
        description: `Book a session with ${mentor.firstName} ${
          mentor.lastName
        }, ${mentor.role} at ${mentor.company}. Expert in ${mentor.skills
          ?.slice(0, 3)
          .join(", ")}${mentor.skills?.length > 3 ? "..." : ""}`,
        images: [mentor.image],
      },
    };
  } catch (error) {
    return {
      title: "Prooval Mentor",
      description: "Connect with expert mentors on Prooval",
    };
  }
}

export default function Layout({ children }) {
  return children;
}
