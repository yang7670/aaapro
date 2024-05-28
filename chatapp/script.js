const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to the server');
};

ws.onmessage = (event) => {
    const messages = document.getElementById('messages');
    const message = document.createElement('div');
    message.textContent = event.data;
    messages.appendChild(message);
};

document.getElementById('send-button').addEventListener('click', () => {
    const input = document.getElementById('message-input');
    ws.send(input.value);
    input.value = '';
});
