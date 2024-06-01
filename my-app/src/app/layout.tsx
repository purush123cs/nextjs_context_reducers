// These styles apply to every route in the application
import './globals.css';
import Header from "../components/header";
import Footer from "../components/footer";
import { Provider } from "@/context/context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      
        <div className="w-auto h-10 bg-yellow-500">
          <Header/>
        </div>
        <div className="flex w-auto h-screen">
          <Provider>
            {children}
          </Provider>
        </div>
        <div className="w-auto h-10 fixed inset-x-0 bottom-0 bg-yellow-500">
          <Footer/>
        </div>
        
      </body>
    </html>
  )
}
