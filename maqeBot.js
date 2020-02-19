class maqeBot {
    constructor(input) {
        this.reset();
        this.doCmd(input);
    }

    reset() {
        this.position = {
            x: 0,
            y: 0,
            d: 'N', // N, W, E, S
        };
    }

    turnRight() {
        switch (this.position.d) {
            case 'N':
                this.position.d = 'E';
                break;
            case 'E':
                this.position.d = 'S';
                break;
            case 'S':
                this.position.d = 'W';
                break;
            case 'W':
                this.position.d = 'N';
                break;
        }
    };

    turnLeft() {
        switch (this.position.d) {
            case 'N':
                this.position.d = 'W';
                break;
            case 'W':
                this.position.d = 'S';
                break;
            case 'S':
                this.position.d = 'E';
                break;
            case 'E':
                this.position.d = 'N';
                break;
        }
    };

    walk(step) {
        switch (this.position.d) {
            case 'N':
                this.position.y += step;
                break;
            case 'W':
                this.position.x -= step;
                break;
            case 'S':
                this.position.y -= step;
                break;
            case 'E':
                this.position.x += step;
                break;
        }
    };

    doCmd(input = '') {
        for (let i = 0; i < input.length; i++) {
            const char = input[i];

            switch (char) {
                case 'R':
                    this.turnRight();
                    break;
                case 'L':
                    this.turnLeft();
                    break;
                case 'W':
                    let number = '';

                    while (true) {
                        const char = input[i + 1];
                        if (isFinite(+char)) {
                            number += char;
                            i++;
                        } else {
                            break;
                        }
                    }

                    this.walk(+number);
            }
        }
    };

    getPosition() {
        return this.position;
    };

    getDirectionText() {
        switch (this.position.d) {
            case 'N':
                return 'North';
            case 'W':
                return 'West';
            case 'S':
                return 'South';
            case 'E':
                return 'East';
        }
    };

    toString() {
        return 'X: ' + this.position.x + ' Y: ' + this.position.y + ' Direction: ' + this.getDirectionText();
    };
}

module.exports = maqeBot;
