import fieldAnalysis from "@/data/prepare/1-field-analysis";
import buildingRetrofitting from "@/data/prepare/2-building-retrofitting";
import insurance from "@/data/prepare/3-insurance";
import roomSafety from "@/data/prepare/4-room-safety";
import furnitures from "@/data/prepare/5-furnitures";
import bag from "@/data/prepare/6-bag";
import car from "@/data/prepare/7-car";
import awareness from "@/data/prepare/8-awareness";
import dropCoverHoldOn from "@/data/during/1-drop-cover-hold-on";
import todos from "@/data/during/2-todos";
import afterTodos from "@/data/after/1-todos";

const data = [
  {
    title: "Öncesi",
    href: "/prepare",
    data: [
      {
        title: "Alan Analizi",
        href: "/prepare/1-field-analysis",
        data: fieldAnalysis,
      },
      {
        title: "Bina Güçlendirme",
        href: "/prepare/2-building-retrofitting",
        data: buildingRetrofitting,
      },
      {
        title: "Sigorta",
        href: "/prepare/3-insurance",
        data: insurance,
      },
      {
        title: "Oda güvenliği",
        href: "/prepare/4-room-safety",
        data: roomSafety,
      },
      {
        title: "Mobilyalar",
        href: "/prepare/5-furnitures",
        data: furnitures,
      },
      {
        title: "Deprem çantası",
        href: "/prepare/6-bag",
        data: bag,
      },
      {
        title: "Araç içi eşyalar",
        href: "/prepare/7-car",
        data: car,
      },
      {
        title: "Farkındalık oluşturma",
        href: "/prepare/8-awareness",
        data: awareness,
      },
    ],
  },
  {
    title: "Anında",
    href: "/during",
    data: [
      {
        title: "Hayat üçgeni",
        href: "/during/1-drop-cover-hold-on",
        data: dropCoverHoldOn,
      },
      {
        title: "Deprem anında",
        href: "/during/2-todos",
        data: todos,
      },
    ],
  },
  {
    title: "Sonrası",
    href: "/after",
    data: [
      {
        title: "Deprem sonrası",
        href: "/after/1-todos",
        data: afterTodos,
      },
    ],
  },
];

export default data;
