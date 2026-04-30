import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <ToastContainer position="top-center" />
    </>
  );
}
