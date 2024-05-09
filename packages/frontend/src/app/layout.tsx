import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Inter as FontSans } from "next/font/google";
import { Amplify } from "aws-amplify";
import config from "./config";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Next App With SST",
  description: "Creating app with sst framework",
};

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID,
  },
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION,
      },
    ],
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script>window.global = window; var exports = {};</script>
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header className="w-4/5 h-12 mx-auto bg-secondary mt-4 rounded-md flex justify-between items-center px-4">
          <h2 className="font-bold">My App</h2>
          <div className="flex gap-4">
            <Button variant="link">Sign in</Button>
            <Button variant="link">Log in</Button>
          </div>
        </header>
        {children}
        <footer className="border-t border-primary h-10 w-5/6 mx-auto text-center text-ring">
          Made by Ginigo
        </footer>
      </body>
    </html>
  );
}
