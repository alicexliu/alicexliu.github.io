import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ScrollToProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate back to the homepage
    navigate("/", { replace: true });

    // After navigating, scroll to #projects smoothly
    setTimeout(() => {
      const el = document.getElementById("projects");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // small delay to ensure DOM is ready
  }, [navigate]);

  return null;
}
