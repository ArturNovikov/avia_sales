const BASE_URL = 'https://aviasales-test-api.kata.academy';

class ApiService {
  async initSearch() {
    try {
      const response = await fetch(`${BASE_URL}/search`);
      if (response.status >= 500 && response.status < 600) {
        return this.initSearch();
      }

      if (!response.ok) {
        throw new Error(`Server responded with a status: ${response.status}`);
      }
      const data = await response.json();
      return data.searchId;
    } catch (error) {
      throw new Error(`Error initializing search: ${error.message}`);
    }
  }

  async fetchBatchTickets(searchId) {
    try {
      const response = await fetch(`${BASE_URL}/tickets?searchId=${searchId}`);

      if (response.status >= 500 && response.status < 600) {
        return this.fetchBatchTickets(searchId);
      }

      if (!response.ok) {
        throw new Error(`Server responded with a status: ${response.status}`);
      }

      const data = await response.json();
      return { tickets: data.tickets, stop: data.stop };
    } catch (error) {
      throw new Error(`Error fetching a batch of tickets: ${error.message}`);
    }
  }
}

export default ApiService;
