import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/tableau_logo.jpg"
          alt="Next.js Logo"
          width={180}
          height={180}
          priority
        />
      </div>
      <div className={styles.description}>
        <p>
          Round Robin Rotation for
          <code className={styles.code}>
            &nbsp;
            {/* today's date with day name */}
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
          </code>
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span>Genesis Villanueva</span>
          <p>First Priority</p>
          <Image
            className={styles.logo}
            src="/profile_pics/genesis.png"
            alt="Next.js Logo"
            width={180}
            height={180}
          />
        </div>
        <div className={styles.card}>
          <span>Wendy Samines</span>
          <p>Second Priority</p>
          <Image
            className={styles.logo}
            src="/profile_pics/wendy.png"
            alt="Next.js Logo"
            width={180}
            height={180}
          />
        </div>
        <div className={styles.card}>
          <span>Cristina Nylea</span>
          <p>Fourth Priority</p>
          <Image
            className={styles.logo}
            src="/profile_pics/cristina.png"
            alt="Next.js Logo"
            width={180}
            height={180}
          />
        </div>
        <div className={styles.card}>
          <span>Alondra Laureano</span>
          <p>Third Priority</p>
          <Image
            className={styles.logo}
            src="/profile_pics/alo.png"
            alt="Next.js Logo"
            width={180}
            height={180}
          />
        </div>
      </div>
    </main>
  );
}
