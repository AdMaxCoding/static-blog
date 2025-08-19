import SearchView from "@/components/SearchView";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata('movies')
  return (
    <main>
      <SearchView postMetadata={postMetadata}/>
    </main>

  );
}
