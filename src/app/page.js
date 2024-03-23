import Image from "next/image";
import styles from "./page.module.css";
import { Login } from "./components/Login";
import Watchcontainer from "./components/watchcontainer";


export default function Home() {
  return (
    <main className="bg-gradients">
      <div className="withbgimg">
        <div className="row">
          <div className="col-md-4">
            <Login />
          </div>
          <div className="col-md-8">
            <Watchcontainer />
          </div>
        </div>

      </div>
    </main>
  );
}
