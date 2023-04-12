import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Samuel W. Dowd</Title>
      <h1>Under Construction</h1>
      <p>In the meantime feel free to visit my <a href="https://www.linkedin.com/in/samuelwdowd/">LinkedIn</a>profile. Or, feel free to play with the Counter that was so generously provided by the SolidStart template this page is built on.</p>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
