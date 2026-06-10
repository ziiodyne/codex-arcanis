# Web Development Project 2 - *Codex Arcanis*

Submitted by: **Ziona Agyemang**

This web app: **A Dungeons & Dragons lore flashcard study app with a dark arcane spellbook aesthetic. Users flip through 20 cards spanning five categories (monsters, spells, deities, planes, and legendary items), each posing a question on the front and revealing detailed official D&D lore on the back. A flip animation reveals the answer, and a next button draws a random card so the deck is never studied in the same order twice.**

Time spent: **7** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [x] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] Color-coded category badge on each card (red for monsters, purple for spells, gold for deities, green for planes, blue for items) with a matching Tabler icon
* [x] Smooth 3D flip animation using CSS transforms and backface-visibility
* [x] Icon-based control buttons (flip, next, shuffle) with labels so the controls are self-explanatory
* [x] A shuffle button that jumps to a random card independently of the next button

## Video Walkthrough

Here's a walkthrough of implemented required features:


![Video Walkthrough](public/web102-project-two.gif)

GIF created with ScreenToGif

## Notes

The trickiest required feature was making sure the next button never lands on the card that is currently showing, since the assignment specifically requires the next card to be chosen at random rather than in sequence. I used a small while loop that keeps rerolling the random index until it differs from the current one. The 3D flip animation also took some iteration: getting the front and back faces to sit on top of each other correctly required setting transform-style to preserve-3d on the inner wrapper and backface-visibility to hidden on each face, then rotating the back face 180 degrees so it reads right-side up when flipped.

## License

    Copyright 2026 Ziona Agyemang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
