export default {
  taxonomy: {
    types: [
      { id: "camiseta", name: "Camiseta" },
      { id: "moleton", name: "Moleton" },
      { id: "caneca", name: "Caneca" },
      { id: "almofada", name: "Almofada" },
      { id: "quadro", name: "Quadro" },
    ],
    tags: [
      { id: "filme", name: "Filme" },
      { id: "cantor", name: "Cantor(a)" },
      { id: "banda", name: "Banda" },
      { id: "diretor", name: "Diretor" },
      { id: "artista", name: "Artista" },
      { id: "jogo", name: "Jogo" },
      { id: "livro", name: "Livro" },
      { id: "anime", name: "Anime" },
      { id: "quadrinho", name: "Quadrinho" },
    ],
    flags: [
      { id: "limited", name: "Limitado", color: "teal" },
      { id: "promo", name: "Promoção", color: "red" },
    ],
  },

  products: [
    {
      id: "camiseta-jodorowsky-eye",
      name: "Jodorowsky Eye",
      price: 100,
      image:
        "https://i.pinimg.com/1200x/89/0d/bd/890dbd74657d6df6088c914dffb830da.jpg",
      types: ["camiseta"],
      tags: ["banda"],
      flags: ["promo"],
    },
    {
      id: "camiseta-basquiat",
      name: "Basquiat",
      price: 100,
      image:
        "https://i.pinimg.com/736x/8d/7b/9a/8d7b9a8f65aa368b333b383b1abea821.jpg",
      types: ["camiseta"],
      tags: ["artista"],
    },
    // {
    //   id: "camiseta-bjork-ja-sonhou-com-esta-pessoa",
    //   name: "Já Sonhou Com Esta Pessoa?",
    //   price: 100,
    //   image:
    //     "https://i.pinimg.com/736x/ca/ff/99/caff9935ea14a93c93373769de21eb0d.jpg",
    //   types: ["camiseta"],
    //   tags: ["cantor"],
    // },
    {
      id: "camiseta-they-live-obey",
      name: "They Live - Obey",
      price: 100,
      image:
        "https://i.pinimg.com/1200x/28/e1/6f/28e16f42cd029a8a4a909c98851e6e6c.jpg",
      types: ["camiseta"],
      tags: ["cantor"],
    },
    {
      id: "camiseta-they-live-john-nada",
      name: "They Live - John Nada",
      price: 100,
      image:
        "https://i.pinimg.com/736x/24/10/2e/24102e4f736051e6e7fa159f256e2e9b.jpg",
      types: ["camiseta"],
      tags: ["cantor"],
    },
    {
      id: "camiseta-august-underground-mordum",
      name: "August Underground - Mordum",
      price: 100,
      image:
        "https://i.pinimg.com/1200x/9e/2f/af/9e2fafa59cb7e43aa67450e042a3aed5.jpg",
      types: ["camiseta"],
      tags: ["cantor"],
    },
    {
      id: "camiseta-the-golden-glove",
      name: "The Golden Glove",
      price: 100,
      image:
        "https://i.pinimg.com/736x/1d/66/e3/1d66e3f9608684053a0baa01b1e3d852.jpg",
      types: ["camiseta"],
      tags: ["cantor"],
    },
    {
      id: "camiseta-uzumaki",
      name: "Uzumaki",
      price: 100,
      image:
        "https://i.pinimg.com/1200x/72/10/7a/72107a173e1b772ea49765389a521b7c.jpg",
      types: ["camiseta"],
      tags: ["cantor"],
    },
    {
      id: "camiseta-anna-varney-cantodea",
      name: "Anna-Varney Cantodea",
      price: 100,
      image:
        "https://i.pinimg.com/736x/02/b2/c8/02b2c8c29a5a01016831405bc7ead56b.jpg",
      types: ["camiseta"],
      tags: ["cantor"],
    },
    {
      id: "camiseta-tonetta-777-album",
      name: "Tonetta 777 Album",
      price: 100,
      image:
        "https://i.pinimg.com/736x/a8/43/9a/a8439a6a94714f2bedeb46f67d7e2713.jpg",
      types: ["camiseta"],
      tags: ["cantor"],
    },
    {
      id: "camiseta-housu",
      name: "Housu",
      price: 100,
      image:
        "https://i.pinimg.com/1200x/57/36/39/573639e7eca2577d7bcbd59323a0fedc.jpg",
      types: ["camiseta"],
      tags: ["filme"],
    },
    {
      id: "camiseta-begotten",
      name: "Begotten",
      price: 100,
      image:
        "https://i.pinimg.com/736x/aa/6a/5c/aa6a5c38a100743bc902445714a60d0c.jpg",
      types: ["camiseta"],
      tags: ["filme"],
    },
    {
      id: "camiseta-irreversible",
      name: "Irreversible",
      price: 100,
      image:
        "https://i.pinimg.com/736x/c3/98/8a/c3988af1483ae3acb88d595e0b400ce6.jpg",
      types: ["camiseta"],
      tags: ["filme"],
    },
  ],
};
