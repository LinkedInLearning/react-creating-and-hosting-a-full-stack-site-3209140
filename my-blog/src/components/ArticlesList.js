import { Link } from 'react-router-dom';

const ArticlesList = ({ articles }) => {
    return (
        <>
        {articles.map(article => (
            <Link key={article.name} className="article-list-item" to={`/articles/${article.name}`}>
                <h3>{article.title}</h3>
                <p>{article.content[0].substring(0, 150)}...</p>
            </Link>
        ))}
        </>
    );
}

export default ArticlesList;