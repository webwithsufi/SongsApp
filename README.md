# Songs App - Music Player

This project is a simple music player web application built with HTML, CSS, and JavaScript. It allows users to play, pause, skip forward, and skip backward through a list of songs.

**Live Demo:** [https://webwithsufi.github.io/SongsApp/](https://webwithsufi.github.io/SongsApp/)

## Features

-   **Song List:** Displays a list of songs with album art and song names.
-   **Now Playing Display:** Shows the album art of the currently playing song.
-   **Playback Controls:** Includes play/pause, skip forward, and skip backward buttons.
-   **Audio Player:** Plays audio files.
-   **Visual Feedback:** Provides visual feedback on button presses and song selection.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript
-   Remix Icon (for playback icons)

## Getting Started

1.  **Clone the repository (if applicable):**

    ```bash
    git clone [repository URL]
    ```

2.  **Open `index.html` in your browser.**

## Project Structure

-   `index.html`: The main HTML file containing the structure of the music player.
-   `style.css`: The CSS file for styling the music player.
-   `script.js`: The JavaScript file for handling the music player's functionality.
-   `songs/`: A directory containing the audio files and album art images.
-   `README.md`: This file.

## JavaScript Functionality

-   **`songs` Array:** An array of objects containing song information (song name, audio source, album art source).
-   **`songcard()` Function:** Generates the song list and updates the now playing display.
-   **Event Listeners:** Handles play/pause, skip forward, skip backward, and song selection events.
-   **Audio Object:** Controls audio playback.
-   **Visual Feedback:** Updates the play/pause button icon and the now playing display.

## Data Structure

-   **`songs` Array:** An array of objects, each containing `songName`, `src` (audio source), and `img` (album art source).

## Customization

-   **Adding/Modifying Songs:** Modify the `songs` array in `script.js` to add or change song information.
-   **Styling:** Customize the appearance of the music player by modifying the `style.css` file.
-   **Adding Functionality:** Extend the functionality by modifying the `script.js` file, such as adding volume control or a progress bar.

## Improvements

-   Add volume control.
-   Implement a progress bar.
-   Improve the UI/UX with better animations and transitions.
-   Add a shuffle feature.
-   Make the player responsive for different screen sizes.
-   Store the current song in local storage.
-   Add song duration to song list.

## Author

-   Sufyan Ali Khan

## License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE.md` file for details. (If you have a license file.)
