// A starter layout file where whole project is contrlled globally.

import ChakraWrapper from "@/components/ChakraWrapper";
import Footer from "@/views/footer/Footer";
import Header from "@/views/header/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraWrapper>
          {/* <Navbar /> */}
          <Header />
          {children}

          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
