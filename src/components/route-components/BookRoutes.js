import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import BookRecommendationPageComponent from '../book-recommendations-component/BookRecommendationPageComponent';
import AddBookRecommendation from '../book-recommendations-component/AddBookRecommendation';
import BookUpdate from '../book-recommendations-component/BookUpdate';
import BookTablePage from '../book-recommendations-component/BookTablePage';

const BookRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/book-recommendations-table" exact component={BookTablePage} />
                <Route path="/book-recommendations-grid" exact component={BookRecommendationPageComponent} />
                <Route path="/add-book-information" exact component={AddBookRecommendation} />
                <Route path="/update-book-information/:book_id" exact component={BookUpdate} />
            </Switch>
        </HashRouter>
    )
}

export default BookRoutes;