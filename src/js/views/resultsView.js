import icons from 'url:../../img/icons.svg'; // Parcel 2

class resultsView {
  #parentElement = document.querySelector('.results');
  #data;
  #errorMessage = 'No recipes found for your query. Please try again!';
  #message = '';

  #clear() {
    this.#parentElement.innerHTML = '';
  }

  #generateMarkupPreview(result) {
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

  #generateMarkup() {
    return this.#data.map(this.#generateMarkupPreview).join('');
  }

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new resultsView();
