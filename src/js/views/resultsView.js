import icons from 'url:../../img/icons.svg'; // Parcel 2

class resultsView {
  _parentElement = document.querySelector('.results');
  _data;
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _generateMarkupPreview(result) {
    return `
      <li class="preview">
        <a class="preview__link preview__link--active" href="#${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="${result.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    `;
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new resultsView();
