import Article from './Article.jsx';
import EmptyState from './EmptyState.jsx';


function ArticleList({ articulos, fijado, desfijar }) {

    if(!articulos || articulos.length === 0){
        return <EmptyState />
    }
    return (
    <div>
        <Article datos={articulos} fijado={fijado} desfijar={desfijar} />
    </div>
    );

}




export default ArticleList;
