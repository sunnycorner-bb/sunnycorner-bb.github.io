import { Application } from "@hotwired/stimulus"

import TermController from './controllers/term_controller'

window.Stimulus = Application.start()
Stimulus.register("term", TermController)
