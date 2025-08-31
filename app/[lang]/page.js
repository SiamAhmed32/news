import FeatureStory from "@/components/News Section/FeatureStory";
import NewsList from "@/components/News Section/NewsList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <FeatureStory />
      <NewsList />
    </main>
  );
}
