'use strict';

class LeadIn {
  constructor() {
    this.leadInContainer = document.querySelector('.lead-in');
    this.closeButton = document.querySelector('.close-lead-in-button');
    this.bindButtons();
  }

  activateLeadIn() {
    this.leadInContainer.setAttribute('data-state', 'active');
  }

  deactivateLeadIn() {
    this.leadInContainer.setAttribute('data-state', 'inactive');
  }

  bindButtons() {
    setTimeout(this.activateLeadIn.bind(this), 5000);
    this.closeButton.addEventListener('click', this.deactivateLeadIn.bind(this));
  }
}

export default LeadIn;
