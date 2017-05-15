'use strict';

class LeadIn {
  constructor() {
    this.leadInContainer = document.querySelector('.lead-in');
    this.closeButton = document.querySelector('.close-lead-in-button');
    this.bindButtons();
  }

  deactivateLeadIn() {
    this.leadInContainer.setAttribute('data-state', 'inactive');
  }

  bindButtons() {
    this.closeButton.addEventListener('click', this.deactivateLeadIn.bind(this));
    }
  }

  export default LeadIn;
