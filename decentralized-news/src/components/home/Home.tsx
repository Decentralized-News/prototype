import MainLayout from "../MainLayout";
import { Card } from "antd";
import ArticleCard from "./ArticleCard";

const HomePage = () => {
  return (
    <MainLayout>
      <ArticleCard
        title="Sudden earthquake in the middle east"
        author="Clair Lacrosse"
        authorOrigin="New York Times"
        date="Aug 11, 2023"
        tag="Politics"
      />
    </MainLayout>
  );
};

export default HomePage;
