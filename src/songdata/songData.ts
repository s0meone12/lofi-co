export interface Track {
    id: number;
    name: string;
    mood: 'chill' | 'jazzy' | 'sleep';
    src: string;
  }
  
  export const chill: Track[] = [
    {
      id: 0,
      name: 'Chilly',
      mood: 'chill',
      src: './assets/lofi/chill1.mp3',
    },
    {
      id: 1,
      name: 'Hot',
      mood: 'chill',
      src: './assets/lofi/chill2.mp3',
    },
    {
      id: 2,
      name: 'Pepper',
      mood: 'chill',
      src: './assets/lofi/chill3.mp3',
    },
  ];
  
  export const jazzy: Track[] = [
    {
      id: 0,
      name: 'The autumn leaves',
      mood: 'jazzy',
      src: './assets/lofi/jazz1.mp3',
    },
    {
      id: 1,
      name: 'King Joe',
      mood: 'jazzy',
      src: './assets/lofi/jazz2.mp3',
    },
    {
      id: 2,
      name: 'Saxophone',
      mood: 'jazzy',
      src: './assets/lofi/jazz3.mp3',
    },
  ];
  
  export const sleep: Track[] = [
    {
      id: 0,
      name: 'Sleep Sleep Sleep',
      mood: 'sleep',
      src: './assets/lofi/sleepy1.mp3',
    },
    {
      id: 1,
      name: 'Good Night',
      mood: 'sleep',
      src: './assets/lofi/sleepy2.mp3',
    },
    {
      id: 2,
      name: 'Count the sheep',
      mood: 'sleep',
      src: './assets/lofi/sleepy3.mp3',
    },
    {
      id: 3,
      name: 'Dreamee',
      mood: 'sleep',
      src: './assets/lofi/sleepy4.mp3',
    },
  ];
  