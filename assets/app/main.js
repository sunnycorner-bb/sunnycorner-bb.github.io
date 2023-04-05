import { Application } from "@hotwired/stimulus"

import TermController from './controllers/term_controller'
import ReminderController from './controllers/reminder_controller'

window.Stimulus = Application.start()
Stimulus.register("term", TermController)
Stimulus.register("reminder", ReminderController)
