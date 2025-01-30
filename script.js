document.addEventListener('DOMContentLoaded', () => {
  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const stopButton = document.querySelector('.stop');

  // Function to stop all sounds
  function stopSounds() {
    sounds.forEach((sound) => {
      const audio = document.getElementById(sound);
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }

  // Create audio elements for each sound
  sounds.forEach((sound) => {
    const audio = document.createElement('audio');
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`; // Ensure the sounds folder has the corresponding MP3 files
    document.body.appendChild(audio);
  });

  // Add event listeners to buttons
  document.querySelectorAll('.btn').forEach((button) => {
    const sound = button.getAttribute('data-sound');
    if (sound) {
      button.addEventListener('click', () => {
        stopSounds();
        const audio = document.getElementById(sound);
        if (audio) audio.play();
      });
    }
  });

  // Add stop functionality
  if (stopButton) {
    stopButton.addEventListener('click', stopSounds);
  }
});