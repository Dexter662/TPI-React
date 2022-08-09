import { useSearchParams } from "react-router-dom";
import ArticleList from "../components/ArticleList";
import Search from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";


function Addressing() {
  const [query] = useSearchParams();
  const search = query.get("search");
  const debouncedSearch = useDebounce(search, 900);

  return (
    <>
      <Search data-testid="Search" />
      <ArticleList key={debouncedSearch} search={debouncedSearch} />
    </>
  )
}

export default Addressing;