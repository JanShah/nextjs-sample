import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <p>
            This is another page of the SSR example, you accessed via a {" "}
            <strong>{this.props.isServer ? "server" : "client"} request</strong>.
          </p>
          <p>
            You can reload to see how the page changes. Change made at 17:34. 

          </p>
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default AboutPage;