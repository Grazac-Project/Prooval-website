import { getMentorsBySlug } from "@/api/authentication/auth";

export async function generateMetadata({ params }) {
  try {
    const { username } = params;
    const response = await getMentorsBySlug(username);
    // console.log(response.data.data.data);
    const mentorData = response.data.data.data;
    const mentor = mentorData.mentor;

    return {
      title: `${mentor.firstName} ${mentor.lastName} | Prooval `,
      description: `${mentor.firstName} ${mentor.lastName}, ${mentor.role} at ${
        mentor.company
      }(${mentor.country}). Expert in ${mentor.skills?.slice(0, 3).join(", ")}${
        mentor.skills?.length > 3 ? "..." : ""
      }`,
      openGraph: {
        title: `${mentor.firstName} ${mentor.lastName} | Prooval `,
        description: `${mentor.firstName} ${mentor.lastName}, ${
          mentor.role
        } at ${mentor.company}(${mentor.country}). Expert in ${mentor.skills
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
