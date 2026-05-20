import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

export type Route =
  | { name: "home" }
  | { name: "properties" }
  | { name: "property"; id: string }
  | { name: "about" }
  | { name: "contact" };

const parseHash = (): Route => {
  const raw = window.location.hash.replace(/^#\/?/, "");
  if (!raw) return { name: "home" };
  const parts = raw.split("/").filter(Boolean);
  if (parts[0] === "properties") return { name: "properties" };
  if (parts[0] === "property" && parts[1]) return { name: "property", id: parts[1] };
  if (parts[0] === "about") return { name: "about" };
  if (parts[0] === "contact") return { name: "contact" };
  return { name: "home" };
};

const stringifyRoute = (r: Route): string => {
  switch (r.name) {
    case "home": return "#/";
    case "properties": return "#/properties";
    case "property": return `#/property/${r.id}`;
    case "about": return "#/about";
    case "contact": return "#/contact";
  }
};

export default function App() {
  const [route, setRoute] = useState<Route>(() =>
    typeof window !== "undefined" ? parseHash() : { name: "home" }
  );

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (next: Route) => {
    const hash = stringifyRoute(next);
    if (window.location.hash !== hash) {
      window.location.hash = hash;
    } else {
      setRoute(next);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  // Also scroll up when route changes via back/forward
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [route]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar current={route} onNavigate={navigate} />
      <main className="flex-1">
        {route.name === "home" && <Home onNavigate={navigate} />}
        {route.name === "properties" && <Properties onNavigate={navigate} />}
        {route.name === "property" && <PropertyDetails id={route.id} onNavigate={navigate} />}
        {route.name === "about" && <About onNavigate={navigate} />}
        {route.name === "contact" && <Contact />}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}
