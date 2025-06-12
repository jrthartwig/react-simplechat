// Mocked API for chat messages
export const chatApi = {
  async fetchMessages() {
    // Simulate network delay
    await new Promise(r => setTimeout(r, 300));
    return [
      { id: 1, user: 'Alice', text: 'Hello, how can I help you?' },
      { id: 2, user: 'Bob', text: 'I have a question about my order.' },
    ];
  },
  async sendMessage(message) {
    await new Promise(r => setTimeout(r, 200));
    return { id: Math.random(), user: 'You', text: message };
  }
};