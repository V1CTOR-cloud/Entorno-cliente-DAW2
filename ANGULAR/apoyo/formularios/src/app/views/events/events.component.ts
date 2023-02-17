import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CalendarOptions, DateSelectArg, EventClickArg, Calendar } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { createEventId } from '../events/event-utils';
import { CalendarFeature, selectEventsCount } from '../events/reducer';
import * as CalendarActions from '../events/actions';
import { FormContents } from '../../components/form/form.interface';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public contador: number = 0;
  public start: string = "";
  public end: string = "";
  public event: string = "";
  public formContents: FormContents = { start: "", end: "", event: "" };
  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    customButtons: {
      myCustomButton: {
        text: 'Add Event',
        click: this.addEvent.bind(this),
      },
    },
    headerToolbar: {
      left: 'prev,next today myCustomButton',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  public case: boolean = true;
  calendarVisible$ = this.store.select(CalendarFeature.selectCalendarVisible);
  events$ = this.store.select(CalendarFeature.selectEvents);
  eventsCount$ = this.store.select(selectEventsCount);

  constructor(private readonly store: Store) {}

  public handleCalendarToggle(): void {
    this.store.dispatch(CalendarActions.toggleCalendar());
  }

  public handleWeekendsToggle(): void {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  public handleDateSelect(selectInfo: DateSelectArg): void {
    const calendarApi = selectInfo.view.calendar;
    calendarApi.addEvent({
      id: (this.contador++).toString(),
      title: this.formContents.event,
      start: selectInfo.startStr + 'T' + this.formContents.start,
      end: selectInfo.startStr + 'T' + this.formContents.end,
      allDay: false,
    });
    this.formContents.end = this.formContents.event = this.formContents.start = "";

  }

  public addEvent(): void {
    this.case = !this.case;
  }

  public onSubmit(formContents: FormContents): void {
    this.formContents = formContents;
    this.start = "";
    this.end = "";
    this.event = "";
    this.case = !this.case;
  }

  public handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `¿Quieres eliminar el evento? '${clickInfo.event.title}'`
      )
    ) {
      const calendarApi = clickInfo.view.calendar;
      calendarApi.removeAllEvents();
    }
  }

}
