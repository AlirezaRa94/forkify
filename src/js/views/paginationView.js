import View from './view';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkupNext(page) {
    return `
      <button class="btn--inline pagination__btn--next" data-goto="${page}">
        <span>Page ${page}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button> 
    `;
  }

  _generateMarkupPrev(page) {
    return `
      <button class="btn--inline pagination__btn--prev" data-goto="${page}">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${page}</span>
      </button>
    `;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupNext(curPage + 1);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupPrev(curPage - 1);
    }
    // Other page
    if (curPage < numPages) {
      return `
        ${this._generateMarkupPrev(curPage - 1)}
        ${this._generateMarkupNext(curPage + 1)}
      `;
    }
    // Page 1, and there are NO other pages
    if (curPage === 1 && numPages === 1) {
      return '';
    }
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new PaginationView();
