document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var cdate = new Date();
    var cy = cdate.getFullYear();
    var cm = cdate.getMonth()+1;
    var cd = cdate.getDay();

    if(cm<10){
      cm='0'+cm;
    }
    if(cd<10){
      cd='0'+cd;
    }

    var ctoday = cy+ '-' + cm + '-'+ cd;

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prevYear,prev,next,nextYear today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      initialDate: ctoday,
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
            title: 'samsung-recruit-계약직',
            start: '2022-09-03',
            end : '2022-09-09',
            color: '#039'
        },
        {
            title: '계약직채용면접',
            start: '2022-09-03T10:30:00',
            end: '2022-09-03T12:30:00',
            color: '#06c',
        },
        {
            title: '신입채용면접',
            start: '2022-09-03T12:30:00',
            end: '2022-09-03T16:30:00',
            color: '#06c'
        },
        {
            title: '경력직 채용면접',
            start: '2022-09-03T16:30:00',
            end: '2022-09-03T18:30:00',
            color: '#06c'
        },
        {
            title: '계약직채용면접',
            start: '2022-09-05T10:30:00',
            end: '2022-09-05T12:30:00',
            color: '#06c'
        },
        {
            title: '신입채용면접',
            start: '2022-09-05T12:30:00',
            end: '2022-09-05T16:30:00',
            color: '#06c'
        },
        {
            title: '경력직 채용면접',
            start: '2022-09-05T16:30:00',
            end: '2022-09-05T18:30:00',
            color: '#06c'
        },
        {
            title: '계약직채용면접',
            start: '2022-09-07T10:30:00',
            end: '2022-09-07T12:30:00',
            color: '#06c'
        },
        {
            title: '신입채용면접',
            start: '2022-09-07T12:30:00',
            end: '2022-09-07T16:30:00',
            color: '#06c'
        },
        {
            title: '경력직 채용면접',
            start: '2022-09-07T16:30:00',
            end: '2022-09-07T18:30:00',
            color: '#06c'
        },
        {
            title: '계약직면접종료',
            start: '2022-09-08',
            display: 'background',
            color: '#06c'
        },
        {
          title: 'samsung-recruit-정규직',
          start: '2022-09-23',
          end : '2022-09-30',
          color: '#039'
        },
        {
          title: '정규직채용면접',
          start: '2022-09-23T10:30:00',
          end: '2022-09-23T12:30:00',
          color: '#06c'
        },
        {
            title: '신입채용면접',
            start: '2022-09-23T12:30:00',
            end: '2022-09-23T16:30:00',
            color: '#06c'
        },
        {
            title: '경력직 채용면접',
            start: '2022-09-23T16:30:00',
            end: '2022-09-23T18:30:00',
            color: '#06c'
        },
        {
            title: '정규직채용면접',
            start: '2022-09-25T10:30:00',
            end: '2022-09-25T12:30:00',
            color: '#06c'
          },
          {
              title: '신입채용면접',
              start: '2022-09-25T12:30:00',
              end: '2022-09-25T16:30:00',
              color: '#06c'
          },
          {
              title: '경력직 채용면접',
              start: '2022-09-25T16:30:00',
              end: '2022-09-25T18:30:00',
              color: '#06c'
          },
          {
            title: '정규직채용면접',
            start: '2022-09-27T10:30:00',
            end: '2022-09-27T12:30:00',
            color: '#06c'
          },
          {
              title: '신입채용면접',
              start: '2022-09-27T12:30:00',
              end: '2022-09-27T16:30:00',
              color: '#06c'
          },
          {
              title: '경력직 채용면접',
              start: '2022-09-27T16:30:00',
              end: '2022-09-27T18:30:00',
              color: '#06c'
          },
          {
            title: '정규직채용면접',
            start: '2022-09-29T10:30:00',
            end: '2022-09-29T12:30:00',
            color: '#06c'
          },
          {
              title: '신입채용면접',
              start: '2022-09-29T12:30:00',
              end: '2022-09-29T16:30:00',
              color: '#06c'
          },
          {
              title: '경력직 채용면접',
              start: '2022-09-29T16:30:00',
              end: '2022-09-29T18:30:00',
              color: '#06c'
          },
      ]
    });

    calendar.render();
  });