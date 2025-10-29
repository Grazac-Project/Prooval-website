import { getMentorsBySlug } from "@/api/authentication/auth";

export async function generateMetadata({ params }) {
  try {
    const { username } = params;
    const response = await getMentorsBySlug(username);
    console.log(response.data.data.data);
    const mentorData = response.data.data.data;
    const mentor = mentorData.mentor;

    return {
      title: `${mentor.firstName} ${mentor.lastName} - ${mentor.country} |  ${mentor.role} at ${mentor.company}.  `,
      // description: `${mentor.firstName} ${mentor.lastName} - ${mentor.country} |  ${mentor.role} at ${mentor.company}.  `,
      openGraph: {
        title: `${mentor.firstName} ${mentor.lastName} - ${mentor.country} |  ${mentor.role} at ${mentor.company}.  `,
        // description: `${mentor.firstName} ${mentor.lastName} - ${mentor.country} |  ${mentor.role} at ${mentor.company}.  `,
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
