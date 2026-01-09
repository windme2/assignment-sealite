# Alien Numeral Converter

A JavaScript function to convert Alien Numerals into Integers based on specific symbol values and logic.

## Problem Description
Given a string of Alien numerals, convert it to an integer.
* **Symbol Values:** A=1, B=5, Z=10, L=50, C=100, D=500, R=1000
* **Logic:** Standard addition, with subtraction rules when a smaller value precedes a larger one (e.g., `AB` = 4).

## Project Structure
```text
.
├── README.md        # Project documentation
└── solution.js      # Main logic and test cases
```

## How to Run
Ensure you have Node.js installed.

Run the solution file:

```bash
node solution.js
```

## Test Cases
The script includes the following test cases:

- `AAA` -> 3
- `LBAAA` -> 58
- `RCRZCAB` -> 1994
