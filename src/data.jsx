const data = {
    departments: [
      { id: '1', name: 'Cardiology' },
      { id: '2', name: 'Neurology' },
      { id: '3', name: 'Pediatrics' },
    ],
    doctors: {
      '1': [
        { id: '1', name: 'Dr. Smith' },
        { id: '2', name: 'Dr. Johnson' },
      ],
      '2': [
        { id: '3', name: 'Dr. Brown' },
        { id: '4', name: 'Dr. Davis' },
      ],
      '3': [
        { id: '5', name: 'Dr. Martinez' },
        { id: '6', name: 'Dr. Lee' },
      ],
    },
    timeSlots: {
      '1': {
        '1': ['09:00 AM', '10:00 AM', '11:00 AM'],
        '2': ['01:00 PM', '03:00 PM', '04:00 PM'],
      },
      '2': {
        '3': ['09:30 AM', '10:30 AM', '11:30 AM'],
        '4': ['01:30 PM', '03:30 PM', '04:30 PM'],
      },
      '3': {
        '5': ['08:00 AM', '09:00 AM', '10:00 AM'],
        '6': ['02:00 PM', '03:00 PM', '05:00 PM'],
      },
    },
  };
  
  export default data;
  