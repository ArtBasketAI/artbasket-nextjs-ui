// pages/explore.tsx
import { useRouter } from "next/router";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import { signInWithEmailPassword } from "../config/auth";
import ProjectCarousel from "../components/ProjectCarousel";

const dummyProjects = [
  {
    title: "Project 1",
    imageUrl: "/assets/avatar.png",
  },
  {
    title: "Project 2",
    imageUrl: "/assets/avatar.png",
  },
  {
    title: "Project 3",
    imageUrl: "/assets/avatar.png",
  },
  {
    title: "Project 4",
    imageUrl: "/assets/avatar.png",
  },
  {
    title: "Project 5",
    imageUrl: "/assets/avatar.png",
  },
  {
    title: "Project 6",
    imageUrl: "/assets/avatar.png",
  },
  {
    title: "Project 7",
    imageUrl: "/assets/avatar.png",
  },
  {
    title: "Project 8",
    imageUrl: "/assets/avatar.png",
  },
];

const Explore = () => {
  const router = useRouter();

  const handleLoginSuccess = (user) => {
    console.log("Logged in user:", user);
    router.push("/dashboard");
  };

  const handleEmailPasswordLogin = async (email, password) => {
    try {
      const user = await signInWithEmailPassword(email, password);
      handleLoginSuccess(user);
    } catch (error) {
      console.error("Login error:", error);
      // Optionally, set an error message state here to display in the UI
    }
  };

  return (
    <>
      {/* Background - seems to not be working */}
      <div className="fixed top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('/assets/artbasket-background.webp')] bg-cover -z-10"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-[4rem]">
          <div className="flex justify-center items-center md:min-h-screen flex-col md:flex-row">
            <div className="max-w-md py-10 md:py-0 md:mr-10">
              <h1 className="text-4xl font-bold text-center">
                Welcome to ArtBasketAI
              </h1>
              <p className="text-center mt-4">
                Your co-pilot for streamlining content creation.
              </p>
            </div>
            <Login
              onEmailPasswordLogin={handleEmailPasswordLogin}
              onLoginSuccess={handleLoginSuccess}
            />
          </div>
          {/* Project Carousels */}
          <div className="container mx-auto px-4">
            <ProjectCarousel title="Most Popular" projects={dummyProjects} />
            <ProjectCarousel title="Most Viewed" projects={dummyProjects} />
            <ProjectCarousel
              title="Recently Created"
              projects={dummyProjects}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Explore;
