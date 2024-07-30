import { propTypeClassName } from "@material-tailwind/react/types/components/timeline";

const Products = [
  {
    id: 8,
    name: "uLosk Mini case 2.0, Xenon i10",
    specs: "32GB / SSD 512GB / VGA 8GB",
    price: 1729.00,
    originalPrice: 2119.00,
    discount: 59.00,
    shipping: "Free Shipping",
    availability: "Out of stock",
    image: "https://s3-alpha-sig.figma.com/img/0197/5265/23fafbf3635c4b46e1fde819e1dc2ecb?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wm2oKQLuyAqF~ciTAHhoiMDhWNevq5Ph6CDvYqKndRONgmbOrrWuFYJnZqcjTJF5bCzvSX3F7LHyNq5bDvKd9ksHIcCLK9Xxj7QNAZAvPXJ~fSVxzcUqiIK-eRoMewMrSmN1ei0nVBO~LM9zbtgZH2S5jhneNZUVocPGynxhZxIm1iSzf7KZnHGMFIBorIJ7rQLe7V1bI3OqcFeeyVwZS0tPTZhnwfdUzLzL4wJ~RgLIH4xMnsS43Gm3JodWpaBBAfW7UougcyAInXQDbGC69ypAUENc7WetiN7j1G7jOtlQerNV59wOhKvd-kHN4ROkTj822VY3iQONO3QeIkNcuA__"
  },
  {
    id: 9,
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    specs: "",
    priceRange: {
      min: 979.00,
      max: 1259.00
    },
    color: "Black",
    shipping: "2.98 Shipping",
    availability: "Pre-order",
    image: "https://s3-alpha-sig.figma.com/img/a6db/a9c6/0c4399ce199fd5657145a6a95461ef81?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fq8cRHxUrcb~UPCFNQ299P1-sRIFm8rRI5kxqdOAM5wlV6gDe6mfqDVaYiWxhlMAvy7suiCLEVr5T0m17MliMFJhcWx~7S5dapiNj4ZQ81Meiaw7epjxqh5NdtWiJOeXqcX~LiUXj8VO10UPomUDjCfQWOlkZhxx0uNLUi39-mJBI96-3NZ3kN-QrpScxK1A29xEelneMq0APU7sb5L~B6YE0nrSxlT1js1RZFz2fjADCaErICwQ10Y-u6r2C~sr5aIDtUC2QuSMfal0sPP02r-O9A~mug9TwlG32cLdmMRMjUuY-dD8PxKxIxpDJL13vxL1qaV~7PQlmT1ScMlOGw__"
  },
  {
    id: 10,
    name: "iSmart 24V Charger",
    specs: "24V Charger",
    price: 9.00,
    originalPrice: 12.00,
    discount: 3.00,
    shipping: "3.98 Shipping",
    availability: "Contact",
    image: "https://s3-alpha-sig.figma.com/img/6c00/b1b2/1e6859ec3f40138bedd69be262e356d3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jSlEhzfeH4tnxBoQQPlkf~wQHtDoW3rmNCJBZ5X3Ks3vlCNV2ke9GQUelh5F3w9bYXiw9zysZIR5uSzdJUL~ce10ExU22olepcGF9JYkf5Ng-UmBS93~1uCHH68h5jSuQXqztAsmiQZZ5vrQl7sxR2LSWIf~7JJrr49rYi7rXUBJ2-MY4rmGtQAbHAMxrot8SoLg0Uu7Svxwm6jnqyrHbbXm-iRO5FpR3-BSrh62~HPlZObzZ53M69DYRiuxj7K25VQ~Hw7XDqDQataW49Wr7XEjWrzmgrAgMGwCCAh3kkJQE5sJv8m0B5ni8V37Xyav-QyuhRcmKPw7TQ1psJD5AA__"
  },
  {
    id: 152,
    name: "OPod Pro 12.9 Inch M1 2023",
    specs: "64GB + Wifi, GPS",
    price: 569.00,
    originalPrice: 759.00,
    discount: 199.00,
    shipping: "Free Shipping",
    availability: "In stock",
    image: "https://s3-alpha-sig.figma.com/img/70fb/3352/120a006a36410fe660bdcf040428d535?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J5tGZd1IPDXdZLNvtNaA4x7EEV1852Kz-WN5vpItQT2qD-0foIQEODGcAErGba~pjpYBhPVoEBcKP1aY8KTv47yOnJifo2RyRJJ4ejpSKASlKduDiGTsm6SH6eAhhyvCIdmdm4dZcYh-UNwVXQwdjf6zSMlKIfxEUZUrnK5aHJGcxuDyJmns~rS8FNu5xPx1JgmZs24GuF-VqZEHwuHjPtr7bWjtGLCRhb9h-Cq7DpBk0mqu9NbNvgEOV6HPY4PZgzcIwivkbJT466ay5AHwVcNEHSFUU8IFHAfy2sxjeke4xMpmpPvuQh0epy8SupZ3DqVgIJcK4hoKXN36A2Ly0g__"
  },
  {
    id: 152,
    name: "SROK Smart Phone 128GB, Oled Retina",
    specs: "128GB / Oled Retina",
    price: 579.00,
    originalPrice: 759.00,
    discount: 199.00,
    shipping: "Free Shipping",
    availability: "In stock",
    image: "https://s3-alpha-sig.figma.com/img/175d/4e01/c3ccc08552a7608516d07ff4f2593a4a?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LIEeEt9x89zLhrPrUp8ueJ5ThyrdXRdsN4ttcjTjLZGwvmkRwM6ggGIMq9ECy~RacRWiGgoscEcD9kueJDipH0qqY05C1Iks~ez0uUfR1RBNFu73Oq~a~My9guvZsUISDdsiQ9vIpwKaveMdlQLI7kN4aEwplfVAk2tfqrKDLaFTxS1z5452yCPtDSlfmsRuNU~2te8JCyANsgQBbMiTufTcx5KSBP9Xt9bfUTgsrQsYEX72qhxfEvoX5GfrvGktZ4dB8f5GLNR1oMAAoTqugTxz0XBTR0KoBVsI7klptYuiDn5w1KyzROvUCnor5MhG8yb6jJgxezN1HzmoLbaUbw__"
  },
  {
    id: 152,
    name: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch, 512GB",
    specs: "512GB / Wifi, GPS Cellular",
    priceRange: {
      min: 979.00,
      max: 1259.00
    },
    shipping: "2.98 Shipping",
    availability: "In stock",
    image: "https://s3-alpha-sig.figma.com/img/f731/1fe8/359d8e443a010f51a2a03878d38edca5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhQF4iXvFgVj80p4msBkQRbF8gl120RKN2sHWekWO76evK4r-XCjAAVSTOKdZHYFGGuKOgAGisw5XIEkZzKHJwWc7dTGnp-119DHXMgUhn5E3lE0~ipBxc6WXOe7gIAlcvHiFTxWkYn5DLimO46nQem58To1vYP3pwjEdm9DV3OKrmICl2tfexGtoO64jHwGCAW70zleWVlKnLLKkeQMaQnHUhN~cfdkHu9N64PbJMq8cVftjDHaQSZWrS~FcVTYwy1CuFzLswBZKvmqi~ka4PUSgfSM97U1nRhGKRWZ43sdDmskkKaHWBBDY9nxekpqIcU3SbRivcThB3qbeV1auQ__"
  },
  {
    id: 152,
    name: "Samsung Galaxy X6 Ultra LTE 4G/128 Gb, Black Smartphone",
    specs: "128GB / LTE 4G",
    price: 659.00,
    originalPrice: null,
    discount: null,
    shipping: "Free Shipping",
    availability: "In stock",
    image: "https://s3-alpha-sig.figma.com/img/ea0c/93bf/3f5c87594153c93d6ee1cb8aa3dece52?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oF5g5fkC1j41MeM3uOOVFTCagMiJONxpxzHgXPh8FuvpiioO9V8~Ffmpn5-Hr5XKQpeZqtYz7hBxpSOphnXs7r0mb~XegHr0JMJkmTA5liEQSv~2KK~JcY5Q-dmHK-cWjGeRVefQCkOilsk5IdIKk0Iowj5W~kTLYieufnUi~gy61bGwq0XzzHy96HcxHaqEFCkyk0L0GNXxILXAvySAHKbZk1JIf9l0WWUjUims9mM8Tjqh6r~WyJdUGxFz6HTuYQcczQfTHX1MHEFwgO1EIApG6BxydZIqtc5zfW3SObcM9pLEFgyaSikP9yAOIfFfm6foB0ErOe4jwozIE-kUKQ__"
  },
  {
    id: 152,
    name: "Xiaomi Redmi Note 5, 64GB",
    specs: "64GB / LTE",
    price: 1239.00,
    originalPrice: 1610.00,
    discount: 59.00,
    shipping: "Free Shipping",
    availability: "Contact",
    image: "https://s3-alpha-sig.figma.com/img/e971/6b3d/a8adab464285c71a3f34ecbb005d65b2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gz1tBD-T3j1dN0gbAoSOGNhVdPgnur5DPY6BauzSvU7bwq-IVvZz~0NZlPtcm2j5hKezeKkHjdS0XBBX9kmkaq6LBlRI7OtfSesJ3vlqeFB3trirY5OAVSNZ1RRrWGF9t5A4~rsb9pH79IqarQnIYJm7a0nk9xqDWPTkIteToPiQ1kgPf-qyqKCgglN9Ghb7LR0GQunM2gbqH52MwC49BfXaZEuadZVvkn59QUudG2V-jNAsj3krk2ybBGG~yWwjo-GSc~RD9lrUEMn~28BL4n9icookrvjNHlAdY1r0cDTPmNXaKAqDu6fJodGbUV1ue3tB3zDLntViWVj4cQ-7Tw__"
  },
];

export default Products;
