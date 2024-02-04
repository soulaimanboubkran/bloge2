import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import { ThemeContextProvider } from "@/context/ThemeContext"; // Import ThemeContextProvider

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <ThemeContextProvider> {/* Wrap Home component with ThemeContextProvider */}
      <div className={styles.container}>
        <Featured />
        <CategoryList />
        <div className={styles.content}>
          <CardList page={page} cat={cat} />
          <Menu />
        </div>
      </div>
    </ThemeContextProvider>
  );
}
