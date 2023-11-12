import { SplashScreen } from "../SplashScreen";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { FloatingMenu } from "../FloatingMenu";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SplashScreen />
      <Header />
      <FloatingMenu />
      {children}
      <Footer />
    </>
  );
}
