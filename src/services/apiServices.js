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
      console.error('Error initializing search: ', error);
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
      console.error('Error fetching a batch of tickets: ', error);
      throw error;
    }
  }
}

export default ApiService;
