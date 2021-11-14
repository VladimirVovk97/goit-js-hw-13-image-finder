export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchArticles() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=24338208-7a606f5b29d1c5f30e60ec7a3`,
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then(data => {
        this.incrementPage();
        if (data.hits.length === 0) {
          throw new Error('Information not found');
        }
        return data.hits;
      });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}