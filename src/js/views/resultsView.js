import BaseListView from './baseListView.js';

class ResultsView extends BaseListView {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';
}

export default new ResultsView();
