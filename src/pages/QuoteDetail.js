import React from "react";
import { Route, useParams, Link } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Viet', text: 'Learn Frech today'},
    {id: 'q2', author: 'Nam', text: 'Learn React today'},
]

const QuoteDetail = () => {
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(!quote){
        return <p>No quote found.</p>
    }
    return (
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`} exact>
                <div className='centered'>
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path="/quotes/:quoteId/comments">
                <Comments />
            </Route>
        </React.Fragment>
    )
};

export default QuoteDetail;