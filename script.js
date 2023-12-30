const cells = document.querySelectorAll('.cell');
        const game = document.querySelector('.game');
        let currentPlayer = 'X';
        let winner = false;

        cells.forEach(cell => {
            cell.addEventListener('click', handleClick, { once: true });
        });

        function handleClick(e) {
            const cell = e.target;
            cell.textContent = currentPlayer;

            if (checkWin(currentPlayer)) {
                gameOver(true);
            } else if (isFull()) {
                gameOver(false);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }

        function checkWin(player) {
            const wins = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ];

            return wins.some(win => {
                return win.every(index => {
                    return cells[index].textContent === player;
                });
            });
        }

        function isFull() {
            return [...cells].every(cell => cell.textContent !== '');
        }

        function gameOver(isWinner) {
            winner = isWinner;
            currentPlayer = '';
            cells.forEach(cell => {
                cell.classList.remove('win', 'lose');
                if (isWinner) {
                    cell.classList.add('win');
                } else {
                    cell.classList.add('lose');
                }
            });
        }
        