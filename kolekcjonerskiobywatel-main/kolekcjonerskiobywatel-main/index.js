document.addEventListener('DOMContentLoaded', () => {
    const questsContainer = document.getElementById('quests');
    
    // Tymczasowy publiczny endpoint do testów
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            data.slice(0, 5).forEach(quest => { // Ogranicz do 5 wyników
                const questElement = document.createElement('div');
                questElement.className = 'quest';
                questElement.innerHTML = `
                    <h3>${quest.title}</h3>
                    <p>Status: ${quest.completed ? 'Zakończone' : 'W toku'}</p>
                `;
                questsContainer.appendChild(questElement);
            });
        })
        .catch(error => {
            console.error('Błąd:', error);
            questsContainer.innerHTML = '<p>Nie można załadować zgłoszeń</p>';
        });
});
