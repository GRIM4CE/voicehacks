'use strict';
import Subscribe from './lead-in/subscribe';

class LeadIn {
  constructor() {
    this.leadInContainer = document.querySelector('.lead-in');
    this.closeButton = document.querySelector('.close-lead-in-button');
    this.bindButtons();
  }

  activateLeadIn() {
    this.leadInContainer.setAttribute('data-state', 'active');
    if (this.leadInContainer.querySelector('.hbspt-form')) {
      let form = this.leadInContainer.querySelector('.hbspt-form')
      const subscribe = new Subscribe(form);
    }
  }

  deactivateLeadIn() {
    this.leadInContainer.setAttribute('data-state', 'inactive');
  }

  bindButtons() {
    setTimeout(this.activateLeadIn.bind(this), 500);
    this.closeButton.addEventListener('click', this.deactivateLeadIn.bind(this));
  }
}

export default LeadIn;
