import ChakraWrapper from "@/components/ChakraWrapper";
import Footer from "@/views/footer/Footer";
import Navbar from "@/views/navbar";
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
          <Navbar />
          {children}
          <Footer />
        </ChakraWrapper>
      </body>
    </html>
  );
}
