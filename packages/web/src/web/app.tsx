import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { Provider } from "./components/provider";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import Index from "./pages/index";
import Services from "./pages/services";
import ServicePage from "./pages/service";
import About from "./pages/about";
import Reviews from "./pages/reviews";
import Contact from "./pages/contact";
import ServiceAreas from "./pages/service-areas";
import Admin from "./pages/admin";
import NotFound from "./pages/not-found";

/** Scroll to top on navigation — wouter keeps the scroll position otherwise. */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);
  return null;
}

function Site() {
  return (
    <>
      <Header />
      <main id="main" className="pb-16 md:pb-0">
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/services" component={Services} />
          <Route path="/services/:slug" component={ServicePage} />
          <Route path="/about" component={About} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/contact" component={Contact} />
          <Route path="/service-areas" component={ServiceAreas} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Provider>
      <ScrollToTop />
      <Switch>
        {/* Admin is chrome-free — no site header/footer */}
        <Route path="/admin" component={Admin} />
        <Route component={Site} />
      </Switch>
    </Provider>
  );
}

export default App;
