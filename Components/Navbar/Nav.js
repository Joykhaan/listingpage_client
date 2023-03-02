import Link from "next/link";
import styles from "../../styles/Nav.module.css"

const Nav = () => {
  return (

    <div className={`navbar bg-blue-500 ${styles.sticky}`}>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className={styles.navstyle}>
          <Link href="/" >Home</Link>
          <Link href="/home" >All product</Link>
          <Link href="/about" >About</Link>
          <Link href="/blog" >Blog</Link>
          <Link href="/contact" >Contact</Link>
          
        </ul>
      </div>
    </div>

  );
};

export default Nav;