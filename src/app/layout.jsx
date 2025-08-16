import './globals.css';

export const metadata = {
  title: 'Solar System Infographic',
  description: 'Interactive space data visualization',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}