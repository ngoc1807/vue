// import { icon } from "leaflet";
import { DateTime } from "luxon";
// import { LocationDefaultIcon } from '../assets/images'

// import { DataMap } from '../models'

export interface DataMap {
  id: number;
  latitude: string;
  longitude: string;
  user?: User;
  history?: History[];
}

export interface User {
  name?: string;
  age?: string;
  address?: string;
}

export interface History {
  date?: string;
  polyline?: number[][];
}

// export const iconDefault = icon({
//   iconUrl: LocationDefaultIcon,
//   iconSize: [25, 40],
// });
export const DemoMapsData: DataMap[] = [
  {
    id: 1,
    latitude: "20.959416",
    longitude: "105.770497",
    user: { name: "Nguyen Van A" },
    history: [
      {
        date: DateTime.local().toFormat("yyyy-MM-dd "),
        polyline: [
          [20.959416, 105.770497],
          [20.970687, 105.854451],
          [21.041839, 105.767189],
          [21.037353, 105.903236],
          [21.070034, 105.804293],
          // [20.960428, 105.802231],
          // [20.826526, 105.962241],
          // [20.489859, 106.077629],
          // [20.152451, 106.198559],
          // [20.108611, 105.574669],
          // [19.722353, 105.658662],
          // [19.484314, 105.004539],
        ],
      },
      {
        date: DateTime.local().plus({ days: -1 }).toFormat("yyyy-MM-dd "),
        polyline: [
          [21.037353, 105.903236],
          [21.070034, 105.804293],
          [20.960428, 105.802231],
          [20.826526, 105.962241],
        ],
      },
      {
        date: DateTime.local().plus({ days: -2 }).toFormat("yyyy-MM-dd "),
        polyline: [
          [20.152451, 106.198559],
          [20.108611, 105.574669],
          [19.722353, 105.658662],
          [19.484314, 105.004539],
        ],
      },
    ],
  },
  {
    id: 2,
    latitude: "20.970687",
    longitude: "105.854451",
    user: { name: "Nguyen Van B" },
    history: [
      {
        date: DateTime.local().toFormat("yyyy-MM-dd "),
        polyline: [
          [19.722353, 105.658662],
          [19.484314, 105.004539],
          [21.070034, 105.804293],
          [20.960428, 105.802231],
          [20.826526, 105.962241],
          [20.489859, 106.077629],
          [20.152451, 106.198559],
          [20.108611, 105.574669],
        ],
      },
      {
        date: DateTime.local().plus({ days: -1 }).toFormat("yyyy-MM-dd "),
        polyline: [
          [20.489859, 106.077629],
          [20.152451, 106.198559],
          [20.108611, 105.574669],
          [19.722353, 105.658662],
          [19.484314, 105.004539],
        ],
      },
      {
        date: DateTime.local().plus({ days: -2 }).toFormat("yyyy-MM-dd "),
        polyline: [
          [21.041839, 105.767189],
          [21.037353, 105.903236],
          [21.070034, 105.804293],
          [20.960428, 105.802231],
          [20.826526, 105.962241],
        ],
      },
    ],
  },
  {
    id: 3,
    latitude: "21.041839",
    longitude: "105.767189",
    user: { name: "Nguyen Van C" },
    history: [
      {
        date: DateTime.local().toFormat("yyyy-MM-dd "),
        polyline: [
          [20.959416, 105.770497],
          [20.970687, 105.854451],
          [21.041839, 105.767189],

          [19.722353, 105.658662],
          [19.484314, 105.004539],
        ],
      },
      {
        date: DateTime.local().plus({ days: -1 }).toFormat("yyyy-MM-dd "),
        polyline: [
          [21.041839, 105.767189],
          [21.037353, 105.903236],
          [21.070034, 105.804293],
          [20.960428, 105.802231],
          [20.826526, 105.962241],
        ],
      },
      {
        date: DateTime.local().plus({ days: -2 }).toFormat("yyyy-MM-dd "),
        polyline: [
          [20.152451, 106.198559],
          [20.108611, 105.574669],
          [19.722353, 105.658662],
          [19.484314, 105.004539],
        ],
      },
    ],
  },
  {
    id: 4,
    latitude: "21.037353",
    longitude: "105.903236",
    user: { name: "Nguyen Van D" },
  },
  {
    id: 5,
    latitude: "21.070034",
    longitude: "105.804293",
    user: { name: "Nguyen Van E" },
  },
  {
    id: 6,
    latitude: "20.960428",
    longitude: "105.802231",
    user: { name: "Nguyen Van F" },
  },
  {
    id: 7,
    latitude: "20.826526",
    longitude: "105.962241",
    user: { name: "Nguyen Van G" },
  },
  {
    id: 8,
    latitude: "20.489859",
    longitude: "106.077629",
    user: { name: "Nguyen Van K" },
  },

  {
    id: 9,
    latitude: "20.152451",
    longitude: "106.198559",
    user: { name: "Nguyen Van L" },
  },
  {
    id: 10,
    latitude: "20.108611",
    longitude: "105.574669",
    user: { name: "Nguyen Van M" },
  },
  {
    id: 11,
    latitude: "19.722353",
    longitude: "105.658662",
    user: { name: "Nguyen Van N" },
  },
  {
    id: 12,
    latitude: "19.484314",
    longitude: "105.004539",
    user: { name: "Nguyen Van O" },
  },
];
export const DemoImagesData = [
  {
    id: 1,
    src: "https://swiperjs.com/demos/images/nature-1.jpg",
    alt: "test1",
  },
  {
    id: 2,
    src: "https://swiperjs.com/demos/images/nature-2.jpg",
    alt: "test2",
  },
  {
    id: 3,
    src: "https://swiperjs.com/demos/images/nature-3.jpg",
    alt: "test3",
  },
  {
    id: 4,
    src: "https://swiperjs.com/demos/images/nature-4.jpg",
    alt: "test4",
  },
  {
    id: 5,
    src: "https://swiperjs.com/demos/images/nature-5.jpg",
    alt: "test5",
  },
  {
    id: 6,
    src: "https://swiperjs.com/demos/images/nature-6.jpg",
    alt: "test6",
  },
  {
    id: 7,
    src: "https://swiperjs.com/demos/images/nature-7.jpg",
    alt: "test7",
  },
  {
    id: 8,
    src: "https://swiperjs.com/demos/images/nature-8.jpg",
    alt: "test8",
  },
  {
    id: 9,
    src: "https://swiperjs.com/demos/images/nature-9.jpg",
    alt: "test9",
  },
];
