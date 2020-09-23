# color-tic-tac-toe

### Link to the game: [https://aufderreise.com/tictactoe/](https://aufderreise.com/tictactoe/)

## About The Project

Tic-Tac-Toe (auf Japanisch: maru-batsu) ist ein weltberühmtes Strategiespiel. Zum Zweck zur JavaScript-Übung habe ich einfach und schnell das entwickelt.

## Technologies Used 

* HTML5
* CSS3
* JavaScript
* Bootstrap
* [Google Fonts (Lato)](https://fonts.google.com/specimen/Lato)

## Gameplay

Das Spiel ist für zwei Personen. Es gibt 3x3 quadratische Felder im Spielfeld. Beide Spieler sollen einfach ein Feld abwechselnd klicken!


## Features

Beim klassischen Spiel werden die Zeichen - Kreuze (X) und Kreise (O) - benutzt. Hier aber wurden stattdessen die Farben - Pink und Blau(turquoise) - benutzt. <br><br>
Die 3×3 Felder (Zellen) werden als neun HTML <button> gestellt. Jeder Button hat default-Value 100 (freier Button). Der von Player 1 ausgewählten Button wird durch Value 0 substituieren. Beim Player 2 - Value 10.<br>

Um das Spiel zu gewinnen, muss man alle drei Zellen in einer Reihe setzen. Es gibt acht mögliche Reihen (3 Zeilen, 3 Spalten und 2 Diagonalen). Beim jeden "Click-Event", werden alle 8 Reihen gerechnet, d.h., Value von 3 Zellen in einer Reihe werden addieren. Wenn der addierte Wert einer Reihe 0 wäre, gewinnt der Player1. Wenn 30 wäre, gewinnt der Player 2. 


## Roadmap

See the [issues](https://github.com/nao-mix/color-tic-tac-toe/issues) for a list of proposed features.


## License

Distributed under the MIT License. See `LICENSE` for more information.


## Contact

naomix - [AUF DER REISE](https://aufderreise.com/) - info@aufderreise.com

