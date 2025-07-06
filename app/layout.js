import { Toaster } from "sonner";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";
import Provider from "./provider";

export const metadata = {
  title: "Vibe Coder",
  description: "Made by Bharath Kumar",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ConvexClientProvider>
          <Provider>{children}</Provider>
          <Toaster />

        </ConvexClientProvider>
      </body>
    </html>
  );
}
