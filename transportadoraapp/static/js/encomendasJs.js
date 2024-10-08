// Simulação de uma lista de encomendas de diferentes clientes
const encomendas = [
    { produto: 'Produto A', cliente: 'João', quantidade: 2 },
    { produto: 'Produto B', cliente: 'Maria', quantidade: 1 },
    { produto: 'Produto C', cliente: 'João', quantidade: 3 },
    { produto: 'Produto D', cliente: 'Ana', quantidade: 4 },
    { produto: 'Produto E', cliente: 'Maria', quantidade: 2 },
];

// Evento ao submeter o formulário
document.getElementById('clienteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Limpa a lista de encomendas
    document.getElementById('encomendaList').innerHTML = '';

    // Pega o nome do cliente inserido
    const cliente = document.getElementById('cliente').value;

    // Filtra as encomendas feitas pelo cliente
    const resultado = encomendas.filter(encomenda => encomenda.cliente.toLowerCase() === cliente.toLowerCase());

    // Verifica se há encomendas para o cliente
    if (resultado.length > 0) {
        // Adiciona cada encomenda filtrada à lista
        resultado.forEach(encomenda => {
            const li = document.createElement('li');
            li.textContent = `Produto: ${encomenda.produto} | Quantidade: ${encomenda.quantidade}`;
            document.getElementById('encomendaList').appendChild(li);
        });
    } else {
        // Se não houver encomendas, exibe uma mensagem
        const li = document.createElement('li');
        li.textContent = 'Nenhuma encomenda encontrada para este cliente.';
        document.getElementById('encomendaList').appendChild(li);
    }

    // Limpa o campo de entrada
    document.getElementById('clienteForm').reset();
});

document.addEventListener("DOMContentLoaded", function() {
    // Inicializar o mapa quando o modal for aberto
    const rastreioModal = document.getElementById('rastreioModal');
    rastreioModal.addEventListener('shown.bs.modal', function () {
        // Cria o mapa centrado em uma posição fictícia
        const map = L.map('map').setView([-23.55052, -46.633308], 5); // Coordenadas fictícias

        // Adicionar uma camada de mapa (usando o OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Definir cidades fictícias e a rota
        const cidadeA = L.marker([-23.55052, -46.633308]).addTo(map).bindPopup('Cidade A - Origem');
        const cidadeB = L.marker([-22.9035, -43.2096]).addTo(map).bindPopup('Cidade B - Destino');

        // Adicionar uma linha (rota) entre as cidades fictícias
        const rota = L.polyline([[-23.55052, -46.633308], [-22.9035, -43.2096]], {color: 'blue'}).addTo(map);

        // Centraliza o mapa na rota
        map.fitBounds(rota.getBounds());
    });
});
