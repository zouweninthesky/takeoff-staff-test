export interface ContactInterface {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const data = [
  {
    id: 23123,
    firstName: "Алексей",
    lastName: "Свотин",
    phone: "+7(928)555-55-55",
    email: "lexa@stena.ru",
  },
  {
    id: 23173,
    firstName: "Анна",
    lastName: "Уварова",
    phone: "+7(911)321-23-65",
    email: "anna.1956@ya.ru",
  },
  {
    id: 77723,
    firstName: "Лариса",
    lastName: "Ладошкова",
    phone: "+7(928)555-55-55",
    email: "fire@walkwith.me",
  },
  {
    id: 23963,
    firstName: "Дмитрий",
    lastName: "Залашков",
    phone: "+7(921)667-32-32",
    email: "dimazzzzz@gmail.com",
  },
  {
    id: 96385,
    firstName: "Александр",
    lastName: "Барабанов",
    phone: "+7(928)555-55-55",
    email: "baraban@mail.ru",
  },
];

export default data;
