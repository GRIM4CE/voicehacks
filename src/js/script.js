'use strict';
import Navigation from './components/navigation';
import Speaker from './components/speaker';

function appInit() {
  // Init Mobile Nav
  if (document.querySelector(".mobile-hamburger-button-container")) {
    const navigation  = new Navigation ();
  }

  // Create Speakers
  if (document.querySelectorAll('.speaker-container')) {
    const speakerContainers = document.querySelectorAll('.speaker-container');
    for (let i = 0; i < speakerContainers.length; i++) {
      if (speakerContainers[i].querySelector('.speaker-description') !== null) {
        new Speaker(speakerContainers[i]);
      }
    }
  }
}

appInit();
