
import "./globals.css";





import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Películas",
  description: "Catálago de películas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
    

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"/>
      <script defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
     
        <Navigation />
        {children}

       
      </body>
    </html>
  );
}
