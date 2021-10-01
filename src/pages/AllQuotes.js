import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Viet', text: 'Learn Frech today'},
    {id: 'q2', author: 'Nam', text: 'Learn React today'},
]

const AllQuote = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
};
export default AllQuote;