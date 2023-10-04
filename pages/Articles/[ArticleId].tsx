import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Article {
  id: string;
  title: string;
  content: string;
}

const fetchArticleContent = async (articleId: string): Promise<Article | null> => {
  // Mock data source (replace with your actual data fetching mechanism)
  const articles: Article[] = [
    { id: '0', title: 'Article 0 Title', content: 'Content for Article 0' },
    { id: '1', title: 'Article 1 Title', content: 'Content for Article 1' },
    // Add more article data as needed
  ];

  const article = articles.find((article) => article.id === articleId);
  return article || null;
};

const ArticleDetail: React.FC = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        if (articleId) {
          const articleData = await fetchArticleContent(articleId as string);
          console.log('Fetched article data:', articleData);
          setArticle(articleData);
        }
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [articleId]);

  return (
    <div>
      <h1>Article Detail</h1>
      {article ? (
        <div>
          <h2>{article.title}</h2>
          <p>{article.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ArticleDetail;
