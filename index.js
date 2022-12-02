const breads = document.getElementById('breads')
const pastries = document.getElementById('pastries')
const sweets = document.getElementById('sweets')
const sandwichs = document.getElementById('sandwichs')
const orders = document.getElementById('orders')

const productsContainer = document.querySelector('.products__type')
productsContainer.innerHTML =
    `
<h2>PAINS</h2>
<div class="products__container">
    <div class="products__box">
        <h3>Baguettes</h3>
        <p>La Tradition</p>
        <p>La Tradigraines</p>
        <p>La Campagne</p>
        <p>La Levain</p>
    </div>
    <div class="products__box">
        <h3>Pains</h3>
        <p>Pain de Campagne</p>
        <p>Pain de Seigle</p>
        <p>Maïs</p>
        <p>Nordique</p>
        <p>Complet</p>
        <p>Sportif</p>
    </div>
    <div class="products__box">
        <h3>Autres Pains</h3>
        <p>Pain de mie</p>
        <p>Pain burger</p>
    </div>
</div>
`

breads.addEventListener('click', () => {
    productsContainer.innerHTML =
        `
        <h2>PAINS</h2>
        <div class="products__container">
            <div class="products__box">
                <h3>Baguettes</h3>
                <p>La Tradition</p>
                <p>La Tradigraines</p>
                <p>La Campagne</p>
                <p>La Levain</p>
            </div>
            <div class="products__box">
                <h3>Pains</h3>
                <p>Pain de Campagne</p>
                <p>Pain de Seigle</p>
                <p>Maïs</p>
                <p>Nordique</p>
                <p>Complet</p>
                <p>Sportif</p>
            </div>
            <div class="products__box">
                <h3>Autres Pains</h3>
                <p>Pain de mie</p>
                <p>Pain burger</p>
            </div>
        </div>
        `

})

pastries.addEventListener('click', () => {
    productsContainer.innerHTML =
        `
        <h2>VIENNOISERIES</h2>
        <div class="products__container">
            <div class="products__box">
                <h3>VIENNOISERIES</h3>
                <p>Pain au Chocolat</p>
                <p>Croissant</p>
                <p>Chouquettes</p>
                <p>Pain Suisse</p>
                <p>Pain aux raisins</p>
                <p>Torsade au Chocolat</p>
                <p>Chausson aux pommes</p>
                <p>Pain au Chocolat</p>
            </div>
            <div class="products__box">
                <h3>BRIOCHES</h3>
                <p>Brioche Feuilletée</p>
                <p>Brioche Couronne</p>
                <p>Brioche aux 3 Chocolats</p>
                <p>Brioche Parisienne</p>
            </div>
        </div>
        `

})

sweets.addEventListener('click', () => {
    productsContainer.innerHTML =
        `
        <h2>PÂTISSERIES</h2>
        <div class="products__container">
            <div class="products__box">
                <h3>ÉCLAIRS</h3>
                <p>Chocolat</p>
                <p>Pistache</p>
                <p>Café</p>
                <p>Vanille</p>
                <p>Pistache</p>
            </div>
            <div class="products__box">
                <h3>TARTES</h3>
                <p>Tarte aux Fraises</p>
                <p>Tarte au Citron</p>
                <p>Tarte aux Myrtilles</p>
                <p>Tarte à la Rhubarbe</p>
                <p>Tarte à  l'abricot</p>
            </div>
            <div class="products__box">
                <h3>ENTREMETS</h3>
                <p>L'Opéra</p>
                <p>La 3 Chocolats</p>
                <p>Le Mille Feuilles</p>
                <p>Le Royal</p>
                <p>Le Bavarois</p>
            </div>
        </div>
        
        `

})

sandwichs.addEventListener('click', () => {
    productsContainer.innerHTML =
        `
        <h2>SANDWICHS</h2>
        <div class="products__container">
            <div class="products__box">
                <h3>SANDWICHS</h3>
                <p>Jambon Beurre</p>
                <p>Poulet Mayonnaise</p>
                <p>Thon Mayonnaise</p>
                <p>Jambon Mozzarella</p>
                <p>Pistache</p>
            </div>
            <div class="products__box">
                <h3>BURGERS</h3>
                <p>Cheeseburger</p>
                <p>Bacon</p>
                <p>Double Cheese</p>
                <p>Poulet</p>
                <p>Poisson</p>
            </div>
            <div class="products__box">
                <h3>AUTRES</h3>
                <p>Bagnat Thon</p>
                <p>Bagnat Poulet</p>
                <p>Croque-Monsieur</p>
                <p>Croissant au Jambon</p>
                <p>Hot Dog</p>
            </div>
        </div>
        
        `

})


orders.addEventListener('click', () => {
    productsContainer.innerHTML =
        `
        <h2>COMMANDES</h2>
        <div class="products__container">
            <div class="products__box">
                <h3>COMMANDE PERSONNALISÉE</h3>
                <p>Gâteau d'Anniversaire</p>
                <p>Gâteau de Mariage</p>
                <p>Petits Fours</p>
                <p>Mini Viennoiseries</p>
            </div>
    </div>
        `

})