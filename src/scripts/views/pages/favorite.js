const Favorite = {
    async render() {
        return `
          <h2>Favorite Page</h2>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
        console.log("Favorite Page");
    },
};

export default Favorite;