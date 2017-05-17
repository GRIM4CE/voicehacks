'use strict';

class Subscribe {
  constructor(form) {
    this.form = form
  }

  checkFormCompletion() {
  }

  bindButtons() {
    this.form.setAttribute('data-state', 'incomplete');
  }
}

export default Subscribe;
