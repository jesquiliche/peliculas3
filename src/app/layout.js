
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
    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-4fvIe06tq5qz/zd8tS2Yt4RnGmDgIeOVm8nJPG4+yaw+RWzgqDCdLO5MCQvS2ewIkwCEQxRS+ZG28JNvQUdNw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

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
        
       <footer className="bg-dark text-white  px-4 py-2 text-center">
          <h5>© 2023 Jesús Quintana Esquiliche</h5>
       </footer>
      </body>
    </html>
  );
}
