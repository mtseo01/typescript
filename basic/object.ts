const product: {
  name: string;
  price: number;
  details: {
    os: string;
    weight: number;
  };
} = {
  name: 'Galaxy s23',
  price: 1200,
  details: {
    os: 'Android 13',
    weight: 168,
  },
};

console.log(product);

export {};
