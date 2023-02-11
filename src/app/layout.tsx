import ChakraWrapper from "@/components/ChakraWrapper";
import Navbar from "@/navbar";
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
        </ChakraWrapper>
      </body>
    </html>
  );
}
